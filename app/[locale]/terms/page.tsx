import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPage } from "@/components/sections/LegalPage";
import { buildLegalMetadata } from "@/lib/seo";
import { locales, type Locale } from "@/i18n/routing";

type PageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });

  return buildLegalMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("intro"),
    path: "/terms",
  });
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <LegalPage namespace="terms" sectionKeys={["use", "subscriptions", "liability"]} />;
}
