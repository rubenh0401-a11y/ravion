import Link from "next/link";
import type { Metadata } from "next";
import { getSiteLanguage } from "@/lib/siteLanguage";
import { seoAlternates } from "@/lib/seoDomains";

export const metadata: Metadata = {
  title: "Warum Ravion",
  description:
    "Warum Ravion: digitale außergerichtliche Streitbeilegung im Vergleich zu Inkassodienstleistern, Anwalt und öffentlicher Schlichtung.",
  alternates: seoAlternates("/warum-schlichtung"),
};

type Lang = "de" | "en";

type ChartRow = {
  label: string;
  compensation: number;
  hotel: number;
  model: string;
};

const copy = {
  de: {
    heroTitle: "Konfliktlösung – einfach, fair und ohne Kostenrisiko",
    heroText1:
      "Im Alltag entstehen Konflikte schneller, als man denkt: ein verspäteter Flug, eine unbezahlte Rechnung oder Ärger über eine nicht oder schlecht erfüllte Leistung.",
    heroText2:
      "Oft steht in diesen Situationen am Ende eine berechtigte Forderung im Raum. Trotzdem verzichten viele darauf, sie durchzusetzen. Warum? Weil der Weg kompliziert wirkt, Kosten unklar sind und Verfahren als langwierig erlebt werden. Zudem sind viele Situationen zu komplex, um eindeutig sagen zu können, dass eine Forderung zu 100 % gerichtsfest ist.",
    heroText3:
      "Je nach Ausgangs- und Beweislage liegt die Erfolgswahrscheinlichkeit vielleicht nur bei 80 %, 50 % oder 30 %. Viele Menschen empfinden das Risiko, zu verlieren und neben dem zeitlichen Aufwand auch die Prozesskosten zu tragen, als zu hoch. In Verbraucherbefragungen wird Kostenrisiko regelmäßig als zentraler Grund genannt, Ansprüche nicht weiterzuverfolgen. Hier kommt Ravion ins Spiel: transparente, schnelle und wirkungsvolle Durchsetzung deines Anspruchs ohne Kostenrisiko für dich. Du bindest dich dabei zu keinem Zeitpunkt an Ravion. Wenn du dich umentscheidest und lieber mit einem Anwalt vor Gericht gehen möchtest, kannst du jederzeit aus dem Schlichtungsprozess aussteigen.",
    heroStats: [
      { t: "Kostenrisiko schreckt ab", d: "Viele verzichten trotz berechtigter Forderung." },
      { t: "Lange Dauer bremst", d: "Klassische Wege ziehen sich oft über Monate." },
      { t: "Komplexität überfordert", d: "Fristen und Verfahrensschritte sind schwer planbar." },
    ],
    exampleBridgeKicker: "Fokus",
    exampleBridgeTitle: "Beispiel: Fluggastrechte",
    exampleBridgeText:
      "Die folgenden Vergleiche, Zeitangaben und Beispielrechnungen beziehen sich auf Fluggastrechte und zeigen daran, wie sich die Wege in der Praxis unterscheiden.",

    problemTitle: "Was heute typischerweise passiert",
    problemLead:
      "In der Praxis greifen Betroffene meist zu Inkassodienstleistern, Anwälten oder öffentlichen Schlichtungsstellen (z. B. söp). Jede Option hat Stärken – aber auch klare Nachteile.",
    problemNarratives: [
      {
        t: "Inkassodienstleister",
        d: "Inkassodienstleister wie Flightright, AirHelp, EUflight oder Ersatz-Pilot arbeiten über Erfolgsprovisionen. Je nach Anbieter erfolgt die Auszahlung oft erst nach erfolgreichem Ausgang eines Gerichtsverfahrens. Das kann in vielen Fällen bis zu einem Jahr dauern, bei komplexen Sachverhalten mit ausländischen Airlines teils auch länger. Durch die Abtretung der Rechte sind spätere Anpassungen der Forderung meist nicht mehr möglich. Zudem werden häufig nur die Entschädigungspauschalen nach EU 261/04 verfolgt, während Ansprüche auf Verpflegung, Hotel oder Ticketrückerstattung oft unberücksichtigt bleiben.",
      },
      {
        t: "Anwaltlicher Weg",
        d: "Der anwaltliche Weg kann juristisch stark sein, ist für viele Anspruchsteller aber organisatorisch und finanziell anspruchsvoll. In der Regel wird eine Vergütungsvereinbarung geschlossen, es bestehen mögliche Prozesskostenrisiken, und das Verfahren läuft häufig über mehrere Stufen mit Fristen, Stellungnahmen und Verhandlungsterminen. Selbst bei berechtigter Forderung bleibt lange unklar, wie hoch die tatsächliche Netto-Auszahlung am Ende ausfällt.",
      },
      {
        t: "Öffentliche Schlichtung (söp)",
        d: "Die öffentliche Schlichtung ist kostenfrei und niedrigschwellig. Gleichzeitig sind Bearbeitungszeiten von etwa 3 bis 18 Monaten in der Praxis nicht ungewöhnlich. Für viele Betroffene ist der Prozess wenig transparent und stark von externen Rückmeldungen abhängig. Wer schnell Planungssicherheit braucht, erhält diese dort oft erst sehr spät.",
      },
    ],

    courtTitle: "Warum Gerichtsverfahren viele abschrecken",
    courtLead:
      "Der gerichtliche Weg ist legitim, aber für viele Betroffene schwer kalkulierbar. Typischer Ablauf:",
    courtSteps: [
      "Klageeinreichung und formale Prüfung",
      "Gerichtskostenvorschuss und Kostenklärung",
      "Schriftliches Vorverfahren mit Fristen zur Stellungnahme",
      "Erste Verhandlung und ggf. weitere Termine",
      "Beweisaufnahme (Dokumente, Zeugen, Gutachten)",
      "Urteil, Kostenfestsetzung und mögliche Folgeverfahren",
    ],

    transitionText:
      "Damit der Unterschied konkret greifbar wird, zeigen wir den Vergleich im nächsten Schritt in strukturierter Form.",

    compareTitle: "Vergleich der Optionen",
    compareHeaders: ["Kriterium", "Ravion", "Inkassodienstleister", "Anwalt", "Öffentliche Schlichtungsstelle"],
    compareRows: [
      ["Kosten", "kostenfrei", "hohe Provision (oft 30–50 %)", "Anwaltskosten + mögliches Prozessrisiko", "kostenfrei"],
      ["Anteil der Entschädigung", "100 %", "oft nur rund die Hälfte bleibt übrig", "abhängig vom Verfahren", "100 %"],
      ["Kostenrisiko", "kein Kostenrisiko", "kein Kostenrisiko", "mögliches Prozesskostenrisiko", "kein Kostenrisiko"],
      ["Geschwindigkeit", "durchschnittlich ca. 16 Tage", "oft mehrere Monate bis >1 Jahr", "oft sehr lange Verfahren", "typisch ca. 3–18 Monate (z. B. söp)"],
      ["Transparenz", "hoch, klarer Status je Schritt", "teils begrenzt", "abhängig vom Anwalt", "begrenzt"],
      ["Verfahrenssteuerung", "aktiv begleitet und strukturiert", "standardisiert", "individuell, aber aufwendig", "eher reaktiv, oft langsam"],
      ["Bindung", "jederzeit aussteigen", "Anspruch wird abgetreten", "Vergütungsvereinbarung, Ausstieg oft kostenrelevant", "Ausstieg möglich"],
    ],

    trustTitle: "Warum Ravion oft die bessere Wahl ist",
    trustBullets: [
      "transparentes Verfahren",
      "schneller Prozess",
      "keine Kosten",
      "keine Bindung",
    ],

    fairnessTitle: "Warum Ravion fair ist",
    fairnessText:
      "Ravion wird nur bezahlt, wenn eine Einigung zustande kommt. Der Anreiz ist deshalb klar: eine Lösung entwickeln, die für Anspruchsteller wirtschaftlich stark ist und gleichzeitig so belastbar, dass die Gegenseite sie auch annimmt.",

    exampleTitle: "Wie viel bleibt bei 600 € zzgl. 150 € Hotelkosten übrig?",
    exampleLead:
      "Modellhafte Darstellung bei insgesamt 750 € Anspruch (600 € Entschädigung + 150 € Hotel). Die 150 € Zusatzkosten sind bei Inkassodienstleistern häufig nicht Teil der Durchsetzung.",
    chartTitle: "Auszahlung bei 750 € Anspruch",
    chartLegendComp: "Entschädigung (600 €)",
    chartLegendHotel: "Hotelkosten (150 €)",
    chartRows: [
      { label: "Ravion", compensation: 600, hotel: 150, model: "kostenfrei" },
      { label: "Ersatz-Pilot", compensation: 438, hotel: 0, model: "ca. 27 % Provision auf 600 €" },
      { label: "Flightright", compensation: 386, hotel: 0, model: "ca. 30 % + MwSt. auf 600 € (modellhaft)" },
      { label: "EUflight", compensation: 400, hotel: 0, model: "ca. 33,32 % auf 600 €" },
      { label: "AirHelp", compensation: 390, hotel: 0, model: "ca. 35 % auf 600 €" },
    ] as ChartRow[],

    whyTitle: "Warum das in der Praxis funktioniert",
    whyCards: [
      {
        t: "1. Du behältst die Steuerung",
        d: "Du entscheidest bei jedem Schritt: Angebot senden, anpassen oder beenden.",
      },
      {
        t: "2. Kein Sackgassen-Risiko",
        d: "Wenn keine Einigung passt, kannst du direkt zu Anwalt oder Inkassodienstleister wechseln.",
      },
      {
        t: "3. Klarer Prozess statt Blackbox",
        d: "Du siehst jederzeit den Status und die nächsten sinnvollen Schritte.",
      },
      {
        t: "4. Wirtschaftlich sinnvoll",
        d: "Ziel ist nicht nur Recht zu bekommen, sondern netto mehr zu behalten.",
      },
    ],

    ctaTitle: "Starte jetzt deinen Fall",
    ctaText:
      "Starte deinen Fall digital mit klarer Struktur. Du erhältst eine nachvollziehbare Einschätzung, bleibst jederzeit handlungsfähig und entscheidest selbst, ob ein Vergleich versendet wird.",
    ctaButton: "Fall starten",
    note:
      "Hinweis: Werte sind modellhaft und als Vergleichsdarstellung gedacht. Für Verbraucher im B2C ist Ravion kostenfrei. Die Darstellung ersetzt keine individuelle Rechtsberatung.",
  },
  en: {
    heroTitle: "Conflict resolution – simple, fair, and without cost risk",
    heroText1: "Conflicts arise quickly in daily life: delayed flights, unpaid invoices, or contract disputes.",
    heroText2: "Many valid claims are never pursued because the path feels complex, costly, and slow.",
    heroText3: "Ravion was built for exactly this: transparent enforcement without claimant cost risk.",
    heroStats: [
      { t: "Cost risk blocks action", d: "Many people drop valid claims early." },
      { t: "Long duration", d: "Traditional routes often take many months." },
      { t: "High complexity", d: "Deadlines and procedure steps feel hard to manage." },
    ],
    exampleBridgeKicker: "Focus",
    exampleBridgeTitle: "Example: Flight rights",
    exampleBridgeText:
      "The following comparisons, timelines, and payout examples are based on a flight-rights case to make differences tangible.",
    problemTitle: "What typically happens today",
    problemLead: "Most claimants choose debt-collection providers, lawyers, or public conciliation.",
    problemNarratives: [
      { t: "Debt-collection providers", d: "Often high success-fee deductions and long timelines." },
      { t: "Lawyer route", d: "Can be effective, but often includes fee complexity and litigation risk." },
      { t: "Public conciliation", d: "Free, but often long handling time and limited process transparency." },
    ],
    courtTitle: "Why court paths deter many users",
    courtLead: "Typical path:",
    courtSteps: [
      "Filing and formal review",
      "Court-cost clarification",
      "Written submissions and deadlines",
      "Hearings and follow-up dates",
      "Evidence phase",
      "Judgment and cost settlement",
    ],
    transitionText: "To make differences tangible, we show the comparison with a flight-rights case.",
    compareTitle: "Option comparison",
    compareHeaders: ["Criterion", "Ravion", "Debt-collection provider", "Lawyer", "Public conciliation"],
    compareRows: [
      ["Cost", "free", "high fee (often 30–50%)", "lawyer fee + possible litigation risk", "free"],
      ["Share retained", "high claimant share", "often around half remains", "procedure dependent", "full amount possible, no guarantee"],
      ["Cost risk", "no risk", "no risk", "possible litigation risk", "no risk"],
      ["Speed", "avg. around 16 days", "often many months", "often very long", "typically around 3–18 months"],
      ["Transparency", "high", "often limited", "lawyer dependent", "limited"],
      ["Process steering", "active and structured", "standardized", "individual but heavy", "often reactive and slow"],
      ["Commitment", "can exit anytime", "claim often assigned", "fee agreement may lock costs", "can exit"],
    ],
    trustTitle: "Why Ravion is often the better choice",
    trustBullets: ["transparent process", "fast process", "no cost", "no lock-in"],
    fairnessTitle: "Why Ravion is fair",
    fairnessText: "Ravion is paid only when settlement is reached, incentivizing realistic and fair outcomes.",
    exampleTitle: "How much remains from 600 EUR plus 150 EUR hotel costs?",
    exampleLead: "Illustrative payout comparison.",
    chartTitle: "Payout at 750 EUR claim",
    chartLegendComp: "Compensation (600 EUR)",
    chartLegendHotel: "Hotel costs (150 EUR)",
    chartRows: [
      { label: "Ravion", compensation: 600, hotel: 150, model: "free" },
      { label: "Ersatz-Pilot", compensation: 438, hotel: 0, model: "about 27% fee on 600 EUR" },
      { label: "Flightright", compensation: 386, hotel: 0, model: "about 30% + VAT on 600 EUR" },
      { label: "EUflight", compensation: 400, hotel: 0, model: "about 33.32% on 600 EUR" },
      { label: "AirHelp", compensation: 390, hotel: 0, model: "about 35% on 600 EUR" },
    ] as ChartRow[],
    whyTitle: "Why this works in practice",
    whyCards: [
      { t: "1. You keep control", d: "You decide each step." },
      { t: "2. No dead end", d: "You can still switch to lawyer or debt-collection provider." },
      { t: "3. Clear process", d: "Status and next steps remain transparent." },
      { t: "4. Economic focus", d: "Goal is higher net payout." },
    ],
    ctaTitle: "Start your claim now",
    ctaText: "Start your case with a structured digital flow. You stay in control and decide whether a proposal should be sent.",
    ctaButton: "Start case",
    note: "Illustrative figures only. Ravion is free for consumers in B2C. This does not constitute legal advice.",
  },
} as const;

