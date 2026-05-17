import Link from "next/link";
import { supabaseServer } from "@/lib/supabaseServer";
import AdminLogoutButton from "../AdminLogoutButton";

type CaseRow = {
  id: string;
  relation_type: string;
  category: string;
  status: string;
  created_at: string;
  review_due_at: string;
  claim_eur: number | null;
  win_probability: number | null;
  offer_eur: number | null;
};

export default async function AdminCasesPage() {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("cases")
    .select("id, relation_type, category, status, created_at, review_due_at, claim_eur, win_probability, offer_eur")
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-2xl rounded-2xl border p-6">
          <h1 className="text-2xl font-semibold">Admin - Cases</h1>
          <p className="mt-3 text-sm text-red-700">Error: {error.message}</p>
        </div>
      </main>
    );
  }

  const rows = (data ?? []) as CaseRow[];

  return (
    <main className="min-h-screen p-6 flex items-start justify-center">
      <div className="w-full max-w-6xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Admin - Cases</h1>
            <p className="mt-1 text-sm text-gray-600">
              Review and update case status and evaluation values.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-sm font-medium underline">
              Dashboard
            </Link>
            <AdminLogoutButton />
          </div>
        </div>

        <div className="mt-6 rounded-2xl border overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-50 px-4 py-3 text-xs font-medium text-gray-600">
            <div className="col-span-2">Case</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2 text-right">Claim</div>
            <div className="col-span-2 text-right">P(win)</div>
            <div className="col-span-2 text-right">Offer</div>
          </div>

          {rows.length === 0 ? (
            <div className="px-4 py-10 text-sm text-gray-600">No cases yet.</div>
          ) : (
            <div className="divide-y">
              {rows.map((r) => (
                <Link
                  key={r.id}
                  href={`/admin/cases/${r.id}`}
                  className="grid grid-cols-12 px-4 py-4 text-sm hover:bg-gray-50 transition"
                >
                  <div className="col-span-2 font-medium">
                    {r.id.slice(0, 8)}
                    <div className="text-xs text-gray-500 mt-1">{prettyCategory(r.category)}</div>
                  </div>
                  <div className="col-span-2 text-gray-700">{r.relation_type}</div>
                  <div className="col-span-2">
                    <StatusPill status={r.status} />
                  </div>
                  <div className="col-span-2 text-right text-gray-700">
                    {r.claim_eur != null ? `${r.claim_eur} EUR` : "-"}
                  </div>
                  <div className="col-span-2 text-right text-gray-700">
                    {r.win_probability != null ? `${r.win_probability}%` : "-"}
                  </div>
                  <div className="col-span-2 text-right text-gray-700">
                    {r.offer_eur != null ? `${r.offer_eur} EUR` : "-"}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function prettyCategory(cat: string) {
  if (cat === "flight_rights") return "Flight Rights";
  if (cat === "rail_rights") return "Rail Rights";
  if (cat === "commercial_dispute") return "Commercial Dispute (B2B)";
  if (cat === "consumer_dispute") return "Consumer Dispute (C2C)";
  return cat;
}

function StatusPill({ status }: { status: string }) {
  const label =
    status === "submitted"
      ? "submitted"
      : status === "under_review"
        ? "under review"
        : status === "needs_info"
          ? "needs info"
          : status === "review_complete"
            ? "review complete"
            : status === "offer_sent"
              ? "offer sent"
              : status === "accepted"
                ? "accepted"
                : status === "rejected"
                  ? "rejected"
                  : status === "expired"
                    ? "expired"
                    : status === "closed"
                      ? "closed"
                      : status;

  return (
    <span className="inline-flex items-center rounded-full border px-2 py-1 text-xs font-medium">
      {label}
    </span>
  );
}
