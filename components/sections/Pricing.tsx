"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button, Chip } from "@heroui/react";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { APP_STORE_URL } from "@/lib/constants";
import { IconCheck } from "@/components/ui/brand-icon";

function FeatureCheck({ featured = false }: { featured?: boolean }) {
  return (
    <span
      className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        featured ? "text-[#04210f]" : "text-[var(--brand-lime)]"
      }`}
      style={{
        background: featured
          ? "linear-gradient(135deg, var(--brand-lime), var(--brand-purple))"
          : "color-mix(in srgb, var(--brand-lime) 20%, transparent)",
      }}
      aria-hidden
    >
      <IconCheck size={12} strokeWidth={2.5} />
    </span>
  );
}

export function Pricing() {
  const t = useTranslations("pricing");
  const [yearly, setYearly] = useState(true);

  const freeFeatures = t.raw("free.features") as string[];
  const proFeatures = t.raw("pro.features") as string[];
  const aiProFeatures = t.raw("aiPro.features") as string[];

  return (
    <section id="pricing" className="section scroll-mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
        <p className="mt-3 text-lg text-muted">{t("subtitle")}</p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <div className="inline-flex items-center rounded-full border border-border bg-surface p-1 shadow-sm">
          <Button
            variant={yearly ? "ghost" : "primary"}
            size="sm"
            className="rounded-full px-4"
            onPress={() => setYearly(false)}
          >
            {t("monthly")}
          </Button>
          <Button
            variant={yearly ? "primary" : "ghost"}
            size="sm"
            className="rounded-full px-4"
            onPress={() => setYearly(true)}
          >
            {t("yearly")}
          </Button>
        </div>
        <Chip color="success" variant="soft" size="sm">
          {t("saveBadge")}
        </Chip>
      </div>

      <div className="pricing-grid mt-10">
        <ScrollReveal className="pricing-grid-item h-full" delay={0}>
          <article className="pricing-card h-full">
            <h3 className="text-lg font-bold">{t("free.name")}</h3>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-extrabold tracking-tight">{t("free.price")}</span>
              <span className="pb-1 text-sm text-muted">{t("free.period")}</span>
            </div>
            <ul className="mt-6 flex-1 space-y-3 text-sm">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-foreground/90">
                  <FeatureCheck />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-outline mt-8 w-full sm:mt-auto"
            >
              {t("free.cta")}
            </a>
          </article>
        </ScrollReveal>

        <ScrollReveal className="pricing-grid-item h-full" delay={80}>
          <article className="pricing-card h-full">
            <h3 className="text-lg font-bold">{t("pro.name")}</h3>
            <p className="mt-1.5 text-sm text-muted">
              {yearly ? t("pro.billingYearly") : t("pro.billingMonthly")}
            </p>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-extrabold tracking-tight">
                {yearly ? t("pro.priceYearly") : t("pro.priceMonthly")}
              </span>
              <span className="pb-1 text-sm text-muted">
                {yearly ? t("perYear") : t("perMonth")}
              </span>
            </div>
            <ul className="mt-6 flex-1 space-y-3 text-sm">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-foreground/90">
                  <FeatureCheck />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-outline mt-8 w-full sm:mt-auto"
            >
              {t("subscribeCta")}
            </a>
          </article>
        </ScrollReveal>

        <ScrollReveal
          className="pricing-grid-item pricing-grid-item--featured h-full"
          delay={160}
        >
          <article className="relative flex h-full flex-col overflow-hidden rounded-3xl p-[2px] lg:-mt-1 lg:mb-1">
            <div aria-hidden className="brand-ring absolute inset-0 rounded-3xl" />
            <div className="pricing-card pricing-card-featured relative flex h-full flex-col rounded-[calc(1.5rem-2px)] border-0 p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold">{t("aiPro.name")}</h3>
                <Chip color="accent" variant="soft" size="sm">
                  {t("mostPopular")}
                </Chip>
              </div>
              <p className="mt-1.5 text-sm text-muted">
                {yearly ? t("aiPro.billingYearly") : t("aiPro.billingMonthly")}
              </p>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold tracking-tight">
                  {yearly ? t("aiPro.priceYearly") : t("aiPro.priceMonthly")}
                </span>
                <span className="pb-1 text-sm text-muted">
                  {yearly ? t("perYear") : t("perMonth")}
                </span>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {aiProFeatures.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-foreground/90">
                    <FeatureCheck featured />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-brand mt-8 w-full sm:mt-auto"
              >
                {t("subscribeCta")}
              </a>
            </div>
          </article>
        </ScrollReveal>
      </div>

      <ScrollReveal className="card-elevated mx-auto mt-8 max-w-3xl space-y-3 p-6 text-sm text-muted">
        <p className="font-semibold text-foreground">{t("creditsTitle")}</p>
        <p>{t("creditsBody")}</p>
        <p>{t("recipeAiNote")}</p>
      </ScrollReveal>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted">{t("footnote")}</p>
    </section>
  );
}
