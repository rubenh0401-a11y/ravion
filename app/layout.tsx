import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import { getSiteLanguage } from "@/lib/siteLanguage";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ravion - Digitale außergerichtliche Streitbeilegung",
    template: "%s | Ravion",
  },
  description: "Ravion hilft dir, Ansprüche digital, transparent und ohne Kostenrisiko für Verbraucher durchzusetzen.",
  openGraph: {
    title: "Ravion - Digitale außergerichtliche Streitbeilegung",
    description: "Ansprüche digital einreichen, bewerten lassen und strukturiert verhandeln.",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravion",
    description: "Digitale außergerichtliche Streitbeilegung.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getSiteLanguage();
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ravion",
    logo: "/ravion-logo.png",
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ravion",
  };

  return (
    <html lang={lang}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <div className="min-h-screen flex flex-col">
          <SiteHeader initialLang={lang} />

          <div className="flex-1">{children}</div>

          <footer className="px-4 pb-6 pt-2 sm:px-6">
            <div className="app-wrap">
              <div
                className="soft-card flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm"
                style={{
                  background:
                    "linear-gradient(180deg, color-mix(in oklab, var(--surface-strong) 95%, #e8edf1) 0%, color-mix(in oklab, var(--surface) 97%, #f0f2f5) 100%)",
                }}
              >
                <div className="flex items-center gap-2" style={{ color: "var(--muted)" }}>
                  <Image src="/ravion-logo.png" alt="Ravion" width={52} height={35} className="h-5 w-auto opacity-85" />
                  <span>© {new Date().getFullYear()} Ravion</span>
                </div>
                <div className="flex items-center gap-4">
                  <Link href="/agb" className="brand-link">
                    {lang === "en" ? "Terms" : "AGB"}
                  </Link>
                  <Link href="/hilfe-kontakt" className="brand-link">
                    {lang === "en" ? "Help & Contact" : "Hilfe & Kontakt"}
                  </Link>
                  <Link href="/impressum" className="brand-link">
                    {lang === "en" ? "Legal Notice" : "Impressum"}
                  </Link>
                  <Link href="/datenschutz" className="brand-link">
                    {lang === "en" ? "Privacy" : "Datenschutz"}
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}


