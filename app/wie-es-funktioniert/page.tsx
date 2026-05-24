import { getSiteLanguage } from "@/lib/siteLanguage";
import { seoAlternates } from "@/lib/seoDomains";
import Link from "next/link";
import type { Metadata } from "next";
import InteractiveFlow from "./InteractiveFlow";

export const metadata: Metadata = {
  title: "Wie es funktioniert",
  description:
    "So funktioniert Ravion: Fall digital einreichen, Erfolgschance bewerten lassen, Vergleichsvorschlag prüfen und selbst entscheiden.",
  alternates: seoAlternates("/wie-es-funktioniert"),
};

const copy = {
  de: {
    title: "Wie es funktioniert",
    lead:
      "Unser Prozess kombiniert strukturierte Fallaufnahme, juristisch kuratierte Regelwerke und eine laufend gepflegte Entscheidungsdatenbank.",
    ctaButton: "Fall starten",
    cards: [
      {
        t: "1. Fallaufnahme",
        d: "Du reichst den Fall digital ein. Fakten, Beträge und Dokumente werden strukturiert erfasst.",
      },
      {
        t: "2. Bewertung",
        d: "Das System bewertet Rechtslage, Belegqualität und Entscheidungsmuster und erstellt eine Erfolgswahrscheinlichkeit.",
      },
      {
        t: "3. Vergleich",
        d: "Wir schlagen einen Vergleichsbetrag vor und übermitteln ihn nur mit deiner Zustimmung.",
      },
    ],
    interactiveTitle: "Interaktive Prozessübersicht",
    interactiveLead: "Klicke dich durch die 3 Schritte. Du siehst je Schritt: Was du tust, wie lange es dauert und was du bekommst.",
    interactiveLabels: {
      step: "Schritt",
      tasks: "Was du tust",
      duration: "Dauer",
      outcome: "Ergebnis",
      next: "Nächster Schritt",
    },
    interactiveSteps: [
      {
        title: "Fall erfassen",
        duration: "ca. 5-15 Minuten",
        outcome: "Dein Fall ist strukturiert erfasst und direkt prüfbar.",
        tasks: [
          "Fakten und Beträge eingeben",
          "Unterlagen hochladen (optional)",
          "Kontaktdaten bestätigen",
        ],
      },
      {
        title: "Bewertung erhalten",
        duration: "bis max. 10 Tage",
        outcome: "Du erhältst Erfolgswahrscheinlichkeit und Vergleichsvorschlag.",
        tasks: [
          "Wir prüfen Rechtslage und Belegqualität",
          "Wir berechnen eine belastbare Erfolgsprognose",
          "Wir erstellen einen strukturierten Vorschlag",
        ],
      },
      {
        title: "Vergleich entscheiden",
        duration: "du entscheidest sofort, Gegenseite i. d. R. bis 14 Tage",
        outcome: "Nur mit deiner Freigabe wird versendet. Du bleibst jederzeit handlungsfähig.",
        tasks: [
          "Vorschlag prüfen",
          "Freigeben, anpassen oder abbrechen",
          "Bei Ablehnung: Nachverhandeln oder Übergabe vorbereiten",
        ],
      },
    ],
    calcTitle: "Wie wir Wahrscheinlichkeiten berechnen",
    calcP1:
      "Die Bewertung basiert auf juristisch erstellten Mustern und einer Entscheidungslogik, die mit Fall- und Urteilsdaten verknüpft ist.",
    calcP2:
      "Regelwerke werden laufend fachlich gepflegt. Neue Urteile und Praxisänderungen fließen regelmäßig ein.",
    calcP3:
      "Das Ergebnis ist kein starres Ja/Nein, sondern ein probabilistischer Korridor mit transparenten Annahmen.",
    costsTitle: "Kostenmodell",
    costsLead:
      "Unsere Vergütung ist klar und relationstypabhängig. Es fallen nur im Erfolgsfall Vergleichskosten an.",
    costsNote:
      "Rechtlicher Hinweis: Die genaue Gebührenanwendung richtet sich nach Relationstyp und Einzelfall. Für Verbraucher im B2C ist der Prozess kostenfrei.",
    costsHead: ["Beziehung", "Kosten"],
    costsRows: [
      ["Verbraucher <-> Unternehmen (B2C)", "Für Verbraucher kostenlos"],
      ["Unternehmen <-> Unternehmen (B2B)", "Je 5% der Vergleichssumme pro Partei"],
      ["Verbraucher <-> Verbraucher (C2C)", "Je 5% der Vergleichssumme pro Partei"],
    ],
    timelineTitle: "Zeitachse",
    timelineLead: "So läuft ein Fall bei uns konkret ab.",
    timelineRows: [
      {
        step: "Tag 0",
        title: "Fall einreichen",
        body: "Du reichst den Fall digital ein und lädst optional Unterlagen hoch.",
      },
      {
        step: "Bis Tag 10",
        title: "Prüfung & Einschätzung",
        body: "Du erhältst unsere Einschätzung zur Gewinnwahrscheinlichkeit und einen Vergleichsvorschlag.",
      },
      {
        step: "Direkt danach",
        title: "Deine Entscheidung",
        body: "Du entscheidest, ob der Vorschlag an das Unternehmen gesendet wird oder nicht.",
      },
      {
        step: "Tag 10 bis 24",
        title: "Frist für Unternehmen",
        body: "Nach Versand hat das Unternehmen bis zu 14 Tage Zeit, den Vorschlag anzunehmen oder abzulehnen.",
      },
      {
        step: "Ab Tag 24",
        title: "Nächster Schritt",
        body: "Bei Ablehnung kannst du nachverhandeln oder zu Inkassodienstleister (z. B. bei Fluggastrechten) oder anwaltlicher Vertretung wechseln.",
      },
    ],
    avgSettlement:
      "Durchschnittliche Dauer vom Einreichen deines Falls bis zum Abschluss (bei Annahme des Vorschlags): 16 Tage.",
    rejectTitle: "Was passiert bei Ablehnung?",
    rejectP1:
      "Lehnt die Gegenseite ab, kannst du nachverhandeln oder jederzeit zu Inkassodienstleister (z. B. bei Fluggastrechten) oder anwaltlicher Vertretung wechseln.",
    rejectP2:
      "Du verlierst durch die Schlichtung keine Rechte. Sie strukturiert den Fall und beschleunigt Entscheidungen.",
    th1: "Option danach",
    th2: "Typische Wirkung",
    th3: "Wann sinnvoll",
    rows: [
      ["Nachverhandlung", "Schnelle Anpassung des Angebots", "Wenn Gegenseite gesprächsbereit ist"],
      ["Inkassodienstleister", "Durchsetzung gegen Erfolgsprovision", "Wenn du operativ auslagern willst"],
      ["Anwalt", "Individuelle Rechtsstrategie", "Bei komplexer Sach- oder Rechtslage"],
    ],
    supportTitle: "Wie wir deinen Fall durchsetzbar machen",
    supportText1:
      "Wir übersetzen deinen Sachverhalt in eine belastbare Anspruchsstruktur. Dafür arbeiten wir mit nachvollziehbaren Fakten, typischen Vergleichsentscheidungen und juristischer Praxiserfahrung. So entsteht eine klare Begründung, warum ein bestimmter Vorschlag rechtlich tragfähig ist und warum eine Einigung für beide Seiten oft die wirtschaftlich sinnvollere Option darstellt.",
    supportTextMid:
      "Unternehmen nehmen Vorschläge in vielen Fällen an, wenn der Fall sauber aufbereitet ist: Sie können Verfahrensdauer verkürzen, Anwalts- und Gerichtskosten reduzieren und Planbarkeit gewinnen. Genau darauf zielt unsere Aufbereitung ab - faktenbasiert, klar begründet und verhandlungsfähig.",
    supportText2:
      "Du bekommst zuerst unsere Bewertung und entscheidest dann selbst, ob der Vorschlag versendet wird. Wenn die Gegenseite nicht zustimmt, endet der Prozess nicht: Wir geben dir auf Wunsch ein strukturiertes Begründungsset mit, das du direkt weiterverwenden kannst, und bereiten bei Bedarf die geordnete Übergabe an anwaltliche Vertretung vor. Diese Übergabe ist für dich als Kunde ebenfalls kostenlos.",
  },
  en: {
    title: "How it works",
    lead:
      "Our process combines structured case intake, legally curated rule sets, and a continuously maintained decision database.",
    ctaButton: "Start case",
    cards: [
      {
        t: "1. Case intake",
        d: "You submit your case digitally. Facts, amounts, and documents are captured in a structured way.",
      },
      {
        t: "2. Assessment",
        d: "The system evaluates legal basis, evidence quality, and decision patterns to estimate success probability.",
      },
      {
        t: "3. Settlement",
        d: "We propose a settlement amount and send it only with your explicit approval.",
      },
    ],
    interactiveTitle: "Interactive process view",
    interactiveLead: "Click through the 3 steps. For each step you see what you do, how long it takes, and the expected outcome.",
    interactiveLabels: {
      step: "Step",
      tasks: "What you do",
      duration: "Duration",
      outcome: "Outcome",
      next: "Next step",
    },
    interactiveSteps: [
      {
        title: "Capture case",
        duration: "about 5-15 minutes",
        outcome: "Your case is structured and ready for assessment.",
        tasks: [
          "Enter facts and amounts",
          "Upload documents (optional)",
          "Confirm contact details",
        ],
      },
      {
        title: "Get assessment",
        duration: "within max. 10 days",
        outcome: "You receive success probability and a settlement proposal.",
        tasks: [
          "We review legal basis and evidence quality",
          "We calculate a robust success estimate",
          "We prepare a structured proposal",
        ],
      },
      {
        title: "Decide on settlement",
        duration: "you decide immediately, counterparty usually up to 14 days",
        outcome: "Sent only with your approval. You remain in control at all times.",
        tasks: [
          "Review the proposal",
          "Approve, adjust, or stop",
          "If rejected: renegotiate or prepare handover",
        ],
      },
    ],
    calcTitle: "How we calculate probabilities",
    calcP1:
      "Assessment is based on legally designed patterns and a decision logic linked to case and judgment data.",
    calcP2:
      "Rule sets are continuously maintained by legal experts. New judgments and practice changes are regularly integrated.",
    calcP3:
      "The output is not a rigid yes/no, but a probabilistic corridor with transparent assumptions.",
    costsTitle: "Cost model",
    costsLead:
      "Our compensation model is transparent and depends on relation type. Settlement fees apply only on successful resolution.",
    costsNote:
      "Legal note: Exact fee application depends on relation type and case details. For consumers in B2C, the process is free.",
    costsHead: ["Relation", "Cost"],
    costsRows: [
      ["Consumer <-> Business (B2C)", "Free for consumers"],
      ["Business <-> Business (B2B)", "5% of settlement amount per party"],
      ["Consumer <-> Consumer (C2C)", "5% of settlement amount per party"],
    ],
    timelineTitle: "Timeline",
    timelineLead: "This is what a case flow looks like in practice.",
    timelineRows: [
      {
        step: "Day 0",
        title: "Submit case",
        body: "You submit the case digitally and optionally upload supporting documents.",
      },
      {
        step: "By day 10",
        title: "Review & assessment",
        body: "You receive our success probability assessment and a settlement proposal.",
      },
      {
        step: "Immediately after",
        title: "Your decision",
        body: "You decide whether the proposal should be sent to the company or not.",
      },
      {
        step: "Day 10 to 24",
        title: "Company response window",
        body: "After sending, the company has up to 14 days to accept or reject.",
      },
      {
        step: "From day 24",
        title: "Next step",
        body: "If rejected, you can renegotiate or escalate to a debt-collection provider (e.g., in flight-rights cases) or legal counsel.",
      },
    ],
    avgSettlement:
      "Average duration from case submission to completion (if the proposal is accepted): 16 days.",
    rejectTitle: "What if the other side rejects?",
    rejectP1:
      "If rejected, you can renegotiate or escalate at any time to a debt-collection provider (e.g., in flight-rights cases) or legal counsel.",
    rejectP2:
      "You do not lose rights by using settlement first. It structures your case and speeds up decision making.",
    th1: "Next option",
    th2: "Typical effect",
    th3: "When useful",
    rows: [
      ["Renegotiation", "Fast adjustment of proposal", "If counterparty is open to discussion"],
      ["Debt-collection provider", "Operational enforcement for success fee", "If you want full outsourcing"],
      ["Lawyer", "Individual legal strategy", "For complex legal/factual situations"],
    ],
    supportTitle: "How we make your case enforceable",
    supportText1:
      "We turn your facts into a structured claim position. We combine verifiable facts, comparable decision outcomes, and legal practical experience to support a clear argument for why a specific proposal is legally sound and often economically preferable for both sides.",
    supportTextMid:
      "Counterparties tend to accept in many cases when the file is professionally prepared: it can reduce procedure time, legal/court cost exposure, and operational uncertainty. That is exactly what our preparation is built for - fact-based, clearly reasoned, and negotiation-ready.",
    supportText2:
      "You receive our assessment first and decide whether the proposal should be sent. If the counterparty rejects, the process does not stop: we can provide a reusable argument package and prepare a clean handover to legal counsel when needed. This handover is also free of charge for you as the customer.",
  },
} as const;

