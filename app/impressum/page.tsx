import type { Metadata } from "next";
import { getSiteLanguage } from "@/lib/siteLanguage";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Rechtliche Anbieterkennzeichnung von Ravion.",
};

export default async function ImpressumPage() {
  const lang = await getSiteLanguage();

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
        <h2 className="text-lg font-semibold">Angaben gem&auml;&szlig; &sect; 5 DDG</h2>
        <div className="mt-3 space-y-1" style={{ color: "var(--muted)" }}>
          <p>Ravion UG (haftungsbeschr&auml;nkt)</p>
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
          <p>Registernummer: HRB 127657</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Umsatzsteuer-ID</h2>
        <div className="mt-3 space-y-1" style={{ color: "var(--muted)" }}>
          <p>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27a UStG: DE461888316</p>
        </div>
      </section>
    </div>
  );
}

function EnglishLegalNotice() {
  return (
    <div className="max-w-3xl text-sm leading-6">
      <h1 className="text-3xl font-semibold tracking-tight">Legal Notice</h1>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Information pursuant to Section 5 DDG</h2>
        <div className="mt-3 space-y-1" style={{ color: "var(--muted)" }}>
          <p>Ravion UG (haftungsbeschr&auml;nkt)</p>
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
          <p>Registration number: HRB 127657</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">VAT ID</h2>
        <div className="mt-3 space-y-1" style={{ color: "var(--muted)" }}>
          <p>VAT identification number pursuant to Section 27a UStG: DE461888316</p>
        </div>
      </section>
    </div>
  );
}
