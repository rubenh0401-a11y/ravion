import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/auth-helpers-nextjs";
import { supabaseServer } from "@/lib/supabaseServer";
import { sendReviewCompletedEmail } from "@/lib/email";

const allowedStatuses = new Set([
  "submitted",
  "under_review",
  "needs_info",
  "review_complete",
  "offer_sent",
  "accepted",
  "rejected",
  "expired",
  "closed",
]);

type CasePatch = {
  status?: string;
  win_probability?: number;
  offer_eur?: number;
  admin_note?: string;
};

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const cookieStore = await cookies();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return NextResponse.json({ error: "Supabase config missing" }, { status: 500 });
  }

  const authClient = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Route handlers might not always allow setting cookies in all contexts.
        }
      },
    },
  });
  const {
    data: { session },
  } = await authClient.auth.getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const role =
    (session.user.app_metadata as { role?: string } | undefined)?.role ??
    (session.user.user_metadata as { role?: string } | undefined)?.role;

  if (role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;

  try {
    const body = await req.json();
    const patch: CasePatch = {};

    if (body.status != null) {
      if (!allowedStatuses.has(body.status)) {
        return NextResponse.json({ error: "Invalid status" }, { status: 400 });
      }
      patch.status = body.status;
    }

    if (body.win_probability != null) {
      const v = Number(body.win_probability);
      if (!Number.isFinite(v) || v < 0 || v > 100) {
        return NextResponse.json({ error: "Invalid win_probability" }, { status: 400 });
      }
      patch.win_probability = v;
    }

    if (body.offer_eur != null) {
      const v = Number(body.offer_eur);
      if (!Number.isFinite(v) || v < 0) {
        return NextResponse.json({ error: "Invalid offer_eur" }, { status: 400 });
      }
      patch.offer_eur = v;
    }

    if (body.admin_note != null) {
      patch.admin_note = String(body.admin_note);
    }

    if (Object.keys(patch).length === 0) {
      return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
    }

    const supabase = supabaseServer();

    const { data: updated, error: updateError } = await supabase
      .from("cases")
      .update(patch)
      .eq("id", id)
      .select("id,status,contact_email,win_probability,offer_eur,claim_eur,review_completed_email_sent_at,access_token")
      .single();

    if (updateError || !updated) {
      return NextResponse.json(
        { error: updateError?.message ?? "Update failed" },
        { status: 500 }
      );
    }

    if (
      updated.status === "review_complete" &&
      updated.contact_email &&
      !updated.review_completed_email_sent_at
    ) {
      try {
        await sendReviewCompletedEmail({
          to: updated.contact_email,
          caseId: updated.id,
          accessToken: updated.access_token ?? null,
          winProbability: updated.win_probability ?? null,
          offerEur: updated.offer_eur ?? null,
          claimEur: updated.claim_eur ?? null,
        });

        await supabase
          .from("cases")
          .update({ review_completed_email_sent_at: new Date().toISOString() })
          .eq("id", updated.id);
      } catch (e) {
        console.error("sendReviewCompletedEmail failed:", e);
      }
    }

    try {
      await supabase.from("admin_case_audit_logs").insert({
        case_id: updated.id,
        admin_user_id: session.user.id,
        action: "case_patch",
        patch,
      });
    } catch (e) {
      console.error("admin audit log insert failed:", e);
    }

    return NextResponse.json({ ok: true, id: updated.id }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
