import type { Metadata } from "next";

import { APP_STORE_URL, getSiteOrigin } from "@/lib/constants";
import { SCREENSHOT_NATIVE } from "@/lib/screenshot-dimensions";
import { locales, routing, type Locale } from "@/i18n/routing";

export const SITE_NAME = "NutriVibe";
export const OG_IMAGE_PATH = "/screenshots/nutrivibe-today.png";

export const FAQ_ITEM_KEYS = [
  "privacy",
  "languages",
  "devices",
  "appleHealth",
  "aiAccuracy",
  "subscription",
] as const;

export type FaqItemKey = (typeof FAQ_ITEM_KEYS)[number];

export function localeAlternates(path = "") {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `/${locale}${path}`]),
  ) as Record<string, string>;

  return {
    languages: { ...languages, "x-default": `/${routing.defaultLocale}${path}` },
  };
}

export function absoluteUrl(path: string) {
  const origin = getSiteOrigin().origin.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${normalized}`;
}

export function openGraphImages(alt: string) {
  const url = absoluteUrl(OG_IMAGE_PATH);
  return [
    {
      url,
      secureUrl: url,
      width: SCREENSHOT_NATIVE.width,
      height: SCREENSHOT_NATIVE.height,
      alt,
      type: "image/png",
    },
  ];
}

type SiteMetaInput = {
  locale: Locale;
  title: string;
  description: string;
  ogAlt: string;
  keywords?: string;
  path?: string;
};

export function buildSiteMetadata({
  locale,
  title,
  description,
  ogAlt,
  keywords,
  path = "",
}: SiteMetaInput): Metadata {
  const canonicalPath = `/${locale}${path}`;
  const pageUrl = absoluteUrl(canonicalPath);

  return {
    metadataBase: getSiteOrigin(),
    title: path ? title : { default: title, template: `%s | ${SITE_NAME}` },
    description,
    applicationName: SITE_NAME,
    keywords: keywords?.split(",").map((k) => k.trim()),
    alternates: {
      canonical: canonicalPath,
      ...localeAlternates(path),
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    icons: {
      icon: [
        { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
    },
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: SITE_NAME,
      title,
      description,
      locale,
      alternateLocale: locales.filter((l) => l !== locale),
      images: openGraphImages(ogAlt),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(OG_IMAGE_PATH)],
    },
    other: {
      "apple-itunes-app": `app-id=6762268159, app-argument=${APP_STORE_URL}`,
    },
    category: "health",
  };
}

type LegalMetaInput = {
  locale: Locale;
  title: string;
  description: string;
  path: "/privacy" | "/terms";
};

export function buildLegalMetadata({
  locale,
  title,
  description,
  path,
}: LegalMetaInput): Metadata {
  const canonicalPath = `/${locale}${path}`;
  const pageUrl = absoluteUrl(canonicalPath);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      ...localeAlternates(path),
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url: pageUrl,
      siteName: SITE_NAME,
      title,
      description,
      locale,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
