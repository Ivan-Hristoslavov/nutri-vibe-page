import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { HeroMotivation } from "@/components/mascot/hero-motivation";
import { HeroPhoneStage } from "@/components/mascot/hero-phone-stage";
import { APP_STORE_URL } from "@/lib/constants";
import { SCREENSHOTS } from "@/lib/screenshots";
import { Stars } from "@/components/media/Stars";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className="hero-section relative overflow-hidden">
      <div aria-hidden className="hero-mesh" />
      <div aria-hidden className="glow-blob brand-gradient left-[-10%] top-[-10%] h-80 w-80 opacity-60" />
      <div
        aria-hidden
        className="glow-blob right-[-8%] top-1/4 h-80 w-80 opacity-45"
        style={{ backgroundColor: "var(--brand-purple)" }}
      />
      <div
        aria-hidden
        className="glow-blob bottom-[-12%] left-1/3 h-64 w-64 opacity-35"
        style={{ backgroundColor: "var(--brand-coral)" }}
      />

      <div className="hero-section-inner relative z-[2]">
        <div className="hero-grid">
          <div className="hero-copy reveal min-w-0 space-y-5 sm:space-y-6">
            <span className="eyebrow inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[var(--brand-lime)]" />
              <span className="truncate">{t("badge")}</span>
            </span>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:max-w-xl lg:text-[3.15rem] lg:leading-[1.04] xl:max-w-2xl">
              {t("title")}{" "}
              <span className="brand-text-gradient brand-text-gradient-animated">
                {t("highlight")}
              </span>{" "}
              {t("titleEnd")}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted">{t("subtitle")}</p>
            <div className="flex max-w-full flex-wrap items-center gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label={t("ctaPrimary")}
                className="inline-flex shrink-0 transition hover:scale-[1.02] active:scale-[0.98]"
              >
                <Image
                  src="/marketing/download-on-app-store.svg"
                  alt={t("ctaPrimary")}
                  width={160}
                  height={54}
                  className="h-auto w-[160px] max-w-full drop-shadow-md"
                />
              </a>
            <a href="#how-it-works" className="btn-hero-secondary shrink-0">
              {t("ctaSecondary")}
            </a>
            </div>
            <div className="flex max-w-full flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-border/50 bg-surface/70 px-4 py-3 backdrop-blur-sm">
              <Stars />
              <span className="text-sm font-semibold text-foreground">{t("ratingLabel")}</span>
              <span className="min-w-0 text-sm text-muted">{t("trust")}</span>
            </div>
          </div>

          <HeroMotivation />

          <div className="hero-phone mx-auto w-full min-w-0 max-w-[19rem] sm:max-w-sm lg:max-w-md">
            <HeroPhoneStage src={SCREENSHOTS.today} alt={t("screenshotAlt")} />
          </div>
        </div>
      </div>
    </section>
  );
}
