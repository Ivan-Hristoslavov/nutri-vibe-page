import { getTranslations } from "next-intl/server";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { VibeBubble } from "@/components/mascot/vibe-bubble";
import { MASCOT, type MascotSrc } from "@/lib/mascot";

type VibeBannerVariant = "howItWorks" | "features" | "pricing" | "faq";

const variantConfig: Record<
  VibeBannerVariant,
  { src: MascotSrc; size: "md" | "lg" }
> = {
  howItWorks: { src: MASCOT.encouraging, size: "md" },
  features: { src: MASCOT.thinking, size: "lg" },
  pricing: { src: MASCOT.encouraging, size: "md" },
  faq: { src: MASCOT.thinking, size: "md" },
};

export async function VibeBanner({
  variant,
  className = "",
}: {
  variant: VibeBannerVariant;
  className?: string;
}) {
  const t = await getTranslations("vibe");
  const { src, size } = variantConfig[variant];

  return (
    <ScrollReveal className={`vibe-section-coach flex justify-center px-2 ${className}`.trim()}>
      <VibeBubble
        src={src}
        message={t(variant)}
        size={size}
        placement="top"
        float
      />
    </ScrollReveal>
  );
}
