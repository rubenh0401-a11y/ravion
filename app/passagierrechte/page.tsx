import Link from "next/link";
import type { Metadata } from "next";
import { getSiteLanguage } from "@/lib/siteLanguage";

export const metadata: Metadata = {
  title: "Passagierrechte",
  description: "Überblick zu Fluggastrechten und Fahrgastrechten mit direktem Einstieg in deinen Fall.",
};

const copy = {
  de: {
    title: "Passagierrechte",
    lead:
      "Wähle den Bereich, der zu deinem Fall passt. Wir führen dich jeweils durch Regeln, typische Anspruchslagen und die nächsten sinnvollen Schritte.",
    open: "Öffnen ->",
    ctaButton: "Fall starten",
    cards: [
      {
        href: "/fluggastrechte-ueberblick",
        title: "Fluggastrechte",
        desc: "EU261-Überblick, Entschädigungshöhen, Ausnahmen und typische Anwendungsfälle.",
      },
      {
        href: "/fahrgastrechte-ueberblick",
        title: "Fahrgastrechte (DB)",
        desc: "Überblick zu Bahn-Fahrgastrechten: Verspätung, Erstattung und praktische Anspruchsführung.",
      },
    ],
  },
  en: {
    title: "Passenger rights",
    lead:
      "Choose the area that matches your case. Each section guides you through the core rules, typical claim scenarios, and practical next steps.",
    open: "Open ->",
    ctaButton: "Start case",
    cards: [
      {
        href: "/fluggastrechte-ueberblick",
        title: "Flight rights",
        desc: "EU261 overview, compensation ranges, exceptions, and common case scenarios.",
      },
      {
        href: "/fahrgastrechte-ueberblick",
        title: "Rail rights (DB)",
        desc: "Rail passenger-rights overview: delays, reimbursement, and practical claim handling.",
      },
    ],
  },
} as const;

export default async function PassengerRightsPage() {
  const lang = await getSiteLanguage();
  const t = copy[lang];

  return (
    <main className="px-4 pb-12 pt-7 sm:px-6 sm:pb-14 sm:pt-9 lg:pb-16 lg:pt-10">
      <div className="app-wrap">
        <section className="surface-card relative overflow-hidden p-6 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(41,66,89,0.14) 0%, transparent 72%)" }}
          />
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">{t.title}</h1>
          <p className="mt-4 max-w-4xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.lead}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="soft-card group rounded-2xl border p-5 transition duration-200 hover:-translate-y-1"
                style={{ borderColor: "var(--border)", boxShadow: "0 10px 24px rgba(14,20,30,0.06)" }}
              >
                <h2 className="text-xl font-semibold tracking-tight">{card.title}</h2>
                <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                  {card.desc}
                </p>
                <div className="mt-5 text-sm font-semibold brand-link transition-transform duration-200 group-hover:translate-x-0.5">{t.open}</div>
              </Link>
            ))}
          </div>
          <Link
            href="/cases/new?relation=B2C"
            className="mt-8 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: "var(--brand-strong)" }}
          >
            {t.ctaButton}
          </Link>
        </section>
      </div>
    </main>
  );
}
