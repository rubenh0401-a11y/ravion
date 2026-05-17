import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import { sendOfferSentEmail } from "@/lib/email";
import { readCaseAccessToken } from "@/lib/caseAccess";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const token = readCaseAccessToken(req);

  try {
    const supabase = supabaseServer();

    // Case holen (inkl. "offer_sent_email_sent_at")
    let caseQuery = supabase
      .from("cases")
      .select("id, status, contact_email, offer_eur, offer_sent_email_sent_at, access_token")
      .eq("id", id);

    if (token) {
      caseQuery = caseQuery.eq("access_token", token);
    }

    const { data: c, error: getErr } = await caseQuery.single();

    if (getErr || !c) {
      return NextResponse.json({ error: getErr?.message ?? "Not found" }, { status: 404 });
    }

    // Status setzen (idempotent)
    let updateQuery = supabase
      .from("cases")
      .update({
        status: "offer_sent",
        offer_sent_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (token) {
      updateQuery = updateQuery.eq("access_token", token);
    }

    const { error: updErr } = await updateQuery;

    if (updErr) {
      return NextResponse.json({ error: updErr.message }, { status: 500 });
    }

    // Email nur 1x
    if (c.contact_email && !c.offer_sent_email_sent_at) {
      try {
        await sendOfferSentEmail({
          to: c.contact_email,
          caseId: c.id,
          accessToken: c.access_token ?? null,
          offerEur: c.offer_eur ?? null,
        });

        await supabase
          .from("cases")
          .update({ offer_sent_email_sent_at: new Date().toISOString() })
          .eq("id", c.id);
      } catch (e) {
        console.error("sendOfferSentEmail failed:", e);
      }
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
