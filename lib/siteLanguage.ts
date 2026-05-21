import { cookies, headers } from "next/headers";

export type SiteLanguage = "de" | "en";

function defaultLanguageForHost(host: string | null): SiteLanguage {
  const normalizedHost = (host ?? "").toLowerCase().split(":")[0];

  if (
    normalizedHost === "ravion.at" ||
    normalizedHost.endsWith(".ravion.at") ||
    normalizedHost === "ravion.ch" ||
    normalizedHost.endsWith(".ravion.ch")
  ) {
    return "de";
  }

  return "en";
}

export async function getSiteLanguage(): Promise<SiteLanguage> {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("site_lang")?.value;

  if (cookieLang === "de" || cookieLang === "en") {
    return cookieLang;
  }

  const headerStore = await headers();
  const host = headerStore.get("x-forwarded-host") ?? headerStore.get("host");

  return defaultLanguageForHost(host);
}
