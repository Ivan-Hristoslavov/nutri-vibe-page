import { getTranslations } from "next-intl/server";

import { VibeBanner } from "@/components/mascot/vibe-banner";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { BrandIcon, type BrandIconName } from "@/components/ui/brand-icon";

const steps: { key: "one" | "two" | "three"; icon: BrandIconName; accent: string }[] = [
  { key: "one", icon: "target", accent: "var(--brand-lime)" },
  { key: "two", icon: "camera", accent: "var(--brand-purple)" },
  { key: "three", icon: "trending", accent: "var(--brand-coral)" },
];

export async function HowItWorks() {
  const t = await getTranslations("howItWorks");

  return (
    <section id="how-it-works" className="scroll-mt-24 bg-surface-secondary">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
          <p className="mt-3 text-lg text-muted">{t("subtitle")}</p>
        </div>

        <VibeBanner variant="howItWorks" className="mt-8" />

        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.key}>
              <ScrollReveal delay={index * 100} className="step-card h-full">
                <div className="flex items-start justify-between gap-3">
                  <BrandIcon name={step.icon} accent={step.accent} size="lg" />
                  <span className="brand-gradient flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-xs font-bold text-white shadow-md">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug sm:text-xl">
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {t(`steps.${step.key}.description`)}
                </p>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
