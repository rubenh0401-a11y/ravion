import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api", "/dashboard", "/solutions"],
      },
    ],
    sitemap: "https://www.ravion.me/sitemap.xml",
  };
}
