import { getTranslations } from "next-intl/server";

import { VibeBubble } from "@/components/mascot/vibe-bubble";
import type { MascotSrc } from "@/lib/mascot";

export type VibeFloatMessageKey =
  | "heroLeft"
  | "heroRight"
  | "heroPeek"
  | "social"
  | "featuresSide"
  | "howItWorksSide";

export type VibeFloatingSpotConfig = {
  messageKey: VibeFloatMessageKey;
  src: MascotSrc;
  positionClass: string;
  delay?: string;
  size?: "sm" | "md" | "lg";
};

type VibeFloatingSpotsProps = {
  spots: VibeFloatingSpotConfig[];
  className?: string;
  /** Show from this breakpoint up (default md) */
  showFrom?: "md" | "lg";
};

export async function VibeFloatingSpots({
  spots,
  className = "",
  showFrom = "md",
}: VibeFloatingSpotsProps) {
  const t = await getTranslations("vibe.floats");
  const visibility = showFrom === "lg" ? "hidden lg:block" : "hidden md:block";

  return (
    <div
      className={`vibe-float-layer pointer-events-none absolute inset-0 overflow-hidden ${visibility} ${className}`.trim()}
      aria-hidden
    >
      {spots.map((spot, index) => (
        <div
          key={spot.messageKey}
          className={`vibe-float-spot vibe-float-spot--safe ${spot.positionClass}`}
          style={{ animationDelay: spot.delay ?? `${index * 1.1}s` }}
        >
          <VibeBubble
            src={spot.src}
            message={t(spot.messageKey)}
            size={spot.size ?? "md"}
            placement="top"
            float
            glow
          />
        </div>
      ))}
    </div>
  );
}
