import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { AppStoreLink } from "@/components/analytics/app-store-link";
import { FinalCtaCoach } from "@/components/mascot/final-cta-coach";

export async function FinalCta() {
  const t = await getTranslations("finalCta");

  return (
    <section id="download" className="section scroll-mt-24">
      <div className="final-cta-panel brand-gradient relative overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-12 sm:py-16">
        <div aria-hidden className="final-cta-shine" />
        <div aria-hidden className="final-cta-grain" />
        <div
          aria-hidden
          className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/25 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-16 left-1/4 h-40 w-40 rounded-full bg-white/15 blur-2xl"
        />
        <div className="relative grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr] md:gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="min-w-0 text-white">
            <h2 className="max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-tight">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
              {t("subtitle")}
            </p>
            <AppStoreLink
              location="final_cta"
              aria-label={t("cta")}
              className="mt-8 inline-flex transition hover:scale-[1.02] active:scale-[0.98]"
            >
              <Image
                src="/marketing/download-on-app-store.svg"
                alt={t("cta")}
                width={170}
                height={56}
                className="h-auto w-[170px] max-w-full drop-shadow-lg"
              />
            </AppStoreLink>
          </div>
          <div className="flex min-w-0 justify-center md:justify-end">
            <FinalCtaCoach />
          </div>
        </div>
      </div>
    </section>
  );
}
