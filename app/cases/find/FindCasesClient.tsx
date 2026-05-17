"use client";

import { useState } from "react";
import Link from "next/link";

type Lang = "de" | "en";

const copy = {
  de: {
    title: "Fall-Link erneut zuschicken",
    lead: "Gib die E-Mail-Adresse ein, mit der du den Fall eingereicht hast. Wir schicken dir die Links zu deinen Fällen.",
    email: "E-Mail",
    err: "Fehler",
    done: "Wenn es Fälle zu dieser E-Mail gibt, bekommst du gleich eine Nachricht mit den Links.",
    send: "Links zuschicken",
    sending: "Sende...",
    back: "Zurück",
  },
  en: {
    title: "Resend case links",
    lead: "Enter the email address used for the case. We will send links to your cases.",
    email: "Email",
    err: "Error",
    done: "If cases exist for this email, you will receive a message with the links shortly.",
    send: "Send links",
    sending: "Sending...",
    back: "Back",
  },
} as const;

export default function FindCasesClient({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setDone(false);
    setLoading(true);

    const res = await fetch("/api/cases/find", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setLoading(false);

    if (!res.ok) {
      const json = await res.json().catch(() => null);
      setErr(json?.error ?? t.err);
      return;
    }

    setDone(true);
  }

  return (
    <main className="min-h-screen p-6 flex items-center justify-center">
      <div className="w-full max-w-xl rounded-2xl border p-6">
        <h1 className="text-2xl font-semibold">{t.title}</h1>
        <p className="mt-2 text-sm text-gray-600">{t.lead}</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">{t.email}</label>
            <input
              className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          {err && <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm">{err}</div>}
          {done && <div className="rounded-xl border border-green-200 bg-green-50 p-3 text-sm">{t.done}</div>}

          <button
            disabled={loading}
            className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white disabled:opacity-60"
          >
            {loading ? t.sending : t.send}
          </button>
        </form>

        <div className="mt-6 text-sm">
          <Link href="/start" className="underline">
            {t.back}
          </Link>
        </div>
      </div>
    </main>
  );
}
