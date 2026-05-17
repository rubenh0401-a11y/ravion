"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Lang = "de" | "en";

const copy = {
  de: {
    title: "Nächster Schritt",
    text: "Wenn du möchtest, senden wir den Vergleichsvorschlag an die Gegenseite.",
    sent: "Gesendet",
    send: "Vergleich an Gegenseite senden",
    sending: "Sende...",
    errPrefix: "Fehler",
  },
  en: {
    title: "Next step",
    text: "If you want, we will send the settlement proposal to the counterparty.",
    sent: "Sent",
    send: "Send proposal to counterparty",
    sending: "Sending...",
    errPrefix: "Error",
  },
} as const;

export default function SendOfferButton({
  id,
  accessToken,
  lang,
}: {
  id: string;
  accessToken?: string;
  lang: Lang;
}) {
  const t = copy[lang];
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  async function send() {
    setErr(null);
    setLoading(true);

    const res = await fetch(`/api/cases/${id}/send-offer`, {
      method: "POST",
      headers: accessToken ? { "x-case-token": accessToken } : undefined,
    });
    const json = await res.json().catch(() => null);

    setLoading(false);

    if (!res.ok) {
      setErr(json?.error ?? `${t.errPrefix} (${res.status})`);
      return;
    }

    setOk(true);
    router.refresh();
  }

  return (
    <div className="rounded-2xl border p-6 space-y-3">
      <h3 className="text-sm font-semibold">{t.title}</h3>
      <p className="text-sm text-gray-700">{t.text}</p>

      {err && <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm">{err}</div>}
      {ok && <div className="rounded-xl border border-green-200 bg-green-50 p-3 text-sm">{t.sent} ✅</div>}

      <button
        onClick={send}
        disabled={loading || ok}
        className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white disabled:opacity-60"
      >
        {loading ? t.sending : ok ? t.sent : t.send}
      </button>
    </div>
  );
}
