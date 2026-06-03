import { setRequestLocale } from "next-intl/server";

import { StructuredData } from "@/components/seo/structured-data";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PricingSection } from "@/components/sections/PricingSection";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { type Locale } from "@/i18n/routing";
import { buildHomeStructuredData } from "@/lib/structured-data";

type PageProps = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const structuredData = await buildHomeStructuredData(locale as Locale);

  return (
    <>
      <StructuredData data={structuredData} />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <PricingSection />
      <Faq />
      <FinalCta />
    </>
  );
}
