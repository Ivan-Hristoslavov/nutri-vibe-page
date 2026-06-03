import Image from "next/image";

import {
  SCREENSHOT_NATIVE,
  screenshotHeightForWidth,
} from "@/lib/screenshot-dimensions";

type ScreenshotProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  glow?: boolean;
  size?: "default" | "compact" | "showcase";
};

const displayWidths = {
  default: 340,
  showcase: 320,
  compact: 220,
} as const;

export function Screenshot({
  src,
  alt,
  priority = false,
  className = "",
  glow = true,
  size = "default",
}: ScreenshotProps) {
  const displayWidth = displayWidths[size];
  const renderWidth = displayWidth * 2;
  const renderHeight = screenshotHeightForWidth(renderWidth);
  const frame =
    size === "compact"
      ? "rounded-[1.5rem]"
      : size === "showcase"
        ? "rounded-[1.85rem]"
        : "rounded-[2rem]";
  const glowInset =
    size === "compact" ? "-inset-3" : size === "showcase" ? "-inset-5" : "-inset-4";
  const glowRadius =
    size === "compact"
      ? "rounded-[1.75rem]"
      : size === "showcase"
        ? "rounded-[2.1rem]"
        : "rounded-[2.25rem]";

  return (
    <div className={`relative ${className}`}>
      {glow ? (
        <div
          aria-hidden
          className={`brand-gradient absolute ${glowInset} ${glowRadius} opacity-20 blur-xl`}
        />
      ) : null}
      <div
        className={`relative overflow-hidden border border-border/50 bg-surface shadow-xl ${frame}`}
      >
        <Image
          src={src}
          alt={alt}
          width={renderWidth}
          height={renderHeight}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          unoptimized
          sizes={`(max-width: 768px) 85vw, ${displayWidth}px`}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

/** For next/image remote/local config — aspect ratio metadata */
export const screenshotIntrinsicSize = SCREENSHOT_NATIVE;
