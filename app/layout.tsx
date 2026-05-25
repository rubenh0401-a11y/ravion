import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import SiteHeader from "./SiteHeader";
import { getSiteLanguage } from "@/lib/siteLanguage";
import { baseUrlForHost, primaryDomain } from "@/lib/seoDomains";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Ravion - Ansprüche digital und außergerichtlich klären";
const description =
  "Ravion hilft Verbrauchern, Fluggastrechte und andere Ansprüche digital zu strukturieren, bewerten zu lassen und ohne Kostenrisiko einen Vergleichsvorschlag vorzubereiten.";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host = headerStore.get("x-forwarded-host") ?? headerStore.get("host");
  const siteUrl = baseUrlForHost(host);

  return {
    metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Ravion",
  },
  description,
  applicationName: "Ravion",
  authors: [{ name: "Ravion UG" }],
  creator: "Ravion UG",
  publisher: "Ravion UG",
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Ravion",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/ravion-logo.png",
        width: 1200,
        height: 630,
        alt: "Ravion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/ravion-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "oQ8qqk1Dd0lXpyFVAemPEIlJyy_Q98QBMmJ_y_rubJA",
  },
  };
}

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
    url: primaryDomain,
    logo: `${primaryDomain}/ravion-logo.png`,
    email: "service@ravion.me",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sieben-Schwaben-Weg 4",
      postalCode: "50997",
      addressLocality: "Köln",
      addressCountry: "DE",
    },
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ravion",
    url: primaryDomain,
    inLanguage: lang === "en" ? "en" : "de",
  };

  return (
    <html lang={lang}>
      <head>
        <meta name="google-site-verification" content="oQ8qqk1Dd0lXpyFVAemPEIlJyy_Q98QBMmJ_y_rubJA" />
        <meta name="google-site-verification" content="LCxkbsJpSlcKj9ySyMbvCUtvLLZG4Lf2skzazXXgSxA" />
        <meta name="google-site-verification" content="aDl6NG3oPXS7lRfLipc6q5wLphAAcMxVSe26fPtbq_g" />
      </head>
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


