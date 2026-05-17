import type { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Help & Contact",
  description: "Contact information and support for Ravion.",
};

export default async function HelpContactPage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("site_lang")?.value === "de" ? "de" : "en";

  return (
    <main className="px-4 pb-12 pt-7 sm:px-6 sm:pb-14 sm:pt-9 lg:pb-16 lg:pt-10">
      <div className="app-wrap">
        <section className="surface-card p-6 sm:p-10 lg:p-12">
          <h1 className="text-3xl font-semibold tracking-tight">
            {lang === "en" ? "Help & Contact" : "Hilfe & Kontakt"}
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {lang === "en"
              ? "For questions about Ravion, an existing case, or the platform, please contact us by email."
              : "Bei Fragen zu Ravion, einem bestehenden Fall oder zur Plattform erreichst du uns per E-Mail."}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="soft-card p-4">
              <h2 className="text-base font-semibold">{lang === "en" ? "Email" : "E-Mail"}</h2>
              <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                {lang === "en"
                  ? "Use this address for general and case-related support requests."
                  : "Nutze diese Adresse für allgemeine und fallbezogene Support-Anfragen."}
              </p>
              <p className="mt-3 text-sm font-medium">service@ravion.me</p>
            </article>

            <article className="soft-card p-4">
              <h2 className="text-base font-semibold">
                {lang === "en" ? "Case-related requests" : "Fallbezogene Anfragen"}
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
                {lang === "en"
                  ? "If your message concerns an existing case, please include your case reference or the email address used for the case."
                  : "Wenn sich deine Nachricht auf einen bestehenden Fall bezieht, gib bitte deine Fallreferenz oder die für den Fall verwendete E-Mail-Adresse an."}
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
