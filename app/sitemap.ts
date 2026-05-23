import type { MetadataRoute } from "next";

const baseUrl = "https://www.ravion.me";

const routes = [
  "",
  "/start",
  "/passagierrechte",
  "/fluggastrechte-ueberblick",
  "/fahrgastrechte-ueberblick",
  "/warum-schlichtung",
  "/wie-es-funktioniert",
  "/cases/new",
  "/cases/find",
  "/hilfe-kontakt",
  "/impressum",
  "/datenschutz",
  "/agb",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/cases") ? 0.5 : 0.7,
  }));
}
