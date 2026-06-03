import { getTranslations } from "next-intl/server";

import { APP_STORE_URL, getSiteOrigin } from "@/lib/constants";
import { FAQ_ITEM_KEYS } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function buildHomeStructuredData(locale: Locale) {
  const tMeta = await getTranslations({ locale, namespace: "meta" });
  const tFaq = await getTranslations({ locale, namespace: "faq" });
  const site = getSiteOrigin();
  const pageUrl = `${site.origin.replace(/\/$/, "")}/${locale}`;

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NutriVibe",
    alternateName: "NutriVibe — AI Food Scanner",
    operatingSystem: "iOS",
    applicationCategory: "HealthApplication",
    applicationSubCategory: "NutritionApplication",
    description: tMeta("description"),
    inLanguage: locale,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      url: APP_STORE_URL,
      availability: "https://schema.org/InStock",
    },
    downloadUrl: APP_STORE_URL,
    installUrl: APP_STORE_URL,
    url: pageUrl,
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NutriVibe",
    url: site.origin,
    inLanguage: locale,
    description: tMeta("description"),
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NutriVibe",
    url: site.origin,
    logo: `${site.origin.replace(/\/$/, "")}/mascot/vibe_idle.png`,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEM_KEYS.map((key) => ({
      "@type": "Question",
      name: tFaq(`items.${key}.question`),
      acceptedAnswer: {
        "@type": "Answer",
        text: tFaq(`items.${key}.answer`),
      },
    })),
  };

  return [softwareApplication, webSite, organization, faqPage];
}
