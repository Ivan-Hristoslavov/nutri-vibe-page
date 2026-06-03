import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { VibeBanner } from "@/components/mascot/vibe-banner";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { FeatureShowcaseCard } from "@/components/sections/FeatureShowcaseCard";
import { MASCOT, type MascotSrc } from "@/lib/mascot";
import { SCREENSHOTS } from "@/lib/screenshots";
import { BrandIcon, type BrandIconName } from "@/components/ui/brand-icon";

type Showcase = {
  key: string;
  icon: BrandIconName;
  accent: string;
  src: string;
  index: string;
};

type Compact = {
  key: string;
  icon: BrandIconName;
  accent: string;
};

const showcaseEyebrow: Record<string, string> = {
  today: "TODAY",
  aiScan: "AI SCAN",
  fasting: "FASTING",
  recipes: "RECIPES",
  progressCalories: "PROGRESS",
  progressWeight: "BODY",
  foodSearch: "FOOD LOG",
  foodDetails: "DETAILS",
};

const showcaseMascot: Record<string, MascotSrc> = {
  today: MASCOT.encouraging,
  aiScan: MASCOT.thinking,
  fasting: MASCOT.happy,
  recipes: MASCOT.celebrating,
  progressCalories: MASCOT.encouraging,
  progressWeight: MASCOT.happy,
  foodSearch: MASCOT.thinking,
  foodDetails: MASCOT.celebrating,
};

const showcases: Showcase[] = [
  {
    key: "today",
    icon: "dashboard",
    accent: "var(--brand-lime)",
    src: SCREENSHOTS.today,
    index: "01",
  },
  {
    key: "aiScan",
    icon: "sparkles",
    accent: "var(--brand-purple)",
    src: SCREENSHOTS.aiScan,
    index: "02",
  },
  {
    key: "fasting",
    icon: "timer",
    accent: "var(--brand-coral)",
    src: SCREENSHOTS.fasting,
    index: "03",
  },
  {
    key: "recipes",
    icon: "chef",
    accent: "var(--brand-lime)",
    src: SCREENSHOTS.recipes,
    index: "04",
  },
  {
    key: "progressCalories",
    icon: "chart",
    accent: "var(--nutri-calories)",
    src: SCREENSHOTS.progressCalories,
    index: "05",
  },
  {
    key: "progressWeight",
    icon: "trending",
    accent: "var(--brand-purple)",
    src: SCREENSHOTS.progressWeight,
    index: "06",
  },
  {
    key: "foodSearch",
    icon: "apple",
    accent: "var(--nutri-carbs)",
    src: SCREENSHOTS.foodSearch,
    index: "07",
  },
  {
    key: "foodDetails",
    icon: "target",
    accent: "var(--nutri-protein)",
    src: SCREENSHOTS.foodDetails,
    index: "08",
  },
];

const compacts: Compact[] = [
  { key: "logging", icon: "apple", accent: "var(--nutri-carbs)" },
  { key: "water", icon: "droplet", accent: "var(--nutri-water)" },
  { key: "macros", icon: "chart", accent: "var(--nutri-protein)" },
  { key: "watch", icon: "watch", accent: "var(--brand-purple)" },
  { key: "coach", icon: "coach", accent: "var(--brand-coral)" },
  { key: "sync", icon: "sync", accent: "var(--nutri-water)" },
];

export async function Features() {
  const t = await getTranslations("features");

  return (
    <section id="features" className="section scroll-mt-24">
      <div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t("title")}</h2>
          <p className="mt-2 text-base text-muted sm:text-lg">{t("subtitle")}</p>
        </div>

        <VibeBanner variant="features" className="mt-8" />

        <div className="mt-10 flex flex-col gap-8 sm:gap-10">
          {showcases.map((feature, index) => (
            <FeatureShowcaseCard
              key={feature.key}
              index={index}
              indexLabel={feature.index}
              eyebrow={showcaseEyebrow[feature.key]}
              icon={feature.icon}
              accent={feature.accent}
              src={feature.src}
              title={t(`items.${feature.key}.name`)}
              description={t(`items.${feature.key}.description`)}
              mascotSrc={showcaseMascot[feature.key]}
              peekMessage={t(`peek.${feature.key}`)}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {compacts.map((feature, index) => (
            <ScrollReveal key={feature.key} delay={index * 50}>
              <article className="card-elevated flex gap-3 p-4">
                {feature.key === "coach" ? (
                  <Image
                    src={MASCOT.encouraging}
                    alt=""
                    width={56}
                    height={56}
                    className="h-14 w-14 shrink-0 object-contain"
                  />
                ) : (
                  <BrandIcon name={feature.icon} accent={feature.accent} size="sm" />
                )}
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-snug">
                    {t(`items.${feature.key}.name`)}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {t(`items.${feature.key}.description`)}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
