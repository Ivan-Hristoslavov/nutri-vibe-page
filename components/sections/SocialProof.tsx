import { getTranslations } from "next-intl/server";

import { VibeBubble } from "@/components/mascot/vibe-bubble";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { MASCOT } from "@/lib/mascot";

export async function SocialProof() {
  const t = await getTranslations("socialProof");
  const vibe = await getTranslations("vibe.floats");

  const stats = [
    { value: t("ratingValue"), label: t("ratingLabel") },
    { value: t("foodsValue"), label: t("foodsLabel") },
    { value: t("languagesValue"), label: t("languagesLabel") },
  ];

  return (
    <section
      aria-label={t("ratingLabel")}
      className="border-y border-border/60 bg-surface-secondary"
    >
      <div className="social-proof-inner">
        <div className="social-proof-stats">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 90}>
              <div className="stat-card text-center sm:text-left">
                <p className="stat-value brand-text-gradient text-3xl font-extrabold sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-muted">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="social-proof-coach">
          <VibeBubble
            src={MASCOT.encouraging}
            message={vibe("social")}
            size="md"
            placement="top"
            float
          />
        </div>
      </div>
    </section>
  );
}
