import type { MetadataRoute } from "next";

import { getSiteOrigin } from "@/lib/constants";
import { locales, routing } from "@/i18n/routing";

const paths = ["", "/privacy", "/terms"] as const;

function hreflangAlternates(origin: string, path: string) {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${origin}/${locale}${path}`]),
  ) as Record<string, string>;

  languages["x-default"] = `${origin}/${routing.defaultLocale}${path}`;
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin().origin.replace(/\/$/, "");
  const now = new Date();

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${origin}/${locale}${path}`,
      lastModified: now,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.6,
      alternates: {
        languages: hreflangAlternates(origin, path),
      },
    })),
  );
}
