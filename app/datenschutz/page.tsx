import type { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Information on the processing of personal data by Ravion.",
};

export default async function PrivacyPage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("site_lang")?.value === "de" ? "de" : "en";

  return (
    <main className="px-4 pb-12 pt-7 sm:px-6 sm:pb-14 sm:pt-9 lg:pb-16 lg:pt-10">
      <div className="app-wrap">
        <section className="surface-card p-6 sm:p-10 lg:p-12">
          {lang === "en" ? <EnglishPrivacy /> : <GermanPrivacy />}
        </section>
      </div>
    </main>
  );
}

function GermanPrivacy() {
  return (
    <div className="max-w-4xl text-sm leading-6">
      <h1 className="text-3xl font-semibold tracking-tight">Datenschutzerklärung</h1>
      <p className="mt-4" style={{ color: "var(--muted)" }}>
        Stand: 18. Mai 2026
      </p>
      <p className="mt-4" style={{ color: "var(--muted)" }}>
        Mit dieser Datenschutzerklärung informieren wir darüber, wie Ravion personenbezogene Daten im
        Zusammenhang mit der Website, der digitalen Falleinreichung, der Fallbearbeitung und der
        Kommunikation verarbeitet.
      </p>

      <PrivacyBlock title="1. Verantwortlicher">
        <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
        <p>
          Ravion UG
          <br />
          Sieben-Schwaben-Weg 4
          <br />
          50997 Köln
          <br />
          Deutschland
        </p>
        <p>E-Mail: service@ravion.me</p>
      </PrivacyBlock>

      <PrivacyBlock title="2. Zwecke der Verarbeitung">
        <p>Wir verarbeiten personenbezogene Daten insbesondere zu folgenden Zwecken:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Bereitstellung und Sicherheit der Website,</li>
          <li>Bearbeitung von Anfragen per E-Mail,</li>
          <li>Einreichung, Prüfung und Verwaltung von Fällen,</li>
          <li>Erstellung und Übermittlung von Vergleichsvorschlägen,</li>
          <li>Kommunikation mit Nutzern und gegebenenfalls mit beteiligten Airlines,</li>
          <li>Versand von fallbezogenen E-Mails und Zugangslinks,</li>
          <li>Erfüllung gesetzlicher Pflichten und Wahrung berechtigter Interessen.</li>
        </ul>
      </PrivacyBlock>

      <PrivacyBlock title="3. Daten beim Besuch der Website">
        <p>
          Beim Aufruf der Website werden technisch erforderliche Zugriffsdaten verarbeitet. Dazu können
          insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, Referrer-URL,
          Browsertyp, Betriebssystem, übertragene Datenmenge und Server-Statuscodes gehören.
        </p>
        <p>
          Diese Verarbeitung dient der Auslieferung der Website, der technischen Stabilität, der
          Fehleranalyse und der Sicherheit. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser
          berechtigtes Interesse liegt im sicheren und funktionsfähigen Betrieb der Website.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="4. Cookies und Spracheinstellung">
        <p>
          Ravion verwendet derzeit ein technisch einfaches Cookie mit dem Namen site_lang, um die von Ihnen
          gewählte Sprache zu speichern. Dieses Cookie ist für die von Ihnen gewünschte Sprachfunktion
          erforderlich und wird nicht zu Werbe- oder Trackingzwecken genutzt.
        </p>
        <p>
          Bei der Nutzung von administrativen Funktionen oder Login-Bereichen können zusätzlich technisch
          erforderliche Authentifizierungs- oder Sitzungsdaten verarbeitet werden. Rechtsgrundlage ist Art.
          6 Abs. 1 lit. f DSGVO sowie, soweit die Funktion zur Vertrags- oder Fallbearbeitung erforderlich
          ist, Art. 6 Abs. 1 lit. b DSGVO.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="5. Kontaktaufnahme">
        <p>
          Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten,
          insbesondere Name, E-Mail-Adresse, Inhalt der Nachricht, Zeitpunkt der Kontaktaufnahme und
          technische Kommunikationsdaten.
        </p>
        <p>
          Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
          DSGVO, soweit die Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt, und
          im Übrigen Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="6. Falleinreichung und Fallbearbeitung">
        <p>
          Wenn Sie über Ravion einen Fall einreichen, verarbeiten wir die Angaben, die für die Prüfung und
          Bearbeitung des Falls erforderlich sind. Dazu können insbesondere gehören:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Kontaktdaten, insbesondere E-Mail-Adresse,</li>
          <li>Angaben zum Flug, zur Buchung, zur Störung und zum geltend gemachten Betrag,</li>
          <li>Kommunikation mit der Airline oder sonstigen Beteiligten,</li>
          <li>hochgeladene Unterlagen wie Buchungsbestätigungen, Belege, Schreiben oder Screenshots,</li>
          <li>Statusdaten, Fallnummern, Zugangslinks und Bearbeitungsvermerke,</li>
          <li>Bewertungen, Einschätzungen und Vergleichsvorschläge.</li>
        </ul>
        <p>
          Die Verarbeitung erfolgt zur Durchführung des Ravion-Prozesses, zur Fallprüfung, zur Erstellung
          und Übermittlung von Vergleichsvorschlägen sowie zur Kommunikation über den Fall. Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. b DSGVO. Soweit Daten zur Abwehr von Missbrauch, zur Dokumentation oder
          zur Wahrung rechtlicher Interessen erforderlich sind, erfolgt die Verarbeitung zusätzlich auf
          Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="7. Empfänger personenbezogener Daten">
        <p>
          Personenbezogene Daten werden nur weitergegeben, wenn dies für die genannten Zwecke erforderlich
          ist, eine gesetzliche Pflicht besteht oder Sie eingewilligt haben. Empfänger können insbesondere
          sein:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>beteiligte Airlines oder sonstige Anspruchsgegner, soweit dies zur Prüfung eines Vergleichs erforderlich ist,</li>
          <li>IT- und Hostingdienstleister,</li>
          <li>E-Mail-Dienstleister,</li>
          <li>Datenbank- und Speicherdienstleister,</li>
          <li>Steuerberater, Behörden oder sonstige Stellen, soweit eine gesetzliche Pflicht besteht.</li>
        </ul>
      </PrivacyBlock>

      <PrivacyBlock title="8. Eingesetzte Dienstleister">
        <p>
          Für Datenbank-, Authentifizierungs- und Speicherfunktionen nutzt Ravion Supabase. Dabei können
          Falldaten, Nutzungsdaten, Zugriffsberechtigungen und hochgeladene Dateien verarbeitet werden.
        </p>
        <p>
          Für den Versand fallbezogener E-Mails nutzt Ravion Resend. Dabei werden insbesondere
          E-Mail-Adresse, Betreff, Inhalt der E-Mail und technische Versanddaten verarbeitet.
        </p>
        <p>
          Mit Dienstleistern, die personenbezogene Daten in unserem Auftrag verarbeiten, schließen wir
          Verträge zur Auftragsverarbeitung, soweit dies gesetzlich erforderlich ist. Soweit Daten außerhalb
          der Europäischen Union oder des Europäischen Wirtschaftsraums verarbeitet werden, erfolgt dies nur
          auf Grundlage geeigneter Garantien im Sinne der DSGVO, insbesondere Angemessenheitsbeschlüssen,
          dem EU-US Data Privacy Framework oder Standardvertragsklauseln.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="9. Keine Werbe-Analyse und kein Tracking zu Marketingzwecken">
        <p>
          Ravion setzt derzeit keine Google Analytics-, Google Ads- oder vergleichbaren
          Marketing-Tracking-Dienste auf der Website ein. Die von Next.js eingebundenen Schriftarten werden
          im Rahmen der Anwendung bereitgestellt; beim Seitenaufruf ist hierfür keine direkte Verbindung
          Ihres Browsers zu Google Fonts erforderlich.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="10. Automatisierte Verarbeitung">
        <p>
          Ravion kann Fallinformationen strukturiert auswerten, um Einschätzungen und
          Vergleichsvorschläge vorzubereiten. Eine ausschließlich automatisierte Entscheidung mit
          rechtlicher Wirkung im Sinne von Art. 22 DSGVO findet nicht statt. Vergleichsvorschläge sind
          nicht bindend und können von den beteiligten Parteien geprüft, angenommen, abgelehnt oder weiter
          verhandelt werden.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="11. Speicherdauer">
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich
          ist. Falldaten werden für die Dauer der Bearbeitung und anschließend für angemessene
          Dokumentations-, Nachweis- und Verjährungsfristen gespeichert. Gesetzliche Aufbewahrungspflichten,
          insbesondere handels- und steuerrechtliche Pflichten, bleiben unberührt.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="12. Ihre Rechte">
        <p>Sie haben nach Maßgabe der DSGVO insbesondere folgende Rechte:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Recht auf Auskunft nach Art. 15 DSGVO,</li>
          <li>Recht auf Berichtigung nach Art. 16 DSGVO,</li>
          <li>Recht auf Löschung nach Art. 17 DSGVO,</li>
          <li>Recht auf Einschränkung der Verarbeitung nach Art. 18 DSGVO,</li>
          <li>Recht auf Datenübertragbarkeit nach Art. 20 DSGVO,</li>
          <li>Recht auf Widerspruch nach Art. 21 DSGVO,</li>
          <li>Recht auf Widerruf einer Einwilligung mit Wirkung für die Zukunft.</li>
        </ul>
        <p>Zur Ausübung Ihrer Rechte können Sie uns unter service@ravion.me kontaktieren.</p>
      </PrivacyBlock>

      <PrivacyBlock title="13. Beschwerderecht bei einer Aufsichtsbehörde">
        <p>
          Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig für
          Nordrhein-Westfalen ist die Landesbeauftragte für Datenschutz und Informationsfreiheit
          Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2-4, 40213 Düsseldorf, Deutschland.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="14. Sicherheit">
        <p>
          Wir treffen technische und organisatorische Maßnahmen, um personenbezogene Daten gegen Verlust,
          Missbrauch, unbefugten Zugriff, Veränderung oder Offenlegung zu schützen. Eine absolute Sicherheit
          kann bei internetbasierter Datenübertragung jedoch nicht garantiert werden.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="15. Änderungen dieser Datenschutzerklärung">
        <p>
          Wir können diese Datenschutzerklärung anpassen, wenn sich technische, rechtliche oder
          organisatorische Änderungen ergeben. Die jeweils aktuelle Fassung ist auf dieser Seite abrufbar.
        </p>
      </PrivacyBlock>
    </div>
  );
}

