import type { Metadata } from "next";
import Image from "next/image";
import { seoAlternates } from "@/lib/seoDomains";
import { getSiteLanguage, type SiteLanguage } from "@/lib/siteLanguage";

export const metadata: Metadata = {
  title: "Solutions for Travel Operators",
  description:
    "Ravion hilft Reiseveranstaltern, Reisemängelansprüche außergerichtlich beizulegen, bevor Fälle eskalieren.",
  alternates: seoAlternates("/solutions-reiseveranstalter"),
};

const copy = {
  de: {
  pill: "Reiseveranstalter",
  heroTitle: "Reisemängelansprüche lösen, bevor sie eskalieren.",
  heroSubline: "Schneller, günstiger und ohne Kontrollverlust.",
  heroLead:
    "Ravion hilft Reiseveranstaltern, Streitfälle außergerichtlich beizulegen, bevor sie über Inkassoportale, Anwälte oder Gerichte eskalieren.",
  heroBullets: [
    "Unabhängige Vorinstanz vor rechtlicher Eskalation",
    "Reiseveranstalter behalten die volle Kontrolle",
    "Keine Kosten ohne abgeschlossenen Vergleich",
  ],
  heroNote:
    "Entwickelt für Reiseveranstalter, die Reklamationskosten senken und Kunden gleichzeitig einen schnelleren, transparenteren Lösungsweg anbieten möchten.",
  problemEyebrow: "Das Problem",
  problemTitle:
    "Reisemängelansprüche entwickeln sich zu einem erheblichen Kostenfaktor im Reisegeschäft.",
  problemParagraphs: [
    "Reiseveranstalter zahlen jährlich erhebliche Summen aufgrund von Reisemängeln, Stornierungen und Leistungsabweichungen.",
    "Dabei ist die eigentliche Entschädigung häufig nur ein Teil der tatsächlichen Gesamtkosten.",
    "Denn viele abgelehnte oder unbeantwortete Ansprüche eskalieren später über Inkassoportale, Anwälte und Gerichte. In solchen Fällen zahlen Reiseveranstalter nicht nur die ursprüngliche Entschädigung, sondern zusätzlich Gerichts- und Anwaltskosten sowie erheblichen internen Bearbeitungsaufwand.",
    "Gleichzeitig verlieren Kunden, die sich ignoriert oder unfair behandelt fühlen, häufiger das Vertrauen in den Anbieter, äußern sich negativ oder buchen künftig bei anderen Veranstaltern.",
  ],
  whatEyebrow: "Was Ravion ist",
  whatTitle:
    "Eine unabhängige Plattform zur außergerichtlichen Lösung von Reisemängelansprüchen.",
  whatParagraphs: [
    "Ravion fungiert als neutrale Vergleichsplattform zwischen Reisenden und Reiseveranstaltern.",
    "Anstatt Fälle direkt an Inkassoportale, Anwälte oder Gerichte eskalieren zu lassen, schafft Ravion einen zusätzlichen Lösungsweg, über den Streitigkeiten früher, schneller und deutlich kostengünstiger gelöst werden können.",
    "Wichtig dabei: Reiseveranstalter behalten während des gesamten Prozesses die volle Kontrolle.",
    "Ravion trifft keine verbindlichen Entscheidungen und verpflichtet Reiseveranstalter nicht dazu, Vergleichsvorschläge anzunehmen. Jeder Vergleichsvorschlag kann geprüft, angenommen, abgelehnt oder weiterverhandelt werden. Dadurch erhalten Reiseveranstalter zusätzlichen Handlungsspielraum, bevor Fälle in teure rechtliche Verfahren eskalieren.",
  ],
  approachEyebrow: "Ein strukturierter Weg",
  approachTitle: "So funktioniert Ravion vor der Eskalation.",
  processSteps: [
    "Der Kunde reicht seinen Reisemängelanspruch über Ravion ein.",
    "Ravion bewertet den Fall anhand aktueller Rechtsprechung, vergleichbarer Urteile und fallspezifischer Faktoren.",
    "Auf Basis dieser Bewertung schlägt Ravion dem Kunden einen fairen Vergleichsbetrag vor, orientiert an der realistischen Erfolgswahrscheinlichkeit vor Gericht.",
    "Akzeptiert der Kunde den Vorschlag, wird der Vergleich zur Prüfung an den Reiseveranstalter weitergeleitet.",
    "Der Reiseveranstalter entscheidet selbst, ob er den Vorschlag annimmt, ablehnt, weiterverhandelt oder den Fall über den bestehenden Prozess fortführt.",
  ],
  exampleEyebrow: "Beispiel",
  exampleTitle: "Von der Erfolgsaussicht vor Gericht zum Vergleichsvorschlag.",
  exampleLead:
    "Auf Basis der Bewertung schlägt Ravion dem Kunden einen fairen Vergleich vor, in der Regel unter dem maximal möglichen Betrag.",
  metrics: [
    { label: "Geforderte Entschädigung", value: "EUR 800" },
    { label: "Geschätzte Erfolgsaussicht vor Gericht", value: "75%" },
    { label: "Vorgeschlagener Vergleich", value: "EUR 600" },
  ],
  exampleText:
    "Akzeptiert der Kunde den Vorschlag, wird der Vergleich an den Reiseveranstalter weitergeleitet. Der Reiseveranstalter entscheidet anschließend selbst, ob er den Vorschlag annimmt, ablehnt oder den Fall über seinen bestehenden Prozess fortführt.",
  financialEyebrow: "Finanzielle Auswirkungen",
  financialTitle: "Warum das wirtschaftlich relevant ist",
  financialParagraphs: [
    "Im heutigen System verursachen rechtliche Eskalationen häufig Kosten, die deutlich über die eigentliche Entschädigung hinausgehen.",
    "In Deutschland kann ein Reisemängelfall zusätzlich Gerichtsgebühren, Anwaltskosten auf Klägerseite, eigene Rechtskosten des Reiseveranstalters sowie erheblichen internen Bearbeitungsaufwand verursachen.",
    "Bei einem Reisemängelfall mit EUR 800 geforderter Entschädigung können die Gesamtkosten dadurch schnell auf über EUR 1.500 steigen.",
  ],
  costCards: [
    {
      title: "Klassische Eskalation",
      amount: "EUR 1.500+",
      text:
        "Mögliche Gesamtbelastung für einen EUR-800-Reisemängelfall, sobald Gerichtsgebühren, Anwaltskosten, Verwaltungsaufwand und operative Kosten einbezogen werden.",
    },
    {
      title: "Mit Ravion",
      amount: "~EUR 660",
      text:
        "EUR 600 Vergleichszahlung zzgl. 10% Ravion-Provision in Höhe von EUR 60. Das kann die fallbezogenen Gesamtkosten um mehr als 50% reduzieren.",
      highlighted: true,
    },
  ],
  benefitsEyebrow: "Vorteile für Reiseveranstalter",
  benefitsTitle: "Eine effizientere Alternative, bevor Fälle extern eskalieren.",
  benefitSections: [
    {
      title: "Geringere Gesamtkosten pro Fall",
      paragraphs: [
        "Durch die frühzeitige Lösung geeigneter Fälle können Reiseveranstalter Gerichts- und Anwaltskosten, internen Bearbeitungsaufwand sowie externe Eskalationskosten deutlich reduzieren.",
      ],
    },
    {
      title: "Mehr strategische Flexibilität",
      paragraphs: [
        "Ravion ersetzt den bestehenden Reklamationsprozess eines Reiseveranstalters nicht.",
        "Stattdessen entsteht eine zusätzliche Option, die flexibel und situationsabhängig genutzt werden kann. Reiseveranstalter bleiben jederzeit frei, Vorschläge abzulehnen oder bestehende Prozesse weiterzuführen.",
      ],
    },
    {
      title: "Schnellere Lösungen",
      paragraphs: [
        "Klassische Reisemängelstreitigkeiten dauern häufig Monate, teilweise sogar Jahre.",
        "Ravion ist darauf ausgelegt, Lösungen innerhalb weniger Tage zu ermöglichen. Das reduziert internen Aufwand und verbessert operative Effizienz.",
      ],
    },
    {
      title: "Höhere Kundenzufriedenheit",
      paragraphs: [
        "Kunden eskalieren Ansprüche häufig dann, wenn sie sich ignoriert fühlen oder monatelang auf eine Antwort warten müssen.",
        "Ein schneller, transparenter und kooperativer Lösungsprozess verbessert die Customer Experience und erhöht die Wahrscheinlichkeit langfristiger Kundenbindung.",
      ],
    },
    {
      title: "Weniger Eskalation über Inkassoportale",
      paragraphs: [
        "Das starke Wachstum von Verbraucherportalen und Inkassoanbietern hat das Verhalten von Kunden grundlegend verändert.",
        "Heute können Ansprüche nahezu ohne eigenes Kostenrisiko weiterverfolgt werden. Ravion bietet Reiseveranstaltern einen zusätzlichen Lösungsweg, bevor diese externen Eskalationsmechanismen greifen.",
      ],
    },
    {
      title: "Kein Eingriff in bestehende Prozesse",
      paragraphs: [
        "Ravion ist als ergänzende Vorinstanz konzipiert, nicht als Ersatz für interne Reklamationsbearbeitung.",
        "Es kann selektiv für Fälle genutzt werden, bei denen eine frühzeitige Einigung wirtschaftlich und operativ sinnvoll ist.",
      ],
    },
  ],
  faqEyebrow: "Häufige Fragen",
  faqTitle: "Praktische Fragen von Reiseveranstaltern",
  faqs: [
    {
      question: "Wann stellt Ravion eine Provision in Rechnung?",
      answer:
        "Ravion stellt Reiseveranstaltern keine Kosten für die Fallbewertung, die Erstellung von Vergleichsvorschlägen oder die Weiterleitung zur Prüfung in Rechnung. Eine Provision wird ausschließlich dann fällig, wenn ein Vergleich angenommen und abgeschlossen wird.",
    },
    {
      question: "Sind Ravion-Vergleichsvorschläge für den Reiseveranstalter bindend?",
      answer:
        "Nein. Ravion trifft keine verbindlichen Entscheidungen. Der Reiseveranstalter kann jeden Vorschlag prüfen und selbst entscheiden, ob er ihn annimmt, ablehnt, weiterverhandelt oder den Fall über seinen bestehenden Prozess fortführt.",
    },
    {
      question: "Wie fügt sich Ravion in bestehende Reklamationsprozesse ein?",
      answer:
        "Ravion ist als zusätzliche Vorinstanz vor rechtlicher Eskalation konzipiert, nicht als Ersatz für interne Reklamationsbearbeitung. Es kann selektiv für Fälle eingesetzt werden, bei denen eine frühzeitige Einigung sinnvoll ist.",
    },
    {
      question: "Was passiert, nachdem ein Kunde einen Vergleichsvorschlag akzeptiert hat?",
      answer:
        "Der angenommene Vorschlag wird zur Prüfung an den Reiseveranstalter weitergeleitet. Der Reiseveranstalter trifft die endgültige Entscheidung und kann den Vorschlag vor dem Hintergrund seiner rechtlichen Position und kaufmännischen Überlegungen bewerten.",
    },
    {
      question: "Handelt Ravion im Auftrag von Kunden wie ein Inkassounternehmen?",
      answer:
        "Nein. Ravion ist kein klassisches Inkassounternehmen und strebt keine Eskalation in rechtliche Verfahren an. Ravion versteht sich als neutraler Vermittler, nicht als Verbraucherschutzstelle. Ziel ist ein fairer Ausgleich für beide Seiten.",
    },
    {
      question: "Wie hoch ist die Ravion-Provision?",
      answer:
        "Die Ravion-Provision beträgt 10% der abgeschlossenen Vergleichssumme. Es gilt eine Mindestprovision von EUR 39.",
    },
    {
      question: "Welchen operativen Vorteil bietet Ravion über die Vergleichssumme hinaus?",
      answer:
        "Eine frühzeitige Lösung kann Folgekommunikation, rechtliche Koordination, gerichtsbezogene Verwaltung und den internen Aufwand für langwierige strittige Fälle deutlich reduzieren.",
    },
  ],
  finalTitle: "Effiziente Lösung vor der Eskalation.",
  finalText: "Interesse an einer Partnerschaft? Wir freuen uns auf Ihre Nachricht.",
  sideTitle: "Vorinstanz für Reisemängelstreitigkeiten",
  },
  en: {
    pill: "Travel operators",
    heroTitle: "Resolve travel defect claims before they escalate.",
    heroSubline: "Faster, more cost-efficient, and without losing control.",
    heroLead:
      "Ravion helps travel operators resolve disputes out of court before cases escalate through claims platforms, lawyers, or courts.",
    heroBullets: [
      "Independent pre-litigation resolution layer",
      "Travel operators remain fully in control",
      "No cost unless a settlement is concluded",
    ],
    heroNote:
      "Built for travel operators that want to reduce complaint-related costs while offering customers a faster and more transparent resolution path.",
    problemEyebrow: "The problem",
    problemTitle:
      "Travel defect claims are becoming a significant cost factor in the travel business.",
    problemParagraphs: [
      "Travel operators pay substantial amounts every year because of travel defects, cancellations, and deviations from booked services.",
      "The actual compensation amount is often only one part of the total financial burden.",
      "Many rejected or unanswered claims later escalate through claims platforms, lawyers, and courts. In those cases, travel operators do not only pay the original compensation amount, but also court costs, legal fees, and considerable internal handling effort.",
      "At the same time, customers who feel ignored or treated unfairly are more likely to lose trust in the provider, leave negative feedback, or book with other operators in the future.",
    ],
    whatEyebrow: "What Ravion is",
    whatTitle:
      "An independent platform for resolving travel defect claims out of court.",
    whatParagraphs: [
      "Ravion acts as a neutral settlement platform between travelers and travel operators.",
      "Instead of letting cases escalate directly to claims platforms, lawyers, or courts, Ravion creates an additional resolution path where disputes can be resolved earlier, faster, and at significantly lower cost.",
      "Important: travel operators remain fully in control throughout the process.",
      "Ravion does not issue binding decisions and does not require travel operators to accept settlement proposals. Every proposal can be reviewed, accepted, rejected, or negotiated further. This gives travel operators additional room to act before cases escalate into expensive legal proceedings.",
    ],
    approachEyebrow: "A structured path",
    approachTitle: "How Ravion works before escalation.",
    processSteps: [
      "The customer submits the travel defect claim through Ravion.",
      "Ravion assesses the case based on current case law, comparable judgments, and claim-specific factors.",
      "Based on this assessment, Ravion proposes a fair settlement amount to the customer, oriented around the realistic probability of success in court.",
      "If the customer accepts the proposal, the settlement is forwarded to the travel operator for review.",
      "The travel operator decides independently whether to accept the proposal, reject it, negotiate further, or continue the case through its existing process.",
    ],
    exampleEyebrow: "Example",
    exampleTitle: "From court probability to a settlement proposal.",
    exampleLead:
      "Based on the assessment, Ravion proposes a fair settlement to the customer, usually below the maximum possible amount.",
    metrics: [
      { label: "Claimed compensation", value: "EUR 800" },
      { label: "Estimated court success probability", value: "75%" },
      { label: "Proposed settlement", value: "EUR 600" },
    ],
    exampleText:
      "If the customer accepts the proposal, the settlement is forwarded to the travel operator. The travel operator then decides independently whether to accept the proposal, reject it, or continue the case through its existing process.",
    financialEyebrow: "Financial impact",
    financialTitle: "Why this matters financially",
    financialParagraphs: [
      "In the current system, legal escalation often creates costs that significantly exceed the actual compensation amount.",
      "In Germany, a travel defect case can additionally generate court fees, claimant legal costs, the travel operator's own legal costs, and considerable internal handling effort.",
      "For a travel defect case with EUR 800 in claimed compensation, total case costs can therefore quickly exceed EUR 1,500.",
    ],
    costCards: [
      {
        title: "Traditional escalation",
        amount: "EUR 1,500+",
        text:
          "Possible total exposure for a EUR 800 travel defect case once court fees, legal costs, administrative effort, and operational costs are included.",
      },
      {
        title: "With Ravion",
        amount: "~EUR 660",
        text:
          "EUR 600 settlement payment plus a 10% Ravion commission of EUR 60. This can reduce case-related total costs by more than 50%.",
        highlighted: true,
      },
    ],
    benefitsEyebrow: "Benefits for travel operators",
    benefitsTitle: "A more efficient alternative before cases escalate externally.",
    benefitSections: [
      {
        title: "Lower total cost per case",
        paragraphs: [
          "By resolving suitable cases early, travel operators can significantly reduce court costs, legal fees, internal handling effort, and external escalation costs.",
        ],
      },
      {
        title: "Greater strategic flexibility",
        paragraphs: [
          "Ravion does not replace a travel operator's existing complaint process.",
          "Instead, it creates an additional option that can be used flexibly and selectively. Travel operators remain free to reject proposals or continue existing processes at any time.",
        ],
      },
      {
        title: "Faster resolutions",
        paragraphs: [
          "Traditional travel defect disputes often take months, sometimes even years.",
          "Ravion is designed to enable resolutions within days. This reduces internal workload and improves operational efficiency.",
        ],
      },
      {
        title: "Higher customer satisfaction",
        paragraphs: [
          "Customers often escalate claims when they feel ignored or have to wait months for a response.",
          "A fast, transparent, and cooperative resolution process improves the customer experience and increases the likelihood of long-term retention.",
        ],
      },
      {
        title: "Less escalation through claims platforms",
        paragraphs: [
          "The strong growth of consumer portals and claims providers has fundamentally changed customer behavior.",
          "Today, claims can often be pursued with virtually no personal cost risk. Ravion gives travel operators an additional resolution path before these external escalation mechanisms take over.",
        ],
      },
      {
        title: "No interference with existing processes",
        paragraphs: [
          "Ravion is designed as a complementary pre-stage, not as a replacement for internal complaint handling.",
          "It can be used selectively for cases where early settlement is commercially and operationally sensible.",
        ],
      },
    ],
    faqEyebrow: "Frequently asked questions",
    faqTitle: "Practical questions from travel operators",
    faqs: [
      {
        question: "When does Ravion charge a commission?",
        answer:
          "Ravion does not charge travel operators for case assessment, creating settlement proposals, or forwarding proposals for review. A commission is charged only if a settlement is accepted and concluded.",
      },
      {
        question: "Are Ravion settlement proposals binding for the travel operator?",
        answer:
          "No. Ravion does not issue binding decisions. The travel operator can review each proposal and decide whether to accept it, reject it, negotiate further, or continue through its existing process.",
      },
      {
        question: "How does Ravion fit into existing complaint processes?",
        answer:
          "Ravion is designed as an additional pre-stage before legal escalation, not as a replacement for internal complaint handling. It can be used selectively for cases where early settlement makes sense.",
      },
      {
        question: "What happens after a customer accepts a settlement proposal?",
        answer:
          "The accepted proposal is forwarded to the travel operator for review. The travel operator makes the final decision and can assess the proposal against its legal position and commercial considerations.",
      },
      {
        question: "Does Ravion act on behalf of customers like a claims company?",
        answer:
          "No. Ravion is not a traditional claims company and does not aim to escalate disputes into legal proceedings. Ravion acts as a neutral mediator, not as a consumer protection body. The goal is a fair outcome for both sides.",
      },
      {
        question: "How high is the Ravion commission?",
        answer:
          "The Ravion commission is 10% of the concluded settlement amount. A minimum commission of EUR 39 applies.",
      },
      {
        question: "What operational benefit does Ravion provide beyond the settlement amount?",
        answer:
          "Early resolution can reduce follow-up communication, legal coordination, court-related administration, and internal workload for long-running disputed cases.",
      },
    ],
    finalTitle: "Efficient resolution before escalation.",
    finalText: "Interested in a partnership? We look forward to hearing from you.",
    sideTitle: "Pre-stage for travel defect disputes",
  },
} as const;

export default async function TravelOperatorSolutionsPage({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string; language?: string }>;
}) {
  const params = await searchParams;
  const requestedLang = params?.lang ?? params?.language;
  const lang: SiteLanguage = requestedLang === "de" || requestedLang === "en" ? requestedLang : await getSiteLanguage();
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
            </div>
            <div className="rounded-[24px] border p-5 shadow-sm sm:p-6" style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
                Ravion
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{t.sideTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed sm:text-base" style={{ color: "var(--muted)" }}>
                {t.heroNote}
              </p>
              <div className="mt-6 grid gap-3">
                {t.metrics.map((metric) => (
                  <Metric key={metric.label} label={metric.label} value={metric.value} />
                ))}
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
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>{t.finalText}</p>
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
