import type { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Rechtliche Anbieterkennzeichnung von Ravion.",
};

export default async function ImpressumPage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("site_lang")?.value === "de" ? "de" : "en";

  return (
    <main className="px-4 pb-12 pt-7 sm:px-6 sm:pb-14 sm:pt-9 lg:pb-16 lg:pt-10">
      <div className="app-wrap">
        <section className="surface-card p-6 sm:p-10 lg:p-12">
          {lang === "en" ? <EnglishLegalNotice /> : <GermanImpressum />}
        </section>
      </div>
    </main>
  );
}

function GermanImpressum() {
  return (
    <div className="max-w-3xl text-sm leading-6">
      <h1 className="text-3xl font-semibold tracking-tight">Impressum</h1>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <div className="mt-3 space-y-1" style={{ color: "var(--muted)" }}>
          <p>Ravion UG</p>
          <p>Sieben-Schwaben-Weg 4</p>
          <p>50997 K&ouml;ln</p>
          <p>Deutschland</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Vertreten durch</h2>
        <div className="mt-3 space-y-1" style={{ color: "var(--muted)" }}>
          <p>Ruben Hornung</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Kontakt</h2>
        <div className="mt-3 space-y-1" style={{ color: "var(--muted)" }}>
          <p>E-Mail: service@ravion.me</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Registereintrag</h2>
        <div className="mt-3 space-y-1" style={{ color: "var(--muted)" }}>
          <p>Registergericht: Amtsgericht K&ouml;ln</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Verantwortlich f&uuml;r den Inhalt</h2>
        <div className="mt-3 space-y-1" style={{ color: "var(--muted)" }}>
          <p>Ruben Hornung</p>
          <p>Sieben-Schwaben-Weg 4</p>
          <p>50997 K&ouml;ln</p>
          <p>Deutschland</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">EU-Streitschlichtung</h2>
        <p className="mt-3" style={{ color: "var(--muted)" }}>
          Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:
          https://ec.europa.eu/consumers/odr/.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Verbraucherstreitbeilegung</h2>
        <p className="mt-3" style={{ color: "var(--muted)" }}>
          Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Haftung f&uuml;r Inhalte</h2>
        <p className="mt-3" style={{ color: "var(--muted)" }}>
          Als Diensteanbieter sind wir gem&auml;&szlig; den allgemeinen Gesetzen f&uuml;r eigene Inhalte auf diesen
          Seiten verantwortlich. Wir sind jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde
          Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige
          T&auml;tigkeit hinweisen.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Haftung f&uuml;r Links</h2>
        <p className="mt-3" style={{ color: "var(--muted)" }}>
          Unser Angebot kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die
          Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich.
        </p>
      </section>
    </div>
  );
}

function EnglishLegalNotice() {
  return (
    <div className="max-w-3xl text-sm leading-6">
      <h1 className="text-3xl font-semibold tracking-tight">Legal Notice</h1>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Information according to Section 5 TMG</h2>
        <div className="mt-3 space-y-1" style={{ color: "var(--muted)" }}>
          <p>Ravion UG</p>
          <p>Sieben-Schwaben-Weg 4</p>
          <p>50997 Cologne</p>
          <p>Germany</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Represented by</h2>
        <div className="mt-3 space-y-1" style={{ color: "var(--muted)" }}>
          <p>Ruben Hornung</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Contact</h2>
        <div className="mt-3 space-y-1" style={{ color: "var(--muted)" }}>
          <p>Email: service@ravion.me</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Commercial register</h2>
        <div className="mt-3 space-y-1" style={{ color: "var(--muted)" }}>
          <p>Register court: Local Court of Cologne</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Responsible for content</h2>
        <div className="mt-3 space-y-1" style={{ color: "var(--muted)" }}>
          <p>Ruben Hornung</p>
          <p>Sieben-Schwaben-Weg 4</p>
          <p>50997 Cologne</p>
          <p>Germany</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">EU dispute resolution</h2>
        <p className="mt-3" style={{ color: "var(--muted)" }}>
          The European Commission provides a platform for online dispute resolution:
          https://ec.europa.eu/consumers/odr/.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Consumer dispute resolution</h2>
        <p className="mt-3" style={{ color: "var(--muted)" }}>
          We are neither obliged nor willing to participate in dispute resolution proceedings before a
          consumer arbitration board.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Liability for content</h2>
        <p className="mt-3" style={{ color: "var(--muted)" }}>
          As a service provider, we are responsible for our own content on these pages in accordance with
          general laws. However, we are not obliged to monitor transmitted or stored third-party
          information or to investigate circumstances that indicate unlawful activity.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Liability for links</h2>
        <p className="mt-3" style={{ color: "var(--muted)" }}>
          Our website may contain links to external third-party websites over whose content we have no
          influence. We therefore cannot assume any liability for such external content. The respective
          provider or operator of the linked pages is always responsible for their content.
        </p>
      </section>
    </div>
  );
}