export default async function HowItWorksPage() {
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
          <h1 className="text-3xl font-semibold tracking-tight">{t.title}</h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.lead}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {t.cards.map((c) => (
              <article key={c.t} className="soft-card p-4">
                <h2 className="text-sm font-semibold">{c.t}</h2>
                <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                  {c.d}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.interactiveTitle}</h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.interactiveLead}
          </p>
          <div className="mt-6">
            <InteractiveFlow steps={t.interactiveSteps} labels={t.interactiveLabels} />
          </div>
        </section>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.calcTitle}</h2>
          <div className="mt-4 space-y-4 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            <p>{t.calcP1}</p>
            <p>{t.calcP2}</p>
            <p>{t.calcP3}</p>
          </div>
        </section>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.costsTitle}</h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.costsLead}
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left" style={{ color: "var(--muted)" }}>
                  <th className="border-b px-3 py-2" style={{ borderColor: "var(--border)" }}>
                    {t.costsHead[0]}
                  </th>
                  <th className="border-b px-3 py-2" style={{ borderColor: "var(--border)" }}>
                    {t.costsHead[1]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.costsRows.map((r) => (
                  <tr key={r[0]}>
                    <td className="border-b px-3 py-2" style={{ borderColor: "var(--border)" }}>
                      {r[0]}
                    </td>
                    <td className="border-b px-3 py-2 font-medium" style={{ borderColor: "var(--border)" }}>
                      {r[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
            {t.costsNote}
          </p>
        </section>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.timelineTitle}</h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.timelineLead}
          </p>
          <div className="mt-6 space-y-4">
            {t.timelineRows.map((item) => (
              <div key={item.title} className="soft-card p-4">
                <div className="flex items-center gap-3">
                  <span className="pill">{item.step}</span>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm font-medium">{t.avgSettlement}</p>
        </section>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.rejectTitle}</h2>
          <div className="mt-4 space-y-4 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            <p>{t.rejectP1}</p>
            <p>{t.rejectP2}</p>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left" style={{ color: "var(--muted)" }}>
                  <th className="border-b px-3 py-2" style={{ borderColor: "var(--border)" }}>{t.th1}</th>
                  <th className="border-b px-3 py-2" style={{ borderColor: "var(--border)" }}>{t.th2}</th>
                  <th className="border-b px-3 py-2" style={{ borderColor: "var(--border)" }}>{t.th3}</th>
                </tr>
              </thead>
              <tbody>
                {t.rows.map((r) => (
                  <tr key={r[0]}>
                    <td className="border-b px-3 py-2" style={{ borderColor: "var(--border)" }}>{r[0]}</td>
                    <td className="border-b px-3 py-2" style={{ borderColor: "var(--border)" }}>{r[1]}</td>
                    <td className="border-b px-3 py-2" style={{ borderColor: "var(--border)" }}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.supportTitle}</h2>
          <div className="mt-4 space-y-4 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            <p>{t.supportText1}</p>
            <p>{t.supportTextMid}</p>
            <p>{t.supportText2}</p>
          </div>
          <Link
            href="/cases/new"
            className="mt-6 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: "var(--brand-strong)" }}
          >
            {t.ctaButton}
          </Link>
        </section>
      </div>
    </main>
  );
}
