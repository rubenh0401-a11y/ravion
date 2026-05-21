import type { Metadata } from "next";
import Image from "next/image";
import { getSiteLanguage, type SiteLanguage } from "@/lib/siteLanguage";

export const metadata: Metadata = {
  title: "Solutions for Airlines",
  description:
    "Ravion helps airlines resolve passenger compensation disputes before legal escalation.",
  robots: {
    index: false,
    follow: false,
  },
};

const copy = {
  en: {
    pill: "Airline solutions",
    heroTitle: "Reduce Passenger Compensation Costs",
    heroSubline: "While improving customer relationships.",
    heroLead:
      "Ravion helps airlines resolve passenger compensation disputes before they escalate into claim management companies, legal intermediaries, or courts.",
    heroBullets: [
      "Independent pre-litigation resolution layer",
      "Airlines remain fully in control",
      "No service fee unless a settlement is concluded",
    ],
    heroNote:
      "Built for airlines that want to reduce compensation-related expenses while offering passengers a faster, more transparent resolution path.",
    videoTitle: "Platform overview",
    videoTime: "2-minute demo",
    videoFallback: "Your browser does not support the video tag.",
    problemEyebrow: "The problem",
    problemTitle: "Passenger compensation has become a major cost driver.",
    problemParagraphs: [
      "Passenger compensation has become one of the most underestimated cost drivers within European aviation. Across Europe, airlines pay hundreds of millions of euros every year due to flight disruptions, cancellations, and delay-related claims.",
      "However, the compensation itself is often only part of the actual financial burden.",
      "In many cases, rejected or unanswered claims escalate through claim management companies, legal intermediaries, and ultimately courts. Once this happens, airlines are no longer only paying the original compensation amount - they are also exposed to additional legal expenses, court fees, administrative workload, and increased operational complexity.",
      "At the same time, passengers who feel ignored or unfairly treated are more likely to lose trust in the airline, publicly criticize the brand, or avoid future bookings altogether.",
    ],
    whatEyebrow: "What Ravion is",
    whatTitle: "An independent pre-litigation resolution platform.",
    whatParagraphs: [
      "Ravion acts as an independent, technology-driven pre-litigation resolution platform for passenger compensation disputes.",
      "In practical terms, Ravion functions similarly to an out-of-court settlement and mediation layer between passengers and airlines.",
      "Instead of disputes immediately escalating toward legal enforcement, courts, or claim management companies, Ravion creates an additional resolution stage where cases can potentially be settled earlier, faster, and at significantly lower cost.",
      "Importantly, airlines remain fully in control throughout the process. Ravion does not issue binding decisions and does not obligate airlines to accept settlement proposals.",
      "Every proposed settlement can be reviewed, accepted, rejected, or negotiated further by the airline. This gives airlines additional flexibility and creates another strategic option before disputes escalate into expensive legal proceedings.",
    ],
    approachEyebrow: "A smarter approach",
    approachTitle: "A structured off-ramp before the claim escalates further.",
    processSteps: [
      "Passengers first submit their claim through Ravion.",
      "Ravion evaluates the case using historical outcomes, legal patterns, and claim-specific factors.",
      "Based on this assessment, Ravion proposes a fair settlement amount to the passenger.",
      "If the passenger accepts, the settlement proposal is forwarded to the airline for review.",
      "The airline can accept, reject, negotiate further, or continue with its standard claims handling process.",
    ],
    exampleEyebrow: "Example",
    exampleTitle: "From court probability to a settlement proposal.",
    exampleLead: "Based on its assessment, Ravion proposes a fair settlement amount to the passenger.",
    metrics: [
      { label: "Claimed compensation amount", value: "EUR 600" },
      { label: "Estimated court success probability", value: "80%" },
      { label: "Proposed settlement", value: "EUR 480" },
    ],
    exampleText:
      "If the passenger accepts the proposal, the settlement is forwarded to the airline for review. The airline can then decide whether to accept the proposal, reject it, or continue with its standard claims handling process.",
    financialEyebrow: "Financial impact",
    financialTitle: "Why this matters financially",
    financialParagraphs: [
      "Under the current system, legal escalation often creates costs that significantly exceed the compensation itself.",
      "In Germany, for example, a typical compensation dispute involving a EUR 600 claim may additionally generate court fees, claimant legal representation costs, legal representation costs for the airline, administrative handling expenses, and operational processing overhead.",
      "As a result, the total financial exposure can exceed EUR 1,300 for a single case.",
    ],
    costCards: [
      {
        title: "Traditional escalation",
        amount: "EUR 1,300+",
        text:
          "Possible total exposure for a EUR 600 compensation dispute once court fees, legal representation, administrative workload, and operational overhead are included.",
      },
      {
        title: "With Ravion",
        amount: "~EUR 530",
        text:
          "EUR 480 settlement payment plus a 10% Ravion service fee of EUR 48. This can reduce total case-related expenses by more than 50%.",
        highlighted: true,
      },
    ],
    benefitsEyebrow: "Benefits for airlines",
    benefitsTitle: "A more efficient alternative before external escalation mechanisms are triggered.",
    benefitSections: [
      {
        title: "Lower Overall Claims Costs",
        paragraphs: [
          "By resolving cases before legal escalation, airlines can significantly reduce legal fees, court costs, processing overhead, and external claims management expenses.",
        ],
      },
      {
        title: "Greater Strategic Flexibility",
        paragraphs: [
          "Ravion does not replace an airline's existing claims process.",
          "Instead, it creates an additional option that airlines can use selectively and strategically. Airlines remain free to reject proposals or continue cases through their existing procedures whenever appropriate.",
        ],
      },
      {
        title: "Faster Resolution Cycles",
        paragraphs: [
          "Traditional compensation disputes can take months - sometimes years.",
          "Ravion is designed to create outcomes within days. This reduces operational friction and improves internal efficiency.",
        ],
      },
      {
        title: "Improved Passenger Satisfaction",
        paragraphs: [
          "Passengers primarily escalate claims when they feel ignored or forced into lengthy disputes.",
          "A fast, transparent, and cooperative resolution process improves the customer experience and increases the likelihood of long-term customer retention.",
        ],
      },
      {
        title: "Reduced Exposure to Claims Companies",
        paragraphs: [
          "The rapid growth of claims enforcement companies across Europe has fundamentally changed passenger behavior.",
          "Today, passengers can pursue claims with virtually no financial risk. As a result, rejected claims increasingly continue through legal channels rather than disappearing.",
          "Ravion provides airlines with a proactive alternative before these external escalation mechanisms are triggered.",
        ],
      },
    ],
    modernEyebrow: "Designed for modern aviation",
    modernTitle: "Faster, more predictable, less adversarial.",
    modernParagraphs: [
      "Ravion is not a law firm and not a traditional claims company.",
      "We are building a technology-driven resolution layer between passengers and airlines: faster, more predictable, less adversarial, and significantly more cost-efficient.",
      "Our goal is simple: help airlines reduce compensation-related expenses while improving the passenger experience.",
    ],
    faqEyebrow: "Frequently asked questions",
    faqTitle: "Practical questions from airlines",
    faqs: [
      {
        question: "When does Ravion charge a service fee?",
        answer:
          "Ravion does not charge airlines for assessing cases, creating settlement proposals, or forwarding proposals for review. A service fee is charged only if a settlement is accepted and concluded.",
      },
      {
        question: "Are Ravion settlement proposals binding for the airline?",
        answer:
          "No. Ravion does not issue binding decisions. The airline can review each proposal and decide whether to accept it, reject it, negotiate further, or continue through its existing claims process.",
      },
      {
        question: "How does Ravion fit into an existing claims operation?",
        answer:
          "Ravion is designed as an additional pre-litigation resolution stage, not as a replacement for internal claims handling. It can be used selectively for cases where early settlement may be commercially and operationally preferable.",
      },
      {
        question: "What happens after a passenger accepts a proposed settlement?",
        answer:
          "The accepted proposal is forwarded to the airline for review. The airline still makes the final decision and can evaluate the proposal against its legal position, operational context, and commercial considerations.",
      },
      {
        question: "Does Ravion act on behalf of passengers like a claims company?",
        answer:
          "Ravion is not a traditional claims enforcement company and does not seek to escalate disputes into litigation. Its role is to create an earlier, structured resolution opportunity between passenger and airline.",
      },
      {
        question: "What is the Ravion service fee?",
        answer: "The Ravion service fee is 10% of the concluded settlement amount. A minimum fee of EUR 39 applies.",
      },
      {
        question: "What operational benefit does Ravion provide beyond the settlement amount?",
        answer:
          "Early resolution can reduce follow-up correspondence, legal coordination, court-related administration, and the internal workload associated with long-running disputed claims.",
      },
      {
        question: "Why would passengers use Ravion instead of a claims company?",
        answer:
          "Passengers may prefer a faster and more transparent process that can produce an earlier settlement proposal without immediately moving into a legal enforcement route.",
      },
    ],
    finalTitle: "Efficient resolution before escalation.",
  },
  de: {
    pill: "Lösungen für Airlines",
    heroTitle: "Entschädigungskosten für Passagiere reduzieren",
    heroSubline: "Und Kundenbeziehungen verbessern.",
    heroLead:
      "Ravion hilft Airlines, Entschädigungsstreitigkeiten mit Passagieren zu lösen, bevor sie an Claim-Management-Unternehmen, rechtliche Vermittler oder Gerichte eskalieren.",
    heroBullets: [
      "Unabhängige außergerichtliche Vorstufe zur Streitbeilegung",
      "Airlines behalten jederzeit die volle Kontrolle",
      "Keine Servicegebühr, solange kein Vergleich abgeschlossen wird",
    ],
    heroNote:
      "Entwickelt für Airlines, die entschädigungsbezogene Kosten senken und Passagieren zugleich einen schnelleren, transparenteren Lösungsweg anbieten möchten.",
    videoTitle: "Plattformüberblick",
    videoTime: "2-Minuten-Demo",
    videoFallback: "Ihr Browser unterstützt das Video-Element nicht.",
    problemEyebrow: "Das Problem",
    problemTitle: "Passagierentschädigungen sind ein relevanter Kostentreiber geworden.",
    problemParagraphs: [
      "Passagierentschädigungen gehören zu den am häufigsten unterschätzten Kostentreibern in der europäischen Luftfahrt. Airlines zahlen in Europa jedes Jahr hunderte Millionen Euro wegen Flugstörungen, Annullierungen und verspätungsbedingten Ansprüchen.",
      "Die eigentliche Entschädigung ist dabei oft nur ein Teil der finanziellen Belastung.",
      "In vielen Fällen eskalieren abgelehnte oder unbeantwortete Ansprüche über Claim-Management-Unternehmen, rechtliche Vermittler und schließlich Gerichte. Dann zahlen Airlines nicht nur den ursprünglichen Entschädigungsbetrag, sondern sind zusätzlich mit Rechtskosten, Gerichtskosten, administrativem Aufwand und höherer operativer Komplexität konfrontiert.",
      "Gleichzeitig verlieren Passagiere, die sich ignoriert oder unfair behandelt fühlen, eher das Vertrauen in die Airline, kritisieren die Marke öffentlich oder buchen künftig bei anderen Anbietern.",
    ],
    whatEyebrow: "Was Ravion ist",
    whatTitle: "Eine unabhängige Plattform für außergerichtliche Vorab-Lösungen.",
    whatParagraphs: [
      "Ravion ist eine unabhängige, technologiegestützte Plattform zur vorgerichtlichen Lösung von Entschädigungsstreitigkeiten zwischen Passagieren und Airlines.",
      "Praktisch funktioniert Ravion wie eine außergerichtliche Vergleichs- und Vermittlungsebene zwischen Passagieren und Airlines.",
      "Statt dass Streitigkeiten unmittelbar in Richtung rechtlicher Durchsetzung, Gerichte oder Claim-Management-Unternehmen eskalieren, schafft Ravion eine zusätzliche Lösungsstufe, auf der Fälle früher, schneller und zu deutlich geringeren Kosten beigelegt werden können.",
      "Wichtig ist: Airlines behalten während des gesamten Prozesses die volle Kontrolle. Ravion trifft keine verbindlichen Entscheidungen und verpflichtet Airlines nicht, Vergleichsvorschläge anzunehmen.",
      "Jeder Vergleichsvorschlag kann von der Airline geprüft, angenommen, abgelehnt oder weiterverhandelt werden. Dadurch entsteht eine zusätzliche strategische Option, bevor Streitigkeiten in teure rechtliche Verfahren eskalieren.",
    ],
    approachEyebrow: "Ein klügerer Ansatz",
    approachTitle: "Ein strukturierter Ausstieg, bevor ein Anspruch weiter eskaliert.",
    processSteps: [
      "Passagiere reichen ihren Anspruch zunächst über Ravion ein.",
      "Ravion bewertet den Fall anhand historischer Ergebnisse, rechtlicher Muster und fallspezifischer Faktoren.",
      "Auf dieser Grundlage schlägt Ravion dem Passagier einen fairen Vergleichsbetrag vor.",
      "Akzeptiert der Passagier den Vorschlag, wird er der Airline zur Prüfung weitergeleitet.",
      "Die Airline kann annehmen, ablehnen, weiterverhandeln oder den Fall über ihren bestehenden Claims-Prozess fortführen.",
    ],
    exampleEyebrow: "Beispiel",
    exampleTitle: "Von der gerichtlichen Erfolgswahrscheinlichkeit zum Vergleichsvorschlag.",
    exampleLead: "Auf Basis der Bewertung schlägt Ravion dem Passagier einen fairen Vergleichsbetrag vor.",
    metrics: [
      { label: "Geltend gemachter Entschädigungsbetrag", value: "EUR 600" },
      { label: "Geschätzte gerichtliche Erfolgswahrscheinlichkeit", value: "80%" },
      { label: "Vorgeschlagener Vergleich", value: "EUR 480" },
    ],
    exampleText:
      "Akzeptiert der Passagier den Vorschlag, wird der Vergleich der Airline zur Prüfung weitergeleitet. Die Airline entscheidet anschließend, ob sie den Vorschlag annimmt, ablehnt oder den Fall über ihren bestehenden Prozess fortführt.",
    financialEyebrow: "Finanzieller Effekt",
    financialTitle: "Warum das finanziell relevant ist",
    financialParagraphs: [
      "Im heutigen System verursachen rechtliche Eskalationen häufig Kosten, die die eigentliche Entschädigung deutlich übersteigen.",
      "In Deutschland kann ein typischer Entschädigungsstreit über EUR 600 zusätzlich Gerichtskosten, Anwaltskosten des Anspruchstellers, Anwaltskosten der Airline, administrativen Bearbeitungsaufwand und operative Prozesskosten verursachen.",
      "Dadurch kann die gesamte finanzielle Belastung in einem einzelnen Fall mehr als EUR 1.300 betragen.",
    ],
    costCards: [
      {
        title: "Klassische Eskalation",
        amount: "EUR 1.300+",
        text:
          "Mögliche Gesamtbelastung bei einem EUR-600-Entschädigungsfall, wenn Gerichtskosten, anwaltliche Vertretung, Administration und operativer Aufwand hinzukommen.",
      },
      {
        title: "Mit Ravion",
        amount: "~EUR 530",
        text:
          "EUR 480 Vergleichszahlung plus 10% Ravion-Servicegebühr von EUR 48. Dadurch können fallbezogene Gesamtkosten um mehr als 50% sinken.",
        highlighted: true,
      },
    ],
    benefitsEyebrow: "Vorteile für Airlines",
    benefitsTitle: "Eine effizientere Alternative, bevor externe Eskalationsmechanismen greifen.",
    benefitSections: [
      {
        title: "Geringere Gesamtkosten pro Anspruch",
        paragraphs: [
          "Durch die Lösung geeigneter Fälle vor rechtlicher Eskalation können Airlines Rechtskosten, Gerichtskosten, Bearbeitungsaufwand und externe Claim-Management-Kosten deutlich reduzieren.",
        ],
      },
      {
        title: "Mehr strategische Flexibilität",
        paragraphs: [
          "Ravion ersetzt den bestehenden Claims-Prozess einer Airline nicht.",
          "Stattdessen entsteht eine zusätzliche Option, die Airlines selektiv und strategisch nutzen können. Airlines bleiben frei, Vorschläge abzulehnen oder Fälle über ihre bestehenden Verfahren fortzuführen.",
        ],
      },
      {
        title: "Schnellere Lösungszyklen",
        paragraphs: [
          "Klassische Entschädigungsstreitigkeiten dauern oft Monate - manchmal Jahre.",
          "Ravion ist darauf ausgelegt, Ergebnisse innerhalb weniger Tage zu ermöglichen. Das reduziert operative Reibung und verbessert interne Effizienz.",
        ],
      },
      {
        title: "Höhere Passagierzufriedenheit",
        paragraphs: [
          "Passagiere eskalieren vor allem dann, wenn sie sich ignoriert fühlen oder in langwierige Streitigkeiten gezwungen werden.",
          "Ein schneller, transparenter und kooperativer Lösungsprozess verbessert das Kundenerlebnis und erhöht die Wahrscheinlichkeit langfristiger Kundenbindung.",
        ],
      },
      {
        title: "Geringere Abhängigkeit von Claim-Unternehmen",
        paragraphs: [
          "Das starke Wachstum von Claim-Management-Unternehmen in Europa hat das Verhalten von Passagieren grundlegend verändert.",
          "Heute können Passagiere Ansprüche nahezu ohne eigenes Kostenrisiko verfolgen. Abgelehnte Ansprüche verschwinden daher immer seltener, sondern laufen häufiger in rechtliche Kanäle.",
          "Ravion bietet Airlines eine proaktive Alternative, bevor diese externen Eskalationsmechanismen ausgelöst werden.",
        ],
      },
    ],
    modernEyebrow: "Für moderne Luftfahrt entwickelt",
    modernTitle: "Schneller, planbarer, weniger konfrontativ.",
    modernParagraphs: [
      "Ravion ist keine Anwaltskanzlei und kein klassisches Claim-Unternehmen.",
      "Wir bauen eine technologiegestützte Lösungsebene zwischen Passagieren und Airlines: schneller, planbarer, weniger konfrontativ und deutlich kosteneffizienter.",
      "Unser Ziel ist einfach: Airlines helfen, entschädigungsbezogene Kosten zu senken und gleichzeitig das Passagiererlebnis zu verbessern.",
    ],
    faqEyebrow: "Häufige Fragen",
    faqTitle: "Praktische Fragen von Airlines",
    faqs: [
      {
        question: "Wann berechnet Ravion eine Servicegebühr?",
        answer:
          "Ravion berechnet Airlines keine Gebühr für die Bewertung von Fällen, die Erstellung von Vergleichsvorschlägen oder die Weiterleitung zur Prüfung. Eine Servicegebühr fällt nur an, wenn ein Vergleich angenommen und abgeschlossen wird.",
      },
      {
        question: "Sind Vergleichsvorschläge von Ravion für die Airline bindend?",
        answer:
          "Nein. Ravion trifft keine verbindlichen Entscheidungen. Die Airline kann jeden Vorschlag prüfen und entscheiden, ob sie ihn annimmt, ablehnt, weiterverhandelt oder den Fall über ihren bestehenden Claims-Prozess fortführt.",
      },
      {
        question: "Wie passt Ravion in bestehende Claims-Prozesse?",
        answer:
          "Ravion ist als zusätzliche vorgerichtliche Lösungsstufe gedacht, nicht als Ersatz für interne Claims-Bearbeitung. Airlines können Ravion selektiv für Fälle nutzen, bei denen eine frühe Einigung wirtschaftlich und operativ sinnvoll sein kann.",
      },
      {
        question: "Was passiert, nachdem ein Passagier einen Vergleichsvorschlag akzeptiert?",
        answer:
          "Der akzeptierte Vorschlag wird der Airline zur Prüfung weitergeleitet. Die Airline trifft weiterhin die finale Entscheidung und kann den Vorschlag anhand ihrer rechtlichen Position, des operativen Kontexts und wirtschaftlicher Erwägungen bewerten.",
      },
      {
        question: "Handelt Ravion für Passagiere wie ein Claim-Unternehmen?",
        answer:
          "Nein. Ravion ist kein klassisches Claim-Management-Unternehmen und zielt nicht darauf ab, Streitigkeiten in gerichtliche Durchsetzung zu eskalieren. Ravion schafft eine frühere, strukturierte Lösungsmöglichkeit zwischen Passagier und Airline.",
      },
      {
        question: "Wie hoch ist die Ravion-Servicegebühr?",
        answer: "Die Ravion-Servicegebühr beträgt 10% des abgeschlossenen Vergleichsbetrags. Es gilt eine Mindestgebühr von EUR 39.",
      },
      {
        question: "Welchen operativen Nutzen bietet Ravion über den Vergleichsbetrag hinaus?",
        answer:
          "Frühe Lösungen können Folgekorrespondenz, rechtliche Abstimmung, gerichtliche Administration und internen Aufwand bei langlaufenden Streitfällen reduzieren.",
      },
      {
        question: "Warum sollten Passagiere Ravion statt eines Claim-Unternehmens nutzen?",
        answer:
          "Passagiere können einen schnelleren und transparenteren Prozess bevorzugen, der einen früheren Vergleichsvorschlag ermöglicht, ohne sofort in eine rechtliche Durchsetzungsroute zu wechseln.",
      },
    ],
    finalTitle: "Effiziente Lösung vor der Eskalation.",
  },
} as const;

