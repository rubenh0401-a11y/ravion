import Link from "next/link";
import { supabaseServer } from "@/lib/supabaseServer";
import AdminCaseEditor from "./ui";
import AdminLogoutButton from "../../AdminLogoutButton";
import CopyValueButton from "../../CopyValueButton";

type AuditLogRow = {
  id: number;
  admin_user_id: string;
  action: string;
  patch: unknown;
  created_at: string;
};

export default async function AdminCasePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = supabaseServer();
  const { data, error } = await supabase.from("cases").select("*").eq("id", id).single();
  const { data: auditData } = await supabase
    .from("admin_case_audit_logs")
    .select("id, admin_user_id, action, patch, created_at")
    .eq("case_id", id)
    .order("created_at", { ascending: false })
    .limit(20);

  if (error || !data) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-xl rounded-2xl border p-6">
          <h1 className="text-2xl font-semibold">Admin - Case not found</h1>
          <p className="mt-2 text-sm text-gray-600">ID: {id}</p>
          <Link className="mt-4 inline-block underline" href="/admin/cases">
            Back
          </Link>
        </div>
      </main>
    );
  }

  const auditRows = (auditData ?? []) as AuditLogRow[];

  return (
    <main className="min-h-screen p-6 flex items-start justify-center">
      <div className="w-full max-w-5xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Admin - Case {data.id.slice(0, 8)}</h1>
            <p className="mt-1 text-sm text-gray-600">
              {data.relation_type} - {data.category} - Status: {data.status}
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href={`/cases/confirm?id=${data.id}${data.access_token ? `&t=${encodeURIComponent(data.access_token)}` : ""}`}
              className="text-sm font-medium underline"
            >
              User view
            </Link>
            <Link href="/admin/cases" className="text-sm font-medium underline">
              Case list
            </Link>
            <AdminLogoutButton />
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h2 className="text-lg font-semibold">Case Data</h2>

            <div className="mt-4 grid gap-2 text-sm">
              <Row k="Case ID" v={data.id} />
              <Row k="Relation" v={data.relation_type} />
              <Row k="Category" v={data.category} />
              <Row k="Status" v={data.status} />
              <Row k="Claim" v={data.claim_eur != null ? `${data.claim_eur} EUR` : "-"} />
              <Row k="Email" v={data.contact_email ?? "-"} />
              <Row k="Created" v={new Date(data.created_at).toLocaleString()} />
              <Row k="Review due" v={new Date(data.review_due_at).toLocaleString()} />
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold">Facts (raw)</h3>
              <pre className="mt-2 text-xs rounded-xl bg-gray-50 p-3 overflow-auto">
                {JSON.stringify(data.facts ?? {}, null, 2)}
              </pre>
            </div>
          </div>

          <AdminCaseEditor
            id={data.id}
            initialStatus={data.status}
            initialWinProbability={data.win_probability ?? ""}
            initialOfferEur={data.offer_eur ?? ""}
            initialAdminNote={data.admin_note ?? ""}
          />
        </div>

        <div className="mt-6 rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">Audit Log</h2>
          <p className="mt-1 text-sm text-gray-600">Last 20 admin changes for this case.</p>

          {auditRows.length === 0 ? (
            <p className="mt-4 text-sm text-gray-600">No log entries yet.</p>
          ) : (
            <div className="mt-4 space-y-3">
              {auditRows.map((log) => (
                <div key={log.id} className="rounded-xl border p-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
                    <span>{new Date(log.created_at).toLocaleString()}</span>
                    <span>action: {log.action}</span>
                    <span title={log.admin_user_id}>admin: {shortValue(log.admin_user_id)}</span>
                    <CopyValueButton value={log.admin_user_id} />
                  </div>
                  <pre className="mt-2 text-xs rounded-lg bg-gray-50 p-3 overflow-auto">
                    {JSON.stringify(log.patch ?? {}, null, 2)}
                  </pre>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4">
      <div className="text-gray-600">{k}</div>
      <div className="font-medium text-gray-900 text-right">{v}</div>
    </div>
  );
}

function shortValue(v: string, n = 8) {
  if (!v) return "";
  if (v.length <= n) return v;
  return `${v.slice(0, n)}...`;
}
