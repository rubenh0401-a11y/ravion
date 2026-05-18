import Link from "next/link";
import { cookies } from "next/headers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start",
  description: "Ravion: digitale außergerichtliche Streitbeilegung für B2C, B2B und C2C.",
};

type AdvantageIcon = "offer" | "cost" | "safety";

const copy = {
  de: {
    brand: "RAVION",
    title: "Ansprüche klären, ohne Kosten und ohne Risiko.",
    lead:
      "Ravion ist eine außergerichtliche Streitschlichtungsstelle. Wir strukturieren deinen Fall digital, bewerten die Erfolgschance und erstellen ein belastbares Vergleichsangebot, für Verbraucher ohne Kosten und vor allem ohne Risiken.",
    primaryCta: "Fall starten",
    secondaryCta: "Passagierrechte ansehen",
    densityTitle: "Warum Ravion ein echter Vorteil ist",
    densityItems: [
      { icon: "offer", k: "Garantierter Vorschlag", v: "Vergleichsangebot in max. 10 Tagen" },
      { icon: "cost", k: "Keine Vorkosten", v: "Für Verbraucher entstehen keine Kosten" },
      { icon: "safety", k: "Kein Lock-in", v: "Du kannst jederzeit aussteigen" },
      { icon: "safety", k: "Keine Abtretung", v: "Keine Abtretung deiner Forderung" },
    ],
    flowTitle: "So läuft dein Fall mit Ravion",
    flow: [
      { t: "1. Fall erfassen", d: "Fakten, Betrag und Dokumente strukturiert einreichen." },
      { t: "2. Bewertung erhalten", d: "Wir berechnen die Erfolgswahrscheinlichkeit und schlagen darauf basierend einen Vergleich vor." },
      { t: "3. Vergleich senden", d: "Nur mit deiner Freigabe geht das Angebot raus." },
    ],
    optionsTitle: "Wähle den passenden Falltyp",
    optionsEyebrow: "Einstieg",
    optionsHint: "Der Wechsel zu einem anderen Durchsetzungsweg bleibt jederzeit möglich.",
    cta: "Fall starten",
    ctaSubline: "Unverbindlich und ohne Lock-in",
    notice: "Hinweis: Für Verbraucher im B2C ist Ravion kostenfrei. In B2B/C2C fallen Erfolgsgebühren an. Einschätzungen sind unverbindlich und keine Rechtsberatung.",
    options: [
      {
        key: "B2C",
        title: "Verbraucher ↔ Unternehmen",
        desc: "z. B. Fluggastrechte gegen Airline",
        badge: "Heute live",
      },
      {
        key: "B2B",
        title: "Unternehmen ↔ Unternehmen",
        desc: "z. B. Vertrags- oder Leistungsstreit",
        badge: "Neu",
      },
      {
        key: "C2C",
        title: "Verbraucher ↔ Verbraucher",
        desc: "z. B. privater Kauf / Kleinanzeigen",
        badge: "Neu",
      },
    ],
  },
  en: {
    brand: "RAVION",
    title: "Resolve claims without cost and without risk.",
    lead:
      "Ravion is an out-of-court dispute resolution service. We structure your case digitally, evaluate success probability, and prepare a robust settlement proposal, with no upfront consumer costs and no early downside risk.",
    primaryCta: "Start case",
    secondaryCta: "Explore passenger rights",
    densityTitle: "Why Ravion creates real advantage",
    densityItems: [
      { icon: "offer", k: "Guaranteed proposal", v: "Settlement offer within max. 10 days" },
      { icon: "cost", k: "No upfront cost", v: "No consumer cost at start" },
      { icon: "safety", k: "No lock-in", v: "You can exit at any time" },
      { icon: "safety", k: "No assignment", v: "No assignment of your claim" },
    ],
    flowTitle: "How your case moves with Ravion",
    flow: [
      { t: "1. Capture case", d: "Submit facts, amount, and documents in one structure." },
      { t: "2. Get assessment", d: "Transparent probability assessment, no black box." },
      { t: "3. Send proposal", d: "The offer is sent only with your explicit approval." },
    ],
    optionsTitle: "Choose the right case type",
    optionsEyebrow: "Start",
    optionsHint: "You can still switch to another enforcement route at any point.",
    cta: "Start case",
    ctaSubline: "Non-binding and no lock-in",
    notice: "Note: Ravion is free for consumers in B2C. In B2B/C2C, success-based fees apply. Assessments are non-binding and not legal advice.",
    options: [
      {
        key: "B2C",
        title: "Consumer ↔ Business",
        desc: "e.g. passenger rights vs airline",
        badge: "Live now",
      },
      {
        key: "B2B",
        title: "Business ↔ Business",
        desc: "e.g. contract or service disputes",
        badge: "New",
      },
      {
        key: "C2C",
        title: "Consumer ↔ Consumer",
        desc: "e.g. private sale / marketplace disputes",
        badge: "New",
      },
    ],
  },
} as const;

