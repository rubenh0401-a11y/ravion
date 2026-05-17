import { sendCaseReceivedEmail } from "@/lib/email";
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import { createCaseAccessToken } from "@/lib/caseAccess";
import { clientIpFromHeaders, rateLimit } from "@/lib/rateLimit";

const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

export async function POST(req: Request) {
  try {
    const ip = clientIpFromHeaders(req.headers);
    const rl = rateLimit({
      key: `cases-create:${ip}`,
      limit: LIMIT,
      windowMs: WINDOW_MS,
    });

    if (!rl.allowed) {
      const retryAfter = Math.max(1, Math.ceil((rl.resetAt - Date.now()) / 1000));
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfter),
            "X-RateLimit-Limit": String(LIMIT),
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    const body = await req.json();

    const relation_type = body.relation_type;
    const category = body.category;

    if (!["B2C", "B2B", "C2C"].includes(relation_type)) {
      return NextResponse.json({ error: "Invalid relation_type" }, { status: 400 });
    }
    if (!category) {
      return NextResponse.json({ error: "Missing category" }, { status: 400 });
    }

    const supabase = supabaseServer();
    const accessToken = createCaseAccessToken();

    let { data, error } = await supabase
      .from("cases")
      .insert({
        relation_type,
        category,
        claim_eur: body.claim_eur ?? null,
        contact_email: body.contact_email ?? null,
        facts: body.facts ?? {},
        access_token: accessToken,
      })
      .select("id, contact_email, review_due_at, access_token")
      .single();

    const tokenColumnMissing =
      !!error &&
      typeof error.message === "string" &&
      error.message.includes("access_token");

    if (tokenColumnMissing) {
      const fallback = await supabase
        .from("cases")
        .insert({
          relation_type,
          category,
          claim_eur: body.claim_eur ?? null,
          contact_email: body.contact_email ?? null,
          facts: body.facts ?? {},
        })
        .select("id, contact_email, review_due_at")
        .single();

      data = fallback.data as (typeof data & { access_token?: string }) | null;
      error = fallback.error;
    }

    if (error || !data) {
      return NextResponse.json({ error: error?.message ?? "Insert failed" }, { status: 500 });
    }

    /* -----------------------------
       ✅ NEU: Eingangsbestätigung
    ------------------------------ */
    if (data.contact_email && data.review_due_at) {
      await sendCaseReceivedEmail({
        to: data.contact_email,
        caseId: data.id,
        accessToken: data.access_token ?? null,
      });
    }

    return NextResponse.json(
      { id: data.id, access_token: data.access_token ?? null },
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": String(LIMIT),
          "X-RateLimit-Remaining": String(rl.remaining),
        },
      }
    );
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}



