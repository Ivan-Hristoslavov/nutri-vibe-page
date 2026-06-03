import type { CSSProperties } from "react";

import { VibeBubble } from "@/components/mascot/vibe-bubble";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Screenshot } from "@/components/media/Screenshot";
import type { MascotSrc } from "@/lib/mascot";
import { BrandIcon, type BrandIconName } from "@/components/ui/brand-icon";

type FeatureShowcaseCardProps = {
  index: number;
  indexLabel: string;
  eyebrow: string;
  icon: BrandIconName;
  accent: string;
  src: string;
  title: string;
  description: string;
  mascotSrc: MascotSrc;
  peekMessage: string;
};

export function FeatureShowcaseCard({
  index,
  indexLabel,
  eyebrow,
  icon,
  accent,
  src,
  title,
  description,
  mascotSrc,
  peekMessage,
}: FeatureShowcaseCardProps) {
  const reversed = index % 2 === 1;

  return (
    <ScrollReveal delay={index * 90}>
      <article className="feature-showcase group">
        <div
          aria-hidden
          className="feature-showcase-accent"
          style={
            {
              "--showcase-accent": accent,
            } as CSSProperties
          }
        />

        <div className="feature-showcase-inner">
          <div
            className={`feature-showcase-copy ${reversed ? "lg:order-2 lg:pl-4" : "lg:pr-4"}`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="feature-showcase-index">{indexLabel}</span>
              <span className="feature-showcase-eyebrow">{eyebrow}</span>
            </div>

            <div className="mt-5 flex items-start gap-4">
              <BrandIcon name={icon} accent={accent} size="lg" />
              <div className="min-w-0 space-y-3">
                <h3 className="text-xl font-bold leading-tight tracking-tight sm:text-2xl">
                  {title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
                  {description}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`feature-showcase-media ${reversed ? "lg:order-1" : ""}`}
          >
            <div
              className={`feature-showcase-stage ${reversed ? "feature-showcase-stage--reversed" : ""}`}
            >
              <div className="feature-showcase-peek-col" aria-hidden>
                <VibeBubble
                  src={mascotSrc}
                  message={peekMessage}
                  size="md"
                  placement="top"
                  float
                  glow
                />
              </div>

              <div
                className={`feature-showcase-phone-col feature-showcase-tilt ${reversed ? "feature-showcase-tilt--left" : "feature-showcase-tilt--right"}`}
              >
                <Screenshot
                  src={src}
                  alt={title}
                  size="showcase"
                  glow
                  className="mx-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}
