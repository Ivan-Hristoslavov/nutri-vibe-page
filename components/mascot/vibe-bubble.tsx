import Image from "next/image";

import type { MascotSrc } from "@/lib/mascot";

/** `top` = bubble above mascot; `bottom` = bubble below mascot; `start`/`end` = horizontal */
type BubblePlacement = "top" | "bottom" | "start" | "end";
type BubbleTone = "default" | "onBrand";
type BubbleSize = "sm" | "md" | "lg";

type VibeBubbleProps = {
  src: MascotSrc;
  message: string;
  size?: BubbleSize;
  tone?: BubbleTone;
  /** @deprecated Use `placement` — kept for callers */
  bubblePosition?: BubblePlacement;
  placement?: BubblePlacement;
  className?: string;
  priority?: boolean;
  float?: boolean;
  glow?: boolean;
};

const imageSizes = {
  sm: 96,
  md: 128,
  lg: 180,
} as const;

function MessagePill({
  message,
  size,
  tone,
}: {
  message: string;
  size: BubbleSize;
  tone: BubbleTone;
}) {
  return (
    <p
      className={`vibe-message-pill min-w-0 text-center font-semibold leading-snug text-balance ${
        tone === "onBrand" ? "vibe-message-pill-on-brand" : "text-white"
      } ${
        size === "sm"
          ? "px-3.5 py-2 text-xs"
          : "px-4 py-2.5 text-sm sm:px-5 sm:text-[0.95rem]"
      }`}
    >
      {message}
    </p>
  );
}

function MessageTrail({ placement }: { placement: BubblePlacement }) {
  if (placement === "top" || placement === "bottom") {
    return (
      <div className="vibe-trail vibe-trail-vertical py-1" aria-hidden>
        <span className="vibe-trail-dot vibe-trail-dot-1" />
        <span className="vibe-trail-dot vibe-trail-dot-2" />
        <span className="vibe-trail-dot vibe-trail-dot-3" />
      </div>
    );
  }

  return (
    <div className="vibe-trail vibe-trail-diagonal px-0.5" aria-hidden>
      <span className="vibe-trail-dot vibe-trail-dot-1" />
      <span className="vibe-trail-dot vibe-trail-dot-2" />
      <span className="vibe-trail-dot vibe-trail-dot-3" />
    </div>
  );
}

function MascotImage({
  src,
  size,
  priority,
  float,
  glow,
}: {
  src: MascotSrc;
  size: BubbleSize;
  priority: boolean;
  float: boolean;
  glow: boolean;
}) {
  const imageSize = imageSizes[size];
  const sizeClass =
    size === "sm" ? "h-24 w-24 sm:h-28 sm:w-28" : size === "md" ? "h-32 w-32 sm:h-36 sm:w-36" : "h-44 w-44 sm:h-48 sm:w-48";

  return (
    <div className={`mascot-figure ${glow ? "mascot-figure--glow" : ""}`}>
      {glow ? <span className="mascot-glow-ring" aria-hidden /> : null}
      <Image
        src={src}
        alt=""
        width={imageSize}
        height={imageSize}
        priority={priority}
        className={`relative z-[1] shrink-0 object-contain drop-shadow-xl ${
          float ? "float-soft" : ""
        } ${sizeClass}`}
      />
      <span className="mascot-platform" aria-hidden />
    </div>
  );
}

export function VibeBubble({
  src,
  message,
  size = "md",
  tone = "default",
  bubblePosition,
  placement: placementProp,
  className = "",
  priority = false,
  float = false,
  glow = false,
}: VibeBubbleProps) {
  const placement = placementProp ?? bubblePosition ?? "top";

  if (placement !== "start" && placement !== "end") {
    return (
      <div className={`vibe-coach vibe-coach--stacked ${className}`.trim()}>
        <MessagePill message={message} size={size} tone={tone} />
        <MessageTrail placement="top" />
        <MascotImage
          src={src}
          size={size}
          priority={priority}
          float={float}
          glow={glow}
        />
      </div>
    );
  }

  if (placement === "start") {
    return (
      <div
        className={`vibe-coach vibe-coach--row ${className}`.trim()}
      >
        <MessagePill message={message} size={size} tone={tone} />
        <MessageTrail placement="start" />
        <MascotImage
          src={src}
          size={size}
          priority={priority}
          float={float}
          glow={glow}
        />
      </div>
    );
  }

  return (
    <div
      className={`vibe-coach vibe-coach--row ${className}`.trim()}
    >
      <MascotImage src={src} size={size} priority={priority} float={float} glow={glow} />
      <MessageTrail placement="end" />
      <MessagePill message={message} size={size} tone={tone} />
    </div>
  );
}