function EnglishPrivacy() {
  return (
    <div className="max-w-4xl text-sm leading-6">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-4" style={{ color: "var(--muted)" }}>
        Last updated: 18 May 2026
      </p>
      <p className="mt-4" style={{ color: "var(--muted)" }}>
        This Privacy Policy explains how Ravion processes personal data in connection with the website,
        digital case submission, case handling, and communication.
      </p>

      <PrivacyBlock title="1. Controller">
        <p>The controller within the meaning of the General Data Protection Regulation (GDPR) is:</p>
        <p>
          Ravion UG
          <br />
          Sieben-Schwaben-Weg 4
          <br />
          50997 Cologne
          <br />
          Germany
        </p>
        <p>Email: service@ravion.me</p>
      </PrivacyBlock>

      <PrivacyBlock title="2. Purposes of processing">
        <p>We process personal data in particular for the following purposes:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>providing and securing the website,</li>
          <li>responding to email requests,</li>
          <li>submitting, reviewing, and managing cases,</li>
          <li>creating and transmitting settlement proposals,</li>
          <li>communicating with users and, where applicable, involved airlines,</li>
          <li>sending case-related emails and access links,</li>
          <li>complying with legal obligations and protecting legitimate interests.</li>
        </ul>
      </PrivacyBlock>

      <PrivacyBlock title="3. Data processed when visiting the website">
        <p>
          When you access the website, technically required access data may be processed. This may include
          IP address, date and time of access, pages accessed, referrer URL, browser type, operating
          system, amount of data transferred, and server status codes.
        </p>
        <p>
          This processing serves website delivery, technical stability, error analysis, and security. The
          legal basis is Art. 6(1)(f) GDPR. Our legitimate interest is the secure and functional operation
          of the website.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="4. Cookies and language setting">
        <p>
          Ravion currently uses a simple technical cookie named site_lang to store the language selected by
          the user. This cookie is required for the requested language function and is not used for
          advertising or tracking.
        </p>
        <p>
          When using administrative functions or login areas, additional technically required authentication
          or session data may be processed. The legal basis is Art. 6(1)(f) GDPR and, where the function is
          required for contract or case handling, Art. 6(1)(b) GDPR.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="5. Contact">
        <p>
          If you contact us by email, we process the data you provide, in particular name, email address,
          message content, time of contact, and technical communication data.
        </p>
        <p>
          The processing is carried out to handle your request. The legal basis is Art. 6(1)(b) GDPR where
          the request relates to a contract or pre-contractual steps, and otherwise Art. 6(1)(f) GDPR.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="6. Case submission and case handling">
        <p>
          If you submit a case through Ravion, we process the information required to review and handle the
          case. This may include:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>contact data, especially email address,</li>
          <li>information about the flight, booking, disruption, and claimed amount,</li>
          <li>communication with the airline or other involved parties,</li>
          <li>uploaded documents such as booking confirmations, receipts, letters, or screenshots,</li>
          <li>status data, case numbers, access links, and processing notes,</li>
          <li>assessments, estimates, and settlement proposals.</li>
        </ul>
        <p>
          The processing is carried out to operate the Ravion process, review cases, create and transmit
          settlement proposals, and communicate about the case. The legal basis is Art. 6(1)(b) GDPR. Where
          processing is required to prevent misuse, document actions, or protect legal interests, processing
          is additionally based on Art. 6(1)(f) GDPR.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="7. Recipients of personal data">
        <p>
          Personal data is shared only where necessary for the purposes described, where we are legally
          required to do so, or where you have consented. Recipients may include:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>involved airlines or other opposing parties where this is necessary to review a settlement,</li>
          <li>IT and hosting providers,</li>
          <li>email service providers,</li>
          <li>database and storage providers,</li>
          <li>tax advisers, authorities, or other bodies where legally required.</li>
        </ul>
      </PrivacyBlock>

      <PrivacyBlock title="8. Service providers used">
        <p>
          Ravion uses Supabase for database, authentication, and storage functions. Case data, usage data,
          access permissions, and uploaded files may be processed in this context.
        </p>
        <p>
          Ravion uses Resend to send case-related emails. In this context, email address, subject, email
          content, and technical sending data may be processed.
        </p>
        <p>
          Where service providers process personal data on our behalf, we conclude data processing
          agreements where legally required. If data is processed outside the European Union or European
          Economic Area, this is done only on the basis of appropriate safeguards under the GDPR, in
          particular adequacy decisions, the EU-US Data Privacy Framework, or standard contractual clauses.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="9. No advertising analytics or marketing tracking">
        <p>
          Ravion currently does not use Google Analytics, Google Ads, or comparable marketing tracking
          services on the website. Fonts integrated by Next.js are provided as part of the application; no
          direct browser connection to Google Fonts is required when accessing the page.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="10. Automated processing">
        <p>
          Ravion may structurally evaluate case information to prepare assessments and settlement
          proposals. No solely automated decision with legal effect within the meaning of Art. 22 GDPR takes
          place. Settlement proposals are not binding and may be reviewed, accepted, rejected, or negotiated
          further by the involved parties.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="11. Retention period">
        <p>
          We store personal data only for as long as necessary for the relevant purposes. Case data is
          stored for the duration of processing and thereafter for appropriate documentation, evidence, and
          limitation periods. Statutory retention obligations, in particular commercial and tax law
          obligations, remain unaffected.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="12. Your rights">
        <p>Subject to the GDPR, you have in particular the following rights:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>right of access under Art. 15 GDPR,</li>
          <li>right to rectification under Art. 16 GDPR,</li>
          <li>right to erasure under Art. 17 GDPR,</li>
          <li>right to restriction of processing under Art. 18 GDPR,</li>
          <li>right to data portability under Art. 20 GDPR,</li>
          <li>right to object under Art. 21 GDPR,</li>
          <li>right to withdraw consent with effect for the future.</li>
        </ul>
        <p>You can exercise your rights by contacting us at service@ravion.me.</p>
      </PrivacyBlock>

      <PrivacyBlock title="13. Right to lodge a complaint">
        <p>
          You have the right to lodge a complaint with a data protection supervisory authority. The
          competent authority for North Rhine-Westphalia is the State Commissioner for Data Protection and
          Freedom of Information North Rhine-Westphalia (LDI NRW), Kavalleriestrasse 2-4, 40213
          Düsseldorf, Germany.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="14. Security">
        <p>
          We take technical and organisational measures to protect personal data against loss, misuse,
          unauthorised access, alteration, or disclosure. However, absolute security cannot be guaranteed
          for internet-based data transmission.
        </p>
      </PrivacyBlock>

      <PrivacyBlock title="15. Changes to this Privacy Policy">
        <p>
          We may update this Privacy Policy if technical, legal, or organisational changes occur. The
          current version is available on this page.
        </p>
      </PrivacyBlock>
    </div>
  );
}

function PrivacyBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-3 space-y-3" style={{ color: "var(--muted)" }}>
        {children}
      </div>
    </section>
  );
}
