import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import { sendCaseLinksEmail } from "@/lib/email";
import { clientIpFromHeaders, rateLimit } from "@/lib/rateLimit";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMIT = 3;
const WINDOW_MS = 10 * 60 * 1000;

export async function POST(req: Request) {
  try {
    const ip = clientIpFromHeaders(req.headers);
    const rl = rateLimit({
      key: `cases-find:${ip}`,
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
    const email = String(body?.email ?? "").trim().toLowerCase();

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const supabase = supabaseServer();
    const { data, error } = await supabase
      .from("cases")
      .select("id, access_token, created_at, status")
      .eq("contact_email", email)
      .order("created_at", { ascending: false })
      .limit(20);

    if (error) {
      console.error("cases/find select error:", error);
      // Privacy-safe response: do not reveal internal lookup details
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const rows = data ?? [];
    if (rows.length > 0) {
      await sendCaseLinksEmail({
        to: email,
        items: rows.map((row) => ({
          caseId: row.id as string,
          accessToken: (row as { access_token?: string | null }).access_token ?? null,
          createdAt: (row as { created_at?: string | null }).created_at ?? null,
          status: (row as { status?: string | null }).status ?? null,
        })),
      });
    }

    // Always generic response for privacy
    return NextResponse.json(
      { ok: true },
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": String(LIMIT),
          "X-RateLimit-Remaining": String(rl.remaining),
        },
      }
    );
  } catch (e) {
    console.error("cases/find bad request:", e);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
