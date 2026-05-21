import Link from "next/link";
import type { Metadata } from "next";
import FlightRightsForm from "./FlightRightsForm";
import GeneralDisputeForm from "./GeneralDisputeForm";
import RailRightsForm from "./RailRightsForm";
import { getSiteLanguage } from "@/lib/siteLanguage";

type Relation = "B2C" | "B2B" | "C2C";
type B2CSub = "flight_rights" | "rail_rights" | "other_concern";
type Lang = "de" | "en";

export const metadata: Metadata = {
  title: "Fall einreichen",
  description: "Reiche deinen Fall digital ein und erhalte einen strukturierten Vergleichsvorschlag.",
  robots: {
    index: false,
    follow: false,
  },
};

const copy = {
  de: {
    invalidTitle: "Ungültige Auswahl",
    invalidText: "Bitte starte neu und wähle einen gültigen Typ aus.",
    back: "Zurück zu /start ->",
    title: "Fall einreichen",
    relation: "Beziehungstyp:",
    subtype: "Bereich:",
    chooseRelation: "Wähle zuerst den Beziehungstyp",
    chooseSub: "Wähle den passenden Bereich",
    relationCards: [
      {
        key: "B2C",
        title: "Verbraucher <-> Unternehmen",
        desc: "z. B. Passagierrechte oder sonstige Verbraucheransprüche",
      },
      {
        key: "B2B",
        title: "Unternehmen <-> Unternehmen",
        desc: "z. B. Vertrags- oder Leistungsstreit",
      },
      {
        key: "C2C",
        title: "Verbraucher <-> Verbraucher",
        desc: "z. B. privater Kauf oder Forderung",
      },
    ] as Array<{ key: Relation; title: string; desc: string }>,
    subCards: [
      {
        key: "flight_rights",
        title: "Fluggastrechte",
        desc: "Verspätung, Annullierung, Nichtbeförderung, Anschluss verpasst",
      },
      {
        key: "rail_rights",
        title: "Fahrgastrechte",
        desc: "Bahnreise mit Verspätung, Ausfall oder verpasstem Anschluss",
      },
      {
        key: "other_concern",
        title: "Sonstige Anliegen",
        desc: "Sonstige Verbraucherstreitigkeiten gegen Unternehmen",
      },
    ] as Array<{ key: B2CSub; title: string; desc: string }>,
    change: "Auswahl ändern",
    process: "Ablauf",
    steps: [
      "Du reichst den Fall ein (kostenlos).",
      "Wir prüfen ihn innerhalb von ca. 10 Tagen.",
      "Du erhältst eine unverbindliche Erfolgswahrscheinlichkeit + Vergleichsvorschlag.",
      "Nur mit deiner Zustimmung senden wir ein Angebot an die Gegenseite.",
    ],
    subtypeLabel: {
      flight_rights: "Fluggastrechte",
      rail_rights: "Fahrgastrechte",
      other_concern: "Sonstige Anliegen",
    } as Record<B2CSub, string>,
  },
  en: {
    invalidTitle: "Invalid selection",
    invalidText: "Please restart and choose a valid type.",
    back: "Back to /start ->",
    title: "Submit case",
    relation: "Relation type:",
    subtype: "Area:",
    chooseRelation: "Choose relation type first",
    chooseSub: "Choose the relevant area",
    relationCards: [
      {
        key: "B2C",
        title: "Consumer <-> Business",
        desc: "e.g. passenger rights or other consumer claims",
      },
      {
        key: "B2B",
        title: "Business <-> Business",
        desc: "e.g. contract or service disputes",
      },
      {
        key: "C2C",
        title: "Consumer <-> Consumer",
        desc: "e.g. private purchase or claim",
      },
    ] as Array<{ key: Relation; title: string; desc: string }>,
    subCards: [
      {
        key: "flight_rights",
        title: "Flight rights",
        desc: "Delay, cancellation, denied boarding, missed connection",
      },
      {
        key: "rail_rights",
        title: "Rail rights",
        desc: "Train delay, cancellation, or missed connection",
      },
      {
        key: "other_concern",
        title: "Other concerns",
        desc: "Other consumer disputes against businesses",
      },
    ] as Array<{ key: B2CSub; title: string; desc: string }>,
    change: "Change selection",
    process: "Process",
    steps: [
      "You submit the case (free).",
      "We review it within about 10 days.",
      "You receive a non-binding success probability + settlement proposal.",
      "We contact the counterparty only with your approval.",
    ],
    subtypeLabel: {
      flight_rights: "Flight rights",
      rail_rights: "Rail rights",
      other_concern: "Other concerns",
    } as Record<B2CSub, string>,
  },
} as const;

function isRelation(value?: string): value is Relation {
  return value === "B2C" || value === "B2B" || value === "C2C";
}

function isB2CSub(value?: string): value is B2CSub {
  return value === "flight_rights" || value === "rail_rights" || value === "other_concern";
}