export default async function SolutionsPage() {
  const lang: SiteLanguage = await getSiteLanguage();
  const t = copy[lang];

  return (
    <main className="px-4 pb-14 pt-7 sm:px-6 sm:pb-16 sm:pt-9 lg:pb-20 lg:pt-10">
      <div className="app-wrap">
        <section
          className="overflow-hidden rounded-[28px] border"
          style={{
            borderColor: "var(--border)",
            background:
              "linear-gradient(140deg, color-mix(in oklab, var(--surface-strong) 94%, #f4f8fb) 0%, color-mix(in oklab, var(--surface) 94%, #e3edf4) 100%)",
          }}
        >
          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:p-10 xl:gap-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <Image src="/ravion-logo.png" alt="Ravion" width={120} height={82} className="h-9 w-auto" priority />
                <span className="pill">{t.pill}</span>
              </div>
              <h1 className="mt-7 max-w-lg text-3xl font-semibold tracking-tight sm:text-5xl lg:text-[50px] lg:leading-[1.05]">
                {t.heroTitle}
              </h1>
              <p className="mt-4 max-w-xl text-xl font-medium leading-snug sm:text-2xl" style={{ color: "var(--brand-strong)" }}>
                {t.heroSubline}
              </p>
              <p className="mt-5 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
                {t.heroLead}
              </p>
              <div className="mt-7 grid gap-3">
                {t.heroBullets.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--brand-strong)" }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl border p-4" style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {t.heroNote}
                </p>
              </div>
            </div>
            <div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold">{t.videoTitle}</p>
                <p className="hidden text-sm sm:block" style={{ color: "var(--muted)" }}>{t.videoTime}</p>
              </div>
              <div className="overflow-hidden rounded-[22px] border shadow-sm" style={{ borderColor: "var(--border)", background: "#111827" }}>
                <video className="aspect-video h-full w-full bg-[#f5f8fc] object-contain" controls playsInline preload="metadata" poster="/ravion-logo.png">
                  <source src="/solutions-video.mp4" type="video/mp4" />
                  {t.videoFallback}
                </video>
              </div>
            </div>
          </div>
        </section>

        <ContentSection eyebrow={t.problemEyebrow} title={t.problemTitle}>
          {t.problemParagraphs.map((p) => <p key={p}>{p}</p>)}
        </ContentSection>

        <ContentSection eyebrow={t.whatEyebrow} title={t.whatTitle}>
          {t.whatParagraphs.map((p) => <p key={p}>{p}</p>)}
        </ContentSection>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>{t.approachEyebrow}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{t.approachTitle}</h2>
            </div>
            <div className="grid gap-3">
              {t.processSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-xl border p-4" style={{ borderColor: "var(--border)", background: "color-mix(in oklab, var(--surface) 92%, #f4f8fb)" }}>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold" style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}>
                    {index + 1}
                  </span>
                  <p className="text-sm sm:text-base" style={{ color: "var(--muted)" }}>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border p-6 sm:p-10" style={{ borderColor: "var(--border)", background: "linear-gradient(145deg, color-mix(in oklab, var(--surface-strong) 95%, #eef4f8) 0%, color-mix(in oklab, var(--surface) 96%, #f7fafc) 100%)" }}>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>{t.exampleEyebrow}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{t.exampleTitle}</h2>
              <p className="mt-4 text-sm sm:text-base" style={{ color: "var(--muted)" }}>{t.exampleLead}</p>
            </div>
            <div className="rounded-2xl border p-5" style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}>
              <div className="grid gap-3 sm:grid-cols-3">
                {t.metrics.map((metric) => <Metric key={metric.label} label={metric.label} value={metric.value} />)}
              </div>
              <p className="mt-5 text-sm sm:text-base" style={{ color: "var(--muted)" }}>{t.exampleText}</p>
            </div>
          </div>
        </section>

        <ContentSection eyebrow={t.financialEyebrow} title={t.financialTitle}>
          {t.financialParagraphs.map((p) => <p key={p}>{p}</p>)}
        </ContentSection>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {t.costCards.map((card) => <CostCard key={card.title} {...card} />)}
        </section>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>{t.benefitsEyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{t.benefitsTitle}</h2>
          <div className="mt-7 grid gap-5">
            {t.benefitSections.map((section) => (
              <article key={section.title} className="rounded-xl border p-5" style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}>
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <div className="mt-3 space-y-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <ContentSection eyebrow={t.modernEyebrow} title={t.modernTitle}>
          {t.modernParagraphs.map((p) => <p key={p}>{p}</p>)}
        </ContentSection>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>{t.faqEyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{t.faqTitle}</h2>
          <div className="mt-6 grid gap-3">
            {t.faqs.map((faq) => (
              <details key={faq.question} className="rounded-xl border p-4" style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}>
                <summary className="cursor-pointer text-base font-semibold">{faq.question}</summary>
                <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border p-6 text-center sm:p-10" style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}>
          <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>Ravion</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{t.finalTitle}</h2>
        </section>
      </div>
    </main>
  );
}

function ContentSection({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="surface-card mt-8 p-6 sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>{eyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        </div>
        <div className="space-y-4 text-sm sm:text-base" style={{ color: "var(--muted)" }}>{children}</div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border px-4 py-3" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-2 text-xs font-medium uppercase tracking-[0.12em]" style={{ color: "var(--muted)" }}>{label}</div>
    </div>
  );
}

function CostCard({ title, amount, text, highlighted = false }: { title: string; amount: string; text: string; highlighted?: boolean }) {
  return (
    <article className="rounded-[20px] border p-6" style={{ borderColor: highlighted ? "var(--brand)" : "var(--border)", background: highlighted ? "color-mix(in oklab, var(--surface-strong) 90%, #e7f1f6)" : "var(--surface-strong)" }}>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-3 text-4xl font-semibold">{amount}</p>
      <p className="mt-4 text-sm sm:text-base" style={{ color: "var(--muted)" }}>{text}</p>
    </article>
  );
}
