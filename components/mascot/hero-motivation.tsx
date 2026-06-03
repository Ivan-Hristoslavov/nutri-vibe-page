import { getTranslations } from "next-intl/server";

import { VibeBubble } from "@/components/mascot/vibe-bubble";
import { MASCOT } from "@/lib/mascot";

export async function HeroMotivation() {
  const t = await getTranslations("hero");

  return (
    <div className="hero-motivation">
      <VibeBubble
        src={MASCOT.celebrating}
        message={t("motivation")}
        size="md"
        placement="top"
        float
        glow
        priority
      />
    </div>
  );
}