export default async function NewCasePage({
  searchParams,
}: {
  searchParams: Promise<{ relation?: string; sub?: string }>;
}) {
  const sp = await searchParams;
  const relation = sp.relation;
  const sub = sp.sub;
  const lang: Lang = await getSiteLanguage();
  const t = copy[lang];

  if (!relation) {
    return (
      <main className="px-4 pb-12 pt-7 sm:px-6 sm:pb-14 sm:pt-9 lg:pb-16 lg:pt-10">
        <div className="app-wrap">
          <section className="surface-card mx-auto w-full max-w-4xl p-6 sm:p-10">
          <h1 className="text-2xl font-semibold">{t.chooseRelation}</h1>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {t.relationCards.map((item) => (
              <Link
                key={item.key}
                href={`/cases/new?relation=${item.key}`}
                className="soft-card rounded-xl border p-4 transition duration-200 hover:-translate-y-0.5"
                style={{ borderColor: "var(--border)", boxShadow: "0 8px 20px rgba(14,20,30,0.05)" }}
              >
                <div className="text-sm font-semibold">{item.key}</div>
                <div className="mt-2 font-medium">{item.title}</div>
                <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{item.desc}</div>
              </Link>
            ))}
          </div>
          </section>
        </div>
      </main>
    );
  }

  if (!isRelation(relation)) {
    return (
      <main className="px-4 pb-12 pt-7 sm:px-6 sm:pb-14 sm:pt-9 lg:pb-16 lg:pt-10">
        <div className="app-wrap">
          <section className="surface-card mx-auto w-full max-w-xl p-6 sm:p-8">
          <h1 className="text-2xl font-semibold">{t.invalidTitle}</h1>
          <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{t.invalidText}</p>
          <div className="mt-6">
            <Link className="text-sm font-medium brand-link" href="/start">
              {t.back}
            </Link>
          </div>
          </section>
        </div>
      </main>
    );
  }

  if (relation === "B2C" && !sub) {
    return (
      <main className="px-4 pb-12 pt-7 sm:px-6 sm:pb-14 sm:pt-9 lg:pb-16 lg:pt-10">
        <div className="app-wrap">
          <section className="surface-card mx-auto w-full max-w-4xl p-6 sm:p-10">
          <h1 className="text-2xl font-semibold">{t.chooseSub}</h1>
          <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
            {t.relation} <span className="font-medium">{relation}</span>
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {t.subCards.map((item) => (
              <Link
                key={item.key}
                href={`/cases/new?relation=B2C&sub=${item.key}`}
                className="soft-card rounded-xl border p-4 transition duration-200 hover:-translate-y-0.5"
                style={{ borderColor: "var(--border)", boxShadow: "0 8px 20px rgba(14,20,30,0.05)" }}
              >
                <div className="font-medium">{item.title}</div>
                <div className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{item.desc}</div>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link className="text-sm font-medium brand-link" href="/cases/new">
              {t.change}
            </Link>
          </div>
          </section>
        </div>
      </main>
    );
  }

  if (relation === "B2C" && !isB2CSub(sub)) {
    return (
      <main className="px-4 pb-12 pt-7 sm:px-6 sm:pb-14 sm:pt-9 lg:pb-16 lg:pt-10">
        <div className="app-wrap">
          <section className="surface-card mx-auto w-full max-w-xl p-6 sm:p-8">
          <h1 className="text-2xl font-semibold">{t.invalidTitle}</h1>
          <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{t.invalidText}</p>
          <div className="mt-6">
            <Link className="text-sm font-medium brand-link" href="/cases/new?relation=B2C">
              {t.change}
            </Link>
          </div>
          </section>
        </div>
      </main>
    );
  }

  const subtypeForView: B2CSub | null = relation === "B2C" ? (sub as B2CSub) : null;
  const categoryOverride =
    subtypeForView === "rail_rights"
      ? "rail_rights"
      : subtypeForView === "other_concern"
        ? "consumer_dispute"
        : undefined;

  return (
    <main className="px-4 pb-12 pt-7 sm:px-6 sm:pb-14 sm:pt-9 lg:pb-16 lg:pt-10">
      <div className="app-wrap">
        <section className="surface-card mx-auto w-full max-w-4xl p-6 sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold">{t.title}</h1>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                {t.relation} <span className="font-medium">{relation}</span>
              </p>
              {subtypeForView ? (
                <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                  {t.subtype} <span className="font-medium">{t.subtypeLabel[subtypeForView]}</span>
                </p>
              ) : null}
            </div>
            <Link href="/cases/new" className="text-sm font-medium brand-link">
              {t.change}
            </Link>
          </div>

          <div
            className="mt-6 rounded-xl border p-4 text-sm"
            style={{ borderColor: "var(--border)", background: "color-mix(in oklab, var(--surface-strong) 92%, #eef2f5)", color: "var(--muted)" }}
          >
            <div className="font-medium">{t.process}</div>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              {t.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {relation === "B2C" && subtypeForView === "flight_rights" ? (
            <FlightRightsForm relation="B2C" lang={lang} />
          ) : relation === "B2C" && subtypeForView === "rail_rights" ? (
            <RailRightsForm relation="B2C" lang={lang} />
          ) : (
            <GeneralDisputeForm relation={relation} lang={lang} categoryOverride={categoryOverride} />
          )}
        </section>
      </div>
    </main>
  );
}
