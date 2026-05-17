import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for the use of Ravion.",
};

type Lang = "de" | "en";

type Section = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

const copy: Record<
  Lang,
  {
    title: string;
    intro: string;
    lastUpdated: string;
    sections: Section[];
    noticeTitle: string;
    noticeText: string;
    legalNotice: string;
  }
> = {
  en: {
    title: "Terms and Conditions",
    intro:
      "These Terms and Conditions govern the use of Ravion's digital platform for the structured resolution of passenger compensation disputes.",
    lastUpdated: "Last updated: 18 May 2026",
    noticeTitle: "Important legal note",
    noticeText:
      "Ravion provides a technology-driven resolution platform. Ravion is not a law firm, does not provide legal advice, and does not issue binding legal decisions.",
    legalNotice: "Legal Notice",
    sections: [
      {
        title: "1. Provider and scope",
        paragraphs: [
          "These Terms apply to the use of the Ravion website, digital case submission flows, communication tools, and related platform services.",
          "The provider is the entity identified in the Legal Notice. Additional or deviating written agreements may apply to airline partners or other business customers.",
        ],
      },
      {
        title: "2. Ravion's role",
        paragraphs: [
          "Ravion acts as an independent pre-litigation resolution platform between passengers and airlines.",
          "Ravion may structure submitted information, assess case factors, estimate settlement ranges, and transmit settlement proposals between the parties.",
          "Ravion does not represent either party in court, does not enforce claims, and does not guarantee any settlement or payment outcome.",
        ],
      },
      {
        title: "3. Eligibility and account use",
        paragraphs: [
          "Users must provide accurate and complete information when submitting a case or communicating through the platform.",
          "Users are responsible for keeping access links, case tokens, and login credentials confidential. Ravion may restrict access if misuse, false information, or security risks are suspected.",
        ],
      },
      {
        title: "4. Case submission and documents",
        paragraphs: [
          "Passengers may submit information and documents relating to a compensation claim. This may include flight information, correspondence, booking documents, receipts, and other evidence.",
          "Users confirm that they are entitled to provide the submitted information and that uploaded documents do not knowingly contain false, misleading, or unlawful content.",
          "Ravion may request additional information if the submitted material is incomplete or unclear.",
        ],
      },
      {
        title: "5. Settlement proposals",
        paragraphs: [
          "Settlement proposals generated or communicated through Ravion are non-binding unless and until the relevant parties expressly accept a settlement.",
          "Airlines remain free to accept, reject, negotiate, or continue handling a case through their existing claims process.",
          "Passengers remain free to accept or reject proposed settlement amounts. Unless separately agreed, submitting a case through Ravion does not prevent passengers from ending the Ravion process.",
        ],
      },
      {
        title: "6. Fees",
        paragraphs: [
          "Ravion is free of charge for passengers unless expressly stated otherwise before use of a paid service.",
          "For airlines, Ravion does not charge for assessing cases, creating settlement proposals, or forwarding proposals for review.",
          "Unless a separate agreement provides otherwise, the Ravion service fee for airlines is 10% of the concluded settlement amount, subject to a minimum fee of EUR 39. The fee is charged only if a settlement is accepted and concluded.",
        ],
      },
      {
        title: "7. No legal advice",
        paragraphs: [
          "Information, probability estimates, settlement ranges, and process guidance provided through Ravion are intended to support an out-of-court resolution process.",
          "They do not constitute legal advice and do not replace an individual legal assessment by a qualified lawyer.",
        ],
      },
      {
        title: "8. User obligations",
        paragraphs: [
          "Users must not use the platform for unlawful purposes, submit knowingly false claims, upload harmful files, interfere with platform security, or attempt to access data that does not belong to them.",
          "Users must inform Ravion if a submitted case has already been settled, assigned, litigated, or otherwise materially changed.",
        ],
      },
      {
        title: "9. Availability and changes",
        paragraphs: [
          "Ravion aims to provide reliable access to the platform but does not guarantee uninterrupted availability.",
          "Ravion may update, improve, suspend, or discontinue individual features where this is necessary for security, technical, legal, or operational reasons.",
        ],
      },
      {
        title: "10. Liability",
        paragraphs: [
          "Ravion is liable without limitation for intent, gross negligence, injury to life, body, or health, and where mandatory statutory liability applies.",
          "In cases of simple negligence, Ravion is liable only for breach of essential contractual obligations and only for typical, foreseeable damage.",
          "Ravion is not liable for decisions made independently by passengers, airlines, courts, public bodies, or third-party claims providers.",
        ],
      },
      {
        title: "11. Data protection",
        paragraphs: [
          "Ravion processes personal data in accordance with applicable data protection law. Details are set out in the Privacy Policy.",
        ],
      },
      {
        title: "12. Termination and process exit",
        paragraphs: [
          "Users may stop using Ravion at any time. Pending cases can be discontinued unless a binding settlement or separate agreement already exists.",
          "Ravion may close or restrict a case if required information is missing, the case appears abusive, or continued processing is legally or operationally unreasonable.",
        ],
      },
      {
        title: "13. Governing law and jurisdiction",
        paragraphs: [
          "German law applies, without prejudice to mandatory consumer protection provisions that may apply in the user's country of residence.",
          "Where legally permissible, the place of jurisdiction is the provider's registered office.",
        ],
      },
      {
        title: "14. Final provisions",
        paragraphs: [
          "If individual provisions of these Terms are invalid, the remaining provisions remain effective.",
          "Ravion may update these Terms from time to time. The version available at the time of use applies unless mandatory law requires otherwise.",
        ],
      },
    ],
  },
  de: {
    title: "Allgemeine Geschäftsbedingungen",
    intro:
      "Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der digitalen Ravion-Plattform zur strukturierten außergerichtlichen Lösung von Fluggastentschädigungsstreitigkeiten.",
    lastUpdated: "Stand: 18. Mai 2026",
    noticeTitle: "Wichtiger rechtlicher Hinweis",
    noticeText:
      "Ravion stellt eine technologiegestützte Plattform zur Konfliktlösung bereit. Ravion ist keine Rechtsanwaltskanzlei, erbringt keine Rechtsberatung und trifft keine verbindlichen rechtlichen Entscheidungen.",
    legalNotice: "Impressum",
    sections: [
      {
        title: "1. Anbieter und Geltungsbereich",
        paragraphs: [
          "Diese AGB gelten für die Nutzung der Ravion-Website, der digitalen Falleinreichung, der Kommunikationsfunktionen und der damit verbundenen Plattformdienste.",
          "Anbieter ist die im Impressum bezeichnete Stelle. Für Airline-Partner oder sonstige Geschäftskunden können zusätzliche oder abweichende schriftliche Vereinbarungen gelten.",
        ],
      },
      {
        title: "2. Rolle von Ravion",
        paragraphs: [
          "Ravion handelt als unabhängige außergerichtliche Vorstufe zur Streitbeilegung zwischen Passagieren und Airlines.",
          "Ravion kann eingereichte Informationen strukturieren, Fallfaktoren bewerten, Vergleichskorridore einschätzen und Vergleichsvorschläge zwischen den Parteien übermitteln.",
          "Ravion vertritt keine Partei vor Gericht, setzt keine Ansprüche gerichtlich durch und garantiert weder einen Vergleich noch eine Zahlung.",
        ],
      },
      {
        title: "3. Nutzungsberechtigung und Zugang",
        paragraphs: [
          "Nutzer müssen bei der Falleinreichung und Kommunikation über die Plattform zutreffende und vollständige Angaben machen.",
          "Nutzer sind dafür verantwortlich, Zugangslinks, Fall-Token und Zugangsdaten vertraulich zu behandeln. Ravion kann den Zugang beschränken, wenn Missbrauch, falsche Angaben oder Sicherheitsrisiken vermutet werden.",
        ],
      },
      {
        title: "4. Falleinreichung und Unterlagen",
        paragraphs: [
          "Passagiere können Informationen und Unterlagen zu einem Entschädigungsanspruch einreichen. Dazu können insbesondere Flugdaten, Korrespondenz, Buchungsunterlagen, Belege und sonstige Nachweise gehören.",
          "Nutzer bestätigen, dass sie zur Übermittlung der eingereichten Informationen berechtigt sind und dass hochgeladene Unterlagen nicht wissentlich falsche, irreführende oder rechtswidrige Inhalte enthalten.",
          "Ravion kann zusätzliche Informationen anfordern, wenn die eingereichten Unterlagen unvollständig oder unklar sind.",
        ],
      },
      {
        title: "5. Vergleichsvorschläge",
        paragraphs: [
          "Über Ravion erstellte oder übermittelte Vergleichsvorschläge sind unverbindlich, solange nicht die jeweils relevanten Parteien einem Vergleich ausdrücklich zustimmen.",
          "Airlines bleiben frei, Vorschläge anzunehmen, abzulehnen, weiterzuverhandeln oder einen Fall über ihr bestehendes Anspruchsverfahren fortzuführen.",
          "Passagiere bleiben frei, vorgeschlagene Vergleichsbeträge anzunehmen oder abzulehnen. Soweit nichts Abweichendes vereinbart ist, hindert die Einreichung eines Falls über Ravion Passagiere nicht daran, den Ravion-Prozess zu beenden.",
        ],
      },
      {
        title: "6. Gebühren",
        paragraphs: [
          "Für Passagiere ist die Nutzung von Ravion kostenfrei, sofern vor Nutzung eines kostenpflichtigen Dienstes nicht ausdrücklich etwas anderes angegeben wird.",
          "Für Airlines erhebt Ravion keine Gebühr für die Bewertung von Fällen, die Erstellung von Vergleichsvorschlägen oder die Weiterleitung von Vorschlägen zur Prüfung.",
          "Soweit keine abweichende Vereinbarung besteht, beträgt die Ravion-Servicegebühr für Airlines 10 % des abgeschlossenen Vergleichsbetrags, mindestens jedoch EUR 39. Die Gebühr fällt nur an, wenn ein Vergleich angenommen und abgeschlossen wird.",
        ],
      },
      {
        title: "7. Keine Rechtsberatung",
        paragraphs: [
          "Informationen, Wahrscheinlichkeitseinschätzungen, Vergleichskorridore und Prozesshinweise von Ravion dienen der Unterstützung einer außergerichtlichen Konfliktlösung.",
          "Sie stellen keine Rechtsberatung dar und ersetzen keine individuelle rechtliche Prüfung durch eine qualifizierte Rechtsanwältin oder einen qualifizierten Rechtsanwalt.",
        ],
      },
      {
        title: "8. Pflichten der Nutzer",
        paragraphs: [
          "Nutzer dürfen die Plattform nicht für rechtswidrige Zwecke verwenden, keine wissentlich falschen Ansprüche einreichen, keine schädlichen Dateien hochladen, die Plattformsicherheit nicht beeinträchtigen und nicht versuchen, auf fremde Daten zuzugreifen.",
          "Nutzer müssen Ravion informieren, wenn ein eingereichter Fall bereits erledigt, abgetreten, gerichtlich anhängig oder anderweitig wesentlich verändert ist.",
        ],
      },
      {
        title: "9. Verfügbarkeit und Änderungen",
        paragraphs: [
          "Ravion bemüht sich um eine zuverlässige Verfügbarkeit der Plattform, garantiert jedoch keine ununterbrochene Erreichbarkeit.",
          "Ravion kann einzelne Funktionen aktualisieren, verbessern, aussetzen oder einstellen, soweit dies aus Sicherheits-, technischen, rechtlichen oder betrieblichen Gründen erforderlich ist.",
        ],
      },
      {
        title: "10. Haftung",
        paragraphs: [
          "Ravion haftet unbeschränkt bei Vorsatz, grober Fahrlässigkeit, Verletzung von Leben, Körper oder Gesundheit sowie in Fällen zwingender gesetzlicher Haftung.",
          "Bei einfacher Fahrlässigkeit haftet Ravion nur bei Verletzung wesentlicher Vertragspflichten und nur für den typischen, vorhersehbaren Schaden.",
          "Ravion haftet nicht für eigenständige Entscheidungen von Passagieren, Airlines, Gerichten, Behörden oder Drittanbietern.",
        ],
      },
      {
        title: "11. Datenschutz",
        paragraphs: [
          "Ravion verarbeitet personenbezogene Daten nach Maßgabe des anwendbaren Datenschutzrechts. Einzelheiten ergeben sich aus der Datenschutzerklärung.",
        ],
      },
      {
        title: "12. Beendigung und Ausstieg aus dem Prozess",
        paragraphs: [
          "Nutzer können die Nutzung von Ravion jederzeit beenden. Laufende Fälle können beendet werden, sofern noch kein verbindlicher Vergleich oder keine abweichende Vereinbarung besteht.",
          "Ravion kann einen Fall schließen oder beschränken, wenn erforderliche Informationen fehlen, der Fall missbräuchlich erscheint oder eine weitere Bearbeitung rechtlich oder betrieblich unzumutbar ist.",
        ],
      },
      {
        title: "13. Anwendbares Recht und Gerichtsstand",
        paragraphs: [
          "Es gilt deutsches Recht, unbeschadet zwingender Verbraucherschutzvorschriften, die im Wohnsitzstaat des Nutzers Anwendung finden können.",
          "Soweit gesetzlich zulässig, ist Gerichtsstand der Sitz des Anbieters.",
        ],
      },
      {
        title: "14. Schlussbestimmungen",
        paragraphs: [
          "Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
          "Ravion kann diese AGB von Zeit zu Zeit aktualisieren. Es gilt die zum Zeitpunkt der Nutzung verfügbare Fassung, soweit zwingendes Recht nichts anderes vorgibt.",
        ],
      },
    ],
  },
};

export default async function TermsPage() {
  const cookieStore = await cookies();
  const lang: Lang = cookieStore.get("site_lang")?.value === "de" ? "de" : "en";
  const t = copy[lang];

  return (
    <main className="px-4 pb-12 pt-7 sm:px-6 sm:pb-14 sm:pt-9 lg:pb-16 lg:pt-10">
      <div className="app-wrap">
        <section className="surface-card p-6 sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
              Ravion
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">{t.title}</h1>
            <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
              {t.intro}
            </p>
            <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
              {t.lastUpdated}
            </p>
          </div>

          <div className="mt-8 rounded-xl border p-4" style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}>
            <h2 className="text-base font-semibold">{t.noticeTitle}</h2>
            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
              {t.noticeText}
            </p>
          </div>

          <div className="mt-8 grid gap-5">
            {t.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-xl border p-5"
                style={{ borderColor: "var(--border)", background: "color-mix(in oklab, var(--surface) 94%, #f6f9fc)" }}
              >
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <div className="mt-3 space-y-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-sm">
            <Link href="/impressum" className="brand-link">
              {t.legalNotice}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
