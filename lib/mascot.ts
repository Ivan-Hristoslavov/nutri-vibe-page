/** Optimized mascot icons (from vibe_happy) for favicon / PWA */
export const MASCOT_ICONS = {
  icon192: "/icons/icon-192.png",
  icon512: "/icons/icon-512.png",
} as const;

/** Vibe mascot assets in /public/mascot */
export const MASCOT = {
  idle: "/mascot/vibe_idle.png",
  happy: "/mascot/vibe_happy.png",
  encouraging: "/mascot/vibe_encouraging.png",
  celebrating: "/mascot/vibe_celebrating.png",
  thinking: "/mascot/vibe_thinking.png",
  sleeping: "/mascot/vibe_sleeping.png",
} as const;

export type MascotSrc = (typeof MASCOT)[keyof typeof MASCOT];
