"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const statuses = [
  "submitted",
  "under_review",
  "needs_info",
  "review_complete",
  "offer_sent",
  "accepted",
  "rejected",
  "expired",
  "closed",
] as const;

export default function AdminCaseEditor(props: {
  id: string;
  initialStatus: string;
  initialWinProbability: number | string;
  initialOfferEur: number | string;
  initialAdminNote: string;
}) {
  const router = useRouter();

  const [status, setStatus] = useState(props.initialStatus);
  const [winProbability, setWinProbability] = useState(String(props.initialWinProbability ?? ""));
  const [offerEur, setOfferEur] = useState(String(props.initialOfferEur ?? ""));
  const [adminNote, setAdminNote] = useState(props.initialAdminNote ?? "");

  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const suggestedOffer = useMemo(() => {
    // simple MVP-Hilfe: wenn du Offer leer lässt, kannst du später per Regel setzen
    return null;
  }, []);

  async function save() {
    setSaving(true);
    setErr(null);
    setMsg(null);

    const payload: {
      status: string;
      admin_note: string;
      win_probability?: number;
      offer_eur?: number;
    } = {
      status,
      admin_note: adminNote,
    };

    if (winProbability.trim() !== "") payload.win_probability = Number(winProbability);
    if (offerEur.trim() !== "") payload.offer_eur = Number(offerEur);

    const res = await fetch(`/api/admin/cases/${props.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    setSaving(false);

    if (!res.ok) {
      setErr(json?.error ?? "Unbekannter Fehler");
      return;
    }

    setMsg("Gespeichert ✅");
    router.refresh(); // lädt Server-Props neu
  }

  return (
    <div className="rounded-2xl border p-6">
      <h2 className="text-lg font-semibold">Admin Bewertung</h2>
      <p className="mt-1 text-sm text-gray-600">
        Trage Einschätzung ein und setze den Status.
      </p>

      <div className="mt-6 space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-medium">Status</label>
          <select
            className="w-full rounded-xl border px-3 py-2 text-sm"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {statuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm font-medium">Erfolgswahrscheinlichkeit (%)</label>
            <input
              className="w-full rounded-xl border px-3 py-2 text-sm"
              placeholder="z. B. 80"
              value={winProbability}
              onChange={(e) => setWinProbability(e.target.value)}
              inputMode="numeric"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Vergleichsangebot (EUR)</label>
            <input
              className="w-full rounded-xl border px-3 py-2 text-sm"
              placeholder="z. B. 480"
              value={offerEur}
              onChange={(e) => setOfferEur(e.target.value)}
              inputMode="numeric"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Interne Notiz</label>
          <textarea
            className="w-full rounded-xl border px-3 py-2 text-sm min-h-[120px]"
            placeholder="z. B. Gründe, Dokumente, Besonderheiten..."
            value={adminNote}
            onChange={(e) => setAdminNote(e.target.value)}
          />
        </div>

        {err && <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm">{err}</div>}
        {msg && <div className="rounded-xl border border-green-200 bg-green-50 p-3 text-sm">{msg}</div>}

        <button
          onClick={save}
          disabled={saving}
          className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white disabled:opacity-60"
        >
          {saving ? "Speichere..." : "Speichern"}
        </button>

        {suggestedOffer ? (
          <p className="text-xs text-gray-500">Vorschlag: {suggestedOffer}</p>
        ) : null}
      </div>
    </div>
  );
}
