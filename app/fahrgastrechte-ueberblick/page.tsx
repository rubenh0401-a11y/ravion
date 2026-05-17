import { cookies } from "next/headers";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fahrgastrechte Überblick",
  description: "Kompakter Überblick zu Fahrgastrechten bei Bahnreisen: Verspätung, Ausfall, Erstattung, Ersatzbeförderung und Hilfeleistungen.",
};

const copy = {
  de: {
    title: "Fahrgastrechte bei der Bahn",
    lead:
      "Bei Verspätung, Zugausfall, verpasstem Anschluss oder Streik haben Bahnreisende oft deutlich mehr Rechte, als viele denken. Entscheidend sind vor allem die erwartete Verspätung am Zielort, die Ticketart und die Frage, ob du weiterfahren oder die Reise abbrechen willst.",
    quickTitle: "Direkt zum Thema",
    quickLinks: [
      ["sofort", "Was du sofort tun solltest"],
      ["rechte", "Diese Rechte hast du ab 60 Minuten"],
      ["entschaedigung", "Ab wann es Geld zurück gibt"],
      ["zeitkarten", "Zeitkarten & Deutschlandticket"],
      ["hilfe", "Essen, Hotel, Ersatzverkehr"],
      ["ausnahmen", "Wann die Bahn nicht zahlen muss"],
    ] as const,
    ctaButton: "Fall starten",
    note:
      "Hinweis: Die Darstellung ist ein Überblick und ersetzt keine individuelle Rechtsberatung. Sie soll dir helfen, typische Ansprüche schnell einzuordnen.",

    immediateTitle: "Verspätung oder Zugausfall: Was du sofort tun solltest",
    immediateSteps: [
      {
        title: "Verspätung bestätigen lassen",
        text: "Lass dir Ausfall oder Verspätung möglichst im Zug, am Bahnhof oder digital bestätigen. Sichere außerdem Ticket, Buchungsbestätigung und Screenshots der Verbindung.",
      },
      {
        title: "Kontakt zum Eisenbahnunternehmen aufnehmen",
        text: "Wende dich an das Unternehmen, bei dem du das Ticket gekauft hast. Wenn du später Geld ausgezahlt bekommen willst, solltest du das klar angeben und dich nicht still auf Gutscheine verweisen lassen.",
      },
      {
        title: "Belege sammeln",
        text: "Wenn dir zusätzliche Kosten entstehen, sichere Quittungen, Screenshots und jede Kommunikation mit dem Anbieter. Das gilt besonders für Ersatzfahrten, Verpflegung oder Übernachtung.",
      },
    ] as const,

    rightsTitle: "Diese Rechte hast du ab 60 Minuten erwarteter Verspätung",
    rightsLead:
      "Ist schon vor der Abfahrt oder unterwegs absehbar, dass du dein Ziel mit mehr als 60 Minuten Verspätung erreichst, muss dir das Bahnunternehmen diese Möglichkeiten anbieten:",
    rightsCards: [
      {
        title: "Geld zurück",
        text: "Du kannst den Ticketpreis erstatten lassen. Bist du schon unterwegs und wird die Reise sinnlos, darfst du zudem kostenlos zum Ausgangsort zurückfahren und bekommst auch dann den Fahrpreis zurück.",
      },
      {
        title: "Weiterfahrt bei nächster Gelegenheit",
        text: "Die Bahn muss dir eine kostenlose Weiterfahrt oder Umbuchung anbieten. Dabei darf auch auf eine andere Strecke oder ein anderes Unternehmen ausgewichen werden, solange die Reisebedingungen vergleichbar bleiben.",
      },
      {
        title: "Spätere Fahrt",
        text: "Du kannst die Reise auch auf einen späteren Zeitpunkt verschieben, wenn das für dich sinnvoller ist.",
      },
      {
        title: "Eigene Ersatzbeförderung",
        text: "Informiert dich die Bahn nicht innerhalb von 100 Minuten nach geplanter Abfahrt über eine Alternative, darfst du dir unter bestimmten Voraussetzungen selbst eine Weiterfahrt organisieren und die notwendigen Kosten ersetzt verlangen.",
      },
    ] as const,

    compensationTitle: "Ab wann du Entschädigung bekommst",
    compensationLead:
      "Setzt du die Reise trotz Verspätung fort, kommt zusätzlich eine pauschale Entschädigung in Betracht. Maßgeblich ist die tatsächliche Verspätung am Zielort.",
    compensationRows: [
      ["60 bis 119 Minuten", "25 % des Fahrpreises"],
      ["ab 120 Minuten", "50 % des Fahrpreises"],
    ] as const,
    compensationNote:
      "Bei Hin- und Rückfahrt auf einem gemeinsamen Ticket wird für die betroffene Richtung oft mit dem halben Ticketpreis gerechnet.",

    seasonTitle: "Zeitkarten, Deutschlandticket und BahnCard 100",
    seasonLead:
      "Auch Inhaber von Zeitkarten haben Entschädigungsansprüche. Statt prozentualer Erstattung gelten hier meist Pauschalen. Beträge unter 4 Euro werden wegen der gesetzlichen Bagatellgrenze nicht ausgezahlt.",
    seasonHeaders: ["Zeitkarte", "1. Klasse", "2. Klasse"],
    seasonRows: [
      ["Fernverkehr", "7,50 EUR", "5,00 EUR"],
      ["Nahverkehr / Deutschlandticket", "2,25 EUR", "1,50 EUR"],
      ["BahnCard 100", "15,00 EUR", "10,00 EUR"],
    ] as const,
    seasonNote:
      "Wiederholte Verspätungen können gesammelt eingereicht werden. Im Nahverkehr sind deshalb oft mehrere Fälle nötig, bis die Bagatellgrenze überschritten ist.",

    helpTitle: "Dann gibt es Essen, Übernachtung und Ersatzverkehr",
    helpCards: [
      {
        title: "Essen und Getränke",
        text: "Ab einer Verspätung von 60 Minuten muss dir die Bahn nach Möglichkeit Verpflegung im angemessenen Verhältnis zur Wartezeit anbieten.",
      },
      {
        title: "Hotel und Transfer",
        text: "Wenn die Weiterfahrt erst am nächsten Tag möglich ist, muss die Bahn grundsätzlich auch Hotel und den Transfer dorthin übernehmen.",
      },
      {
        title: "Nachtregel",
        text: "Zwischen 00:00 und 05:00 Uhr oder beim Ausfall des letzten Zuges des Tages darfst du unter Voraussetzungen auch Bus oder Taxi nutzen.",
      },
      {
        title: "Stehengebliebener Zug",
        text: "Bleibt dein Zug unterwegs liegen, muss das Unternehmen dich auf anderem Weg zum nächsten Bahnhof bringen.",
      },
    ] as const,

    exceptionsTitle: "Wann die Bahn nicht zahlen muss",
    exceptionsLead:
      "Die Bahn kann sich in bestimmten Fällen auf einen Haftungsausschluss berufen. Das gilt aber nur, wenn das Ereignis trotz aller Sorgfalt unvermeidbar war.",
    exceptionsGroups: [
      {
        title: "Mögliche Ausschlussgründe",
        items: [
          "außergewöhnliche Umstände wie extremes Wetter",
          "Verhalten Dritter, zum Beispiel Gleisblockaden",
          "Verschulden des Fahrgasts",
        ],
      },
      {
        title: "Wichtige Grenze",
        items: [
          "Ein Streik des Bahnpersonals zählt nicht als außergewöhnlicher Umstand.",
          "Die Bahn muss dann grundsätzlich trotzdem entschädigen.",
        ],
      },
    ] as const,

    extraTitle: "Besonderheiten bei Ersatzbeförderung",
    extraItems: [
      "Erhältst du binnen 100 Minuten keine Alternative, darfst du dir unter Voraussetzungen selbst eine Ersatzverbindung mit Bahn oder Bus beschaffen.",
      "Im Nahverkehr kannst du bei erwarteten 20 Minuten Verspätung am Ziel unter bestimmten Voraussetzungen auch einen höherwertigen Zug nutzen. Das gilt aber nicht für bestimmte stark ermäßigte Zeitkarten wie das Deutschlandticket.",
      "Brichst du die Reise ab und lässt dir den Fahrpreis vollständig erstatten, gibt es daneben keine zusätzliche Verspätungsentschädigung mehr.",
    ] as const,
  },
  en: {
    title: "Rail passenger rights",
    lead:
      "In cases of delay, cancellation, missed connection, or strike, rail passengers often have more rights than expected. The key questions are the expected delay at destination, the ticket type, and whether you still want to continue the trip or abandon it.",
    quickTitle: "Jump to section",
    quickLinks: [
      ["sofort", "What to do immediately"],
      ["rechte", "Rights from 60 minutes"],
      ["entschaedigung", "When compensation is paid"],
      ["zeitkarten", "Season tickets"],
      ["hilfe", "Meals, hotel, replacement transport"],
      ["ausnahmen", "When the operator may not have to pay"],
    ] as const,
    ctaButton: "Start case",
    note:
      "Note: This page is a structured overview and does not replace individual legal advice. It is meant to help you classify common claims quickly.",

    immediateTitle: "Delay or train cancellation: what to do immediately",
    immediateSteps: [
      {
        title: "Get confirmation of the delay",
        text: "If possible, have the delay or cancellation confirmed on the train, at the station, or digitally. Keep your ticket, booking proof, and screenshots of the disrupted connection.",
      },
      {
        title: "Contact the railway undertaking",
        text: "Reach out to the company from which you bought the ticket. If you want a cash payout later, say so clearly instead of silently accepting vouchers.",
      },
      {
        title: "Collect receipts",
        text: "If extra costs arise, keep receipts, screenshots, and communication. This matters especially for replacement travel, meals, or accommodation.",
      },
    ] as const,

    rightsTitle: "These rights apply from an expected 60-minute delay",
    rightsLead:
      "If it is already foreseeable before departure or during the trip that you will reach your destination more than 60 minutes late, the rail operator usually has to offer you these options:",
    rightsCards: [
      {
        title: "Refund",
        text: "You may claim the ticket price back. If you are already travelling and the trip has become pointless, you may also return to the point of departure free of charge and still receive a refund.",
      },
      {
        title: "Continuation at the next opportunity",
        text: "The operator must usually offer a free continuation or rerouting. The route may change and another operator can be used, as long as travel conditions remain comparable.",
      },
      {
        title: "Travel later",
        text: "You may also choose to continue the trip at a later point in time if that is better for you.",
      },
      {
        title: "Own replacement transport",
        text: "If the operator does not inform you about an alternative within 100 minutes after scheduled departure, you may under certain conditions organize replacement transport yourself and reclaim the necessary cost.",
      },
    ] as const,

    compensationTitle: "When delay compensation is paid",
    compensationLead:
      "If you continue the trip despite the disruption, flat delay compensation may apply in addition. The key factor is the actual delay at destination.",
    compensationRows: [
      ["60 to 119 minutes", "25 % of the fare"],
      ["120+ minutes", "50 % of the fare"],
    ] as const,
    compensationNote:
      "For return trips booked on one contract, compensation for the affected direction is often calculated on the basis of half of the fare.",

    seasonTitle: "Season tickets, Deutschlandticket and BahnCard 100",
    seasonLead:
      "Season-ticket holders also have compensation rights. Instead of percentage-based reimbursement, fixed lump sums usually apply. Amounts below 4 euros are not paid due to the statutory de minimis threshold.",
    seasonHeaders: ["Season ticket", "1st class", "2nd class"],
    seasonRows: [
      ["Long-distance", "7.50 EUR", "5.00 EUR"],
      ["Local transport / Deutschlandticket", "2.25 EUR", "1.50 EUR"],
      ["BahnCard 100", "15.00 EUR", "10.00 EUR"],
    ] as const,
    seasonNote:
      "Repeated delays can be collected and submitted together. In local transport, several incidents are therefore often needed before the de minimis threshold is exceeded.",

    helpTitle: "When meals, hotel, and replacement transport apply",
    helpCards: [
      {
        title: "Meals and drinks",
        text: "From a 60-minute delay onward, the operator must, where feasible, offer meals and refreshments in proportion to the waiting time.",
      },
      {
        title: "Hotel and transfer",
        text: "If continuation is only possible the next day, the operator generally has to provide accommodation and transfer.",
      },
      {
        title: "Night rule",
        text: "Between 00:00 and 05:00, or when the last train of the day is cancelled, you may under certain conditions use bus or taxi. Reimbursement is usually capped at 120 EUR.",
      },
      {
        title: "Train stranded en route",
        text: "If your train is stuck on the line, the operator must get you to the next station by another means.",
      },
    ] as const,

    exceptionsTitle: "When the railway may not have to pay",
    exceptionsLead:
      "The operator may rely on exclusions in certain cases. This only works where the event was unavoidable despite all due care.",
    exceptionsGroups: [
      {
        title: "Possible exclusion reasons",
        items: [
          "extraordinary circumstances such as extreme weather",
          "third-party conduct, for example blocked tracks",
          "fault of the passenger",
        ],
      },
      {
        title: "Important limit",
        items: [
          "A strike by the operator's own staff does not count as an extraordinary circumstance.",
          "In that case, the operator generally still has to compensate.",
        ],
      },
    ] as const,

    extraTitle: "Special points on replacement transport",
    extraItems: [
      "If you receive no alternative within 100 minutes, you may under certain conditions obtain your own replacement connection by train or bus.",
      "In local transport, if at least 20 minutes delay at destination is expected, you may under certain conditions use a higher-value train. This does not apply to some heavily discounted season tickets such as the Deutschlandticket.",
      "If you abandon the trip and obtain a full fare refund, additional delay compensation will usually no longer apply on top.",
    ] as const,
  },
} as const;

