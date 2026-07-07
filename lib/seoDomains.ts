export const primaryDomain = "https://www.ravion.me";

export const seoDomains = {
  en: "https://www.ravion.me",
  "en-GB": "https://www.ravion.uk",
  "de-AT": "https://www.ravion.at",
  "de-CH": "https://www.ravion.ch",
} as const;

export const publicRoutes = [
  "",
  "/start",
  "/passagierrechte",
  "/fluggastrechte-ueberblick",
  "/fahrgastrechte-ueberblick",
  "/solutions",
  "/solutions-reiseveranstalter",
  "/warum-schlichtung",
  "/wie-es-funktioniert",
  "/hilfe-kontakt",
  "/impressum",
  "/datenschutz",
  "/agb",
] as const;

export function baseUrlForHost(host: string | null) {
  const normalizedHost = (host ?? "").toLowerCase().split(":")[0];

  if (normalizedHost === "ravion.uk" || normalizedHost.endsWith(".ravion.uk")) {
    return "https://www.ravion.uk";
  }
  if (normalizedHost === "ravion.at" || normalizedHost.endsWith(".ravion.at")) {
    return "https://www.ravion.at";
  }
  if (normalizedHost === "ravion.ch" || normalizedHost.endsWith(".ravion.ch")) {
    return "https://www.ravion.ch";
  }

  return primaryDomain;
}

export function seoAlternates(path = "") {
  return {
    canonical: path || "/",
    languages: {
      en: `${seoDomains.en}${path}`,
      "en-GB": `${seoDomains["en-GB"]}${path}`,
      "de-AT": `${seoDomains["de-AT"]}${path}`,
      "de-CH": `${seoDomains["de-CH"]}${path}`,
      "x-default": `${seoDomains.en}${path}`,
    },
  };
}
