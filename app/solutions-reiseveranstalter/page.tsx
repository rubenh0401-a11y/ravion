import type { Metadata } from "next";
import Image from "next/image";
import { seoAlternates } from "@/lib/seoDomains";

export const metadata: Metadata = {
  title: "Solutions for Travel Operators",
  description:
    "Ravion hilft Reiseveranstaltern, Reisemängelansprüche außergerichtlich beizulegen, bevor Fälle eskalieren.",
  alternates: seoAlternates("/solutions-reiseveranstalter"),
};

const copy = {
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
    "Reisemängelansprüche zählen zu den größten versteckten Kostenfaktoren im Reisegeschäft.",
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
    "Dadurch können die Gesamtkosten eines einzelnen Falls schnell auf über EUR 1.500 steigen.",
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
} as const;

export default function TravelOperatorSolutionsPage() {
  const t = copy;

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
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Vorinstanz für Reisemängelstreitigkeiten</h2>
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