export default async function RailRightsOverviewPage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("site_lang")?.value === "de" ? "de" : "en";
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
          <Link
            href="/cases/new?relation=B2C&sub=rail_rights"
            className="mt-5 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: "var(--brand-strong)" }}
          >
            {t.ctaButton}
          </Link>

          <div className="mt-6 rounded-2xl border p-4" style={{ borderColor: "var(--border)" }}>
            <h2 className="text-sm font-semibold">{t.quickTitle}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.quickLinks.map(([id, label]) => (
                <a key={id} href={`#${id}`} className="pill transition-opacity hover:opacity-90">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div
            className="mt-6 rounded-2xl border p-4 text-xs"
            style={{ borderColor: "var(--border)", color: "var(--muted)", background: "color-mix(in oklab, var(--surface-strong) 92%, #eef2f5)" }}
          >
            {t.note}
          </div>
        </section>

        <section id="sofort" className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.immediateTitle}</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {t.immediateSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[24px] border p-4 sm:p-5"
                style={{
                  borderColor: "var(--border)",
                  background: "linear-gradient(180deg, color-mix(in oklab, var(--surface-strong) 94%, #edf3f8) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-base font-semibold tracking-tight">{step.title}</div>
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                    style={{ background: "#dbe6f1", color: "#314e69" }}
                  >
                    {index + 1}
                  </div>
                </div>
                <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="rechte" className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.rightsTitle}</h2>
          <p className="mt-3 max-w-4xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.rightsLead}
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {t.rightsCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[24px] border p-4 sm:p-5"
                style={{
                  borderColor: "var(--border)",
                  background: "linear-gradient(180deg, color-mix(in oklab, #e8eef5 76%, white) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)",
                }}
              >
                <div className="text-base font-semibold tracking-tight">{card.title}</div>
                <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="entschaedigung" className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.compensationTitle}</h2>
          <p className="mt-3 max-w-4xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.compensationLead}
          </p>
          <div
            className="mt-5 rounded-[28px] border"
            style={{
              borderColor: "var(--border)",
              background: "linear-gradient(180deg, color-mix(in oklab, #edf2f7 76%, white) 0%, color-mix(in oklab, var(--surface) 98%, white) 100%)",
            }}
          >
            <div className="grid gap-0 border-b text-sm font-semibold md:grid-cols-2" style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.46)" }}>
              <div className="px-4 py-3 sm:px-5">{lang === "de" ? "Verspätung am Zielort" : "Delay at destination"}</div>
              <div className="px-4 py-3 sm:px-5">{lang === "de" ? "Entschädigung" : "Compensation"}</div>
            </div>
            {t.compensationRows.map((row) => (
              <div key={row[0]} className="grid gap-3 border-t px-4 py-4 md:grid-cols-2 md:items-center sm:px-5" style={{ borderColor: "var(--border)" }}>
                <div style={{ color: "var(--muted)" }}>{row[0]}</div>
                <div>
                  <span className="inline-flex rounded-full px-3 py-1 text-sm font-semibold" style={{ background: "#e6edf5", color: "#314e69" }}>
                    {row[1]}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div
            className="mt-4 rounded-2xl border px-4 py-3 text-sm sm:text-base"
            style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.52)", color: "var(--muted)" }}
          >
            {t.compensationNote}
          </div>
        </section>

        <section id="zeitkarten" className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.seasonTitle}</h2>
          <p className="mt-3 max-w-4xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.seasonLead}
          </p>
          <div
            className="mt-5 rounded-[28px] border"
            style={{
              borderColor: "var(--border)",
              background: "linear-gradient(180deg, color-mix(in oklab, #edf2f7 76%, white) 0%, color-mix(in oklab, var(--surface) 98%, white) 100%)",
            }}
          >
            <div className="grid gap-0 border-b text-sm font-semibold md:grid-cols-3" style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.46)" }}>
              {t.seasonHeaders.map((header) => (
                <div key={header} className="px-4 py-3 sm:px-5">
                  {header}
                </div>
              ))}
            </div>
            {t.seasonRows.map((row) => (
              <div key={row[0]} className="grid gap-3 border-t px-4 py-4 md:grid-cols-3 md:items-center sm:px-5" style={{ borderColor: "var(--border)" }}>
                <div style={{ color: "var(--muted)" }}>{row[0]}</div>
                <div>
                  <span className="inline-flex rounded-full px-3 py-1 text-sm font-semibold" style={{ background: "#e6edf5", color: "#314e69" }}>
                    {row[1]}
                  </span>
                </div>
                <div>
                  <span className="inline-flex rounded-full px-3 py-1 text-sm font-semibold" style={{ background: "#e6edf5", color: "#314e69" }}>
                    {row[2]}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div
            className="mt-4 rounded-2xl border px-4 py-3 text-sm sm:text-base"
            style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.52)", color: "var(--muted)" }}
          >
            {t.seasonNote}
          </div>
        </section>

        <section id="hilfe" className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.helpTitle}</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {t.helpCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[24px] border p-4 sm:p-5"
                style={{
                  borderColor: "var(--border)",
                  background: "linear-gradient(180deg, color-mix(in oklab, var(--surface-strong) 94%, #edf3f8) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)",
                }}
              >
                <div className="text-base font-semibold tracking-tight">{card.title}</div>
                <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="ausnahmen" className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.exceptionsTitle}</h2>
          <p className="mt-3 max-w-4xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.exceptionsLead}
          </p>
          <div className="mt-5 grid gap-4 xl:grid-cols-2">
            {t.exceptionsGroups.map((group, index) => (
              <article
                key={group.title}
                className="rounded-[28px] border p-5 sm:p-6"
                style={{
                  borderColor: "var(--border)",
                  background:
                    index === 0
                      ? "linear-gradient(180deg, color-mix(in oklab, #f7ece8 78%, white) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)"
                      : "linear-gradient(180deg, color-mix(in oklab, #edf7ef 74%, white) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)",
                }}
              >
                <div className="text-lg font-semibold tracking-tight">{group.title}</div>
                <ul className="mt-4 space-y-2 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: index === 0 ? "#9a452f" : "#256344" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.extraTitle}</h2>
          <div className="mt-4 space-y-3">
            {t.extraItems.map((item) => (
              <article
                key={item}
                className="rounded-[22px] border px-4 py-4"
                style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}
              >
                <p className="text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                  {item}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/cases/new?relation=B2C&sub=rail_rights"
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
