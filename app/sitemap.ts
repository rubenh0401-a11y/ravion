import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { baseUrlForHost, publicRoutes, seoDomains } from "@/lib/seoDomains";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headerStore = await headers();
  const host = headerStore.get("x-forwarded-host") ?? headerStore.get("host");
  const baseUrl = baseUrlForHost(host);
  const now = new Date();

  return publicRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/cases") ? 0.5 : 0.7,
    alternates: {
      languages: {
        en: `${seoDomains.en}${route}`,
        "en-GB": `${seoDomains["en-GB"]}${route}`,
        "de-AT": `${seoDomains["de-AT"]}${route}`,
        "de-CH": `${seoDomains["de-CH"]}${route}`,
      },
    },
  }));
}