export default async function WhySchlichtungPage() {
  const lang: Lang = await getSiteLanguage();
  const t = copy[lang];

  return (
    <main className="px-4 pb-12 pt-7 sm:px-6 sm:pb-14 sm:pt-9 lg:pb-16 lg:pt-10">
      <div className="app-wrap">
        <section
          className="relative overflow-hidden rounded-[28px] border p-6 sm:p-10 lg:p-12"
          style={{
            borderColor: "var(--border)",
            background:
              "linear-gradient(130deg, color-mix(in oklab, var(--surface-strong) 90%, #dceaf3) 0%, color-mix(in oklab, var(--surface-strong) 95%, #f0f5f8) 40%, color-mix(in oklab, var(--surface) 96%, #e6eef4) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute -right-24 -top-16 h-64 w-64 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(37,66,94,0.18) 0%, transparent 70%)" }}
          />
          <h1 className="relative text-3xl font-semibold tracking-tight sm:text-5xl">{t.heroTitle}</h1>
          <div className="relative mt-4 space-y-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            <p>{t.heroText1}</p>
            <p>{t.heroText2}</p>
            <p>{t.heroText3}</p>
          </div>
          <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
            {t.heroStats.map((stat) => (
              <article
                key={stat.t}
                className="rounded-xl border px-4 py-3"
                style={{ borderColor: "var(--border)", background: "color-mix(in oklab, var(--surface-strong) 92%, #eef4f8)" }}
              >
                <h3 className="text-sm font-semibold">{stat.t}</h3>
                <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                  {stat.d}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mt-8 rounded-[28px] border p-6 sm:p-10"
          style={{
            borderColor: "var(--border)",
            background:
              "linear-gradient(145deg, color-mix(in oklab, var(--surface-strong) 94%, #e8f0f6) 0%, color-mix(in oklab, var(--surface) 96%, #f4f8fb) 100%)",
          }}
        >
          <div className="border-b pb-5" style={{ borderColor: "var(--border)" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
              {t.exampleBridgeKicker}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{t.exampleBridgeTitle}</h2>
          </div>

        <section className="mt-8 rounded-[28px] border p-6 sm:p-10" style={{ borderColor: "var(--border)", background: "color-mix(in oklab, var(--surface) 92%, #edf3f8)" }}>
          <h2 className="text-2xl font-semibold tracking-tight">{t.problemTitle}</h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.problemLead}
          </p>
          <div className="mt-5 grid gap-3">
            {t.problemNarratives.map((block) => (
              <article key={block.t} className="rounded-xl border px-4 py-4" style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}>
                <h3 className="text-base font-semibold">{block.t}</h3>
                <p className="mt-1 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                  {block.d}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.exampleTitle}</h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.exampleLead}
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs" style={{ color: "var(--muted)" }}>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full" style={{ background: "#1d6fb5" }} />
              {t.chartLegendComp}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full" style={{ background: "#e19a2b" }} />
              {t.chartLegendHotel}
            </span>
          </div>

          <h3 className="mt-4 text-lg font-semibold">{t.chartTitle}</h3>
          <div className="mt-3 space-y-4 rounded-xl border p-4" style={{ borderColor: "var(--border)" }}>
            {t.chartRows.map((r) => (
              <BarRow
                key={r.label}
                label={r.label}
                valueLabel={`${r.compensation + r.hotel} €`}
                subLabel={r.model}
                compWidth={(r.compensation / 750) * 100}
                hotelWidth={(r.hotel / 750) * 100}
              />
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border p-6 sm:p-10" style={{ borderColor: "var(--border)", background: "color-mix(in oklab, var(--surface) 92%, #f1f5f8)" }}>
          <h2 className="text-2xl font-semibold tracking-tight">{t.courtTitle}</h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.courtLead}
          </p>
          <div className="mt-5 grid gap-3">
            {t.courtSteps.map((step, idx) => (
              <div
                key={step}
                className="relative rounded-xl border px-4 py-3"
                style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}
              >
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold" style={{ borderColor: "var(--border)" }}>
                  {idx + 1}
                </span>
                <span className="text-sm sm:text-base">{step}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm sm:text-base font-medium">{t.transitionText}</p>
        </section>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.compareTitle}</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
            <table className="min-w-[980px] w-full text-sm">
              <thead style={{ background: "color-mix(in oklab, var(--surface) 88%, #e9edf2)" }}>
                <tr>
                  {t.compareHeaders.map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.compareRows.map((row) => (
                  <tr key={row[0]} style={{ borderTop: "1px solid var(--border)" }}>
                    {row.map((cell, idx) => (
                      <td
                        key={`${row[0]}-${idx}`}
                        className={`px-4 py-3 ${idx === 1 ? "font-semibold" : ""}`}
                        style={
                          idx === 1
                            ? { background: "color-mix(in oklab, var(--surface-strong) 92%, #dfeef5)" }
                            : undefined
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-xl border p-4" style={{ borderColor: "var(--border)" }}>
            <h3 className="text-sm font-semibold">{t.trustTitle}</h3>
            <div className="mt-2 grid gap-2 sm:grid-cols-4">
              {t.trustBullets.map((b) => (
                <div key={b} className="rounded-lg border px-3 py-2 text-sm" style={{ borderColor: "var(--border)" }}>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.fairnessTitle}</h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.fairnessText}
          </p>
        </section>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.whyTitle}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {t.whyCards.map((card) => (
              <article
                key={card.t}
                className="rounded-2xl border p-4"
                style={{
                  borderColor: "var(--border)",
                  background:
                    "linear-gradient(180deg, color-mix(in oklab, var(--surface-strong) 90%, #d8efe9) 0%, color-mix(in oklab, var(--surface-strong) 98%, transparent) 100%)",
                }}
              >
                <h3 className="text-base font-semibold">{card.t}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                  {card.d}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.ctaTitle}</h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.ctaText}
          </p>
          <Link
            href="/cases/new"
            className="mt-5 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: "var(--brand-strong)" }}
          >
            {t.ctaButton}
          </Link>
          <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>
            {t.note}
          </p>
        </section>
        </section>
      </div>
    </main>
  );
}

function BarRow({
  label,
  valueLabel,
  subLabel,
  compWidth,
  hotelWidth,
}: {
  label: string;
  valueLabel: string;
  subLabel: string;
  compWidth: number;
  hotelWidth: number;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="font-semibold">{valueLabel}</span>
      </div>
      <div className="mb-1 text-xs" style={{ color: "var(--muted)" }}>
        {subLabel}
      </div>
      <div className="h-3 rounded-full overflow-hidden" style={{ background: "color-mix(in oklab, var(--surface) 85%, #dce3ea)" }}>
        <div className="h-3" style={{ width: `${compWidth}%`, background: "#1d6fb5", float: "left" }} />
        <div className="h-3" style={{ width: `${hotelWidth}%`, background: "#e19a2b", float: "left" }} />
      </div>
    </div>
  );
}




