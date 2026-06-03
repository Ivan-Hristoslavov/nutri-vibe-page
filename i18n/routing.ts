import { defineRouting } from "next-intl/routing";

export const locales = ["en", "bg", "de", "ro"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  bg: "Български",
  de: "Deutsch",
  ro: "Română",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: true,
});