function AdvantageGlyph({ icon }: { icon: AdvantageIcon }) {
  if (icon === "offer") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 4h7l4 4v12H7z" strokeLinejoin="round" />
        <path d="M14 4v4h4M10 12h5M10 16h3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (icon === "cost") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="6.5" width="17" height="11" rx="2.5" />
        <path d="M8 12h8M12 9.5v5M6.2 8.4l11.6 7.2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l7 3v6c0 4.2-3 7.6-7 9-4-1.4-7-4.8-7-9V6l7-3z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function StartPage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("site_lang")?.value === "de" ? "de" : "en";
  const t = copy[lang];

  return (
    <main className="bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <section className="grid gap-8 rounded-3xl bg-white p-8 shadow-sm sm:grid-cols-12 sm:p-10">
          <div className="sm:col-span-6 lg:col-span-7">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">{t.brand}</p>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">{t.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{t.lead}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/cases/new" className="rounded-full bg-blue-800 px-7 py-3 text-sm font-bold text-white shadow-xl ring-1 ring-blue-800/30 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50">{t.primaryCta}</Link>
              <Link href="/passagierrechte" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">{t.secondaryCta}</Link>
            </div>
          </div>

          <aside className="sm:col-span-6 lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">{t.densityTitle}</h2>
              <div className="mt-4 space-y-3">
                {t.densityItems.map((item) => (
                  <article key={item.k} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                    <div className="flex items-start gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 text-slate-700">
                        <AdvantageGlyph icon={item.icon} />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">{item.k}</h3>
                        <p className="text-sm text-slate-600">{item.v}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          {t.flow.map((step) => (
            <article key={step.t} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-900">{step.t.split(".")[0]}</div>
              <h3 className="text-lg font-semibold text-slate-900">{step.t}</h3>
              <p className="mt-1 text-sm text-slate-600">{step.d}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.35)] sm:p-8">
          <div className="mb-6 grid gap-3 border-b border-slate-200 pb-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{t.optionsEyebrow}</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-[2rem]">{t.optionsTitle}</h2>
            </div>
            <p className="max-w-[42ch] text-sm leading-relaxed text-slate-600 sm:text-right">{t.optionsHint}</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {t.options.map((o) => (
              <Link
                key={o.key}
                href={`/cases/new?relation=${o.key}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 shadow-[0_10px_24px_-22px_rgba(15,23,42,0.9)] transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_20px_35px_-24px_rgba(15,23,42,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400 opacity-80 transition group-hover:opacity-100"
                />
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                  {o.badge}
                </div>
                <h3 className="mt-4 text-[1.65rem] font-semibold leading-tight tracking-tight text-slate-900">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{o.desc}</p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="text-sm font-semibold text-slate-800">{t.cta}</p>
                  <p className="mt-1 text-xs text-slate-500">{t.ctaSubline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 text-sm leading-relaxed text-slate-600 shadow-[0_10px_20px_-22px_rgba(15,23,42,0.9)]">
          {t.notice}
        </section>
      </div>
    </main>
  );
}


