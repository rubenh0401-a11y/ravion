import Link from "next/link";
import { supabaseServer } from "@/lib/supabaseServer";

type CaseRow = {
  id: string;
  relation_type: string;
  category: string;
  status: string;
  created_at: string;
  review_due_at: string;
  claim_eur: number | null;
};

export default async function DashboardPage() {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("cases")
    .select("id, relation_type, category, status, created_at, review_due_at, claim_eur")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-2xl rounded-2xl border p-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="mt-3 text-sm text-red-700">Fehler beim Laden: {error.message}</p>
          <Link href="/start" className="mt-6 inline-block underline text-sm">
            Neuen Fall starten
          </Link>
        </div>
      </main>
    );
  }

  const rows = (data ?? []) as CaseRow[];

  return (
    <main className="min-h-screen p-6 flex items-start justify-center">
      <div className="w-full max-w-5xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="mt-1 text-sm text-gray-600">Interne Uebersicht (nur Admin).</p>
          </div>
          <Link
            href="/start"
            className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white"
          >
            Neuen Fall starten
          </Link>
        </div>

        <div className="mt-6 rounded-2xl border overflow-hidden">
          <div className="grid grid-cols-12 gap-0 bg-gray-50 px-4 py-3 text-xs font-medium text-gray-600">
            <div className="col-span-3">Case</div>
            <div className="col-span-2">Typ</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2 text-right">Forderung</div>
            <div className="col-span-3 text-right">Pruefung faellig</div>
          </div>

          {rows.length === 0 ? (
            <div className="px-4 py-10 text-sm text-gray-600">Noch keine Faelle vorhanden.</div>
          ) : (
            <div className="divide-y">
              {rows.map((r) => (
                <Link
                  key={r.id}
                  href={`/cases/confirm?id=${r.id}`}
                  className="grid grid-cols-12 px-4 py-4 text-sm hover:bg-gray-50 transition"
                >
                  <div className="col-span-3 font-medium">
                    {shortId(r.id)}
                    <div className="text-xs text-gray-500 mt-1">{prettyCategory(r.category)}</div>
                  </div>
                  <div className="col-span-2 text-gray-700">{r.relation_type}</div>
                  <div className="col-span-2">
                    <StatusPill status={r.status} />
                  </div>
                  <div className="col-span-2 text-right text-gray-700">
                    {r.claim_eur != null ? `${r.claim_eur} EUR` : "-"}
                  </div>
                  <div className="col-span-3 text-right text-gray-700">
                    {formatDateTime(r.review_due_at)}
                    <div className="text-xs text-gray-500 mt-1">
                      erstellt: {formatDateTime(r.created_at)}
                    </div>
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

function shortId(id: string) {
  return id.slice(0, 8);
}

function formatDateTime(v: string) {
  try {
    return new Date(v).toLocaleString();
  } catch {
    return v;
  }
}

function prettyCategory(cat: string) {
  if (cat === "flight_rights") return "Fluggastrechte";
  if (cat === "rail_rights") return "Fahrgastrechte";
  return cat;
}

function StatusPill({ status }: { status: string }) {
  const label =
    status === "submitted"
      ? "eingereicht"
      : status === "under_review"
        ? "in Pruefung"
        : status === "needs_info"
          ? "Rueckfrage"
          : status === "review_complete"
            ? "Einschaetzung fertig"
            : status === "offer_sent"
              ? "Angebot gesendet"
              : status === "accepted"
                ? "angenommen"
                : status === "rejected"
                  ? "abgelehnt"
                  : status === "expired"
                    ? "abgelaufen"
                    : status === "closed"
                      ? "geschlossen"
                      : status;

  return (
    <span className="inline-flex items-center rounded-full border px-2 py-1 text-xs font-medium">
      {label}
    </span>
  );
}
