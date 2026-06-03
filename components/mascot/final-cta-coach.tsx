import { getTranslations } from "next-intl/server";

import { VibeBubble } from "@/components/mascot/vibe-bubble";
import { MASCOT } from "@/lib/mascot";

export async function FinalCtaCoach() {
  const vibe = await getTranslations("vibe");

  return (
    <div className="final-cta-coach">
      <VibeBubble
        src={MASCOT.celebrating}
        message={vibe("finalCta")}
        size="lg"
        placement="top"
        float
        glow
      />
    </div>
  );
}
