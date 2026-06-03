import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function IconBase({
  size = 22,
  children,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconTarget(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function IconCamera(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 8h3l1.5-2h7L17 8h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Z" />
      <circle cx="12" cy="13" r="3.25" />
    </IconBase>
  );
}

export function IconTrending(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 18h16" />
      <path d="m7 14 4-4 3 3 5-6" />
      <path d="M17 7h3v3" />
    </IconBase>
  );
}

export function IconDashboard(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="4" rx="1.5" />
      <rect x="13" y="10" width="7" height="10" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
    </IconBase>
  );
}

export function IconSparkles(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3 13.5 8.5 19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />
      <path d="M5 4v2M4 5h2M19 18v2M18 19h2" strokeWidth="1.5" />
    </IconBase>
  );
}

export function IconTimer(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 2.5" />
      <path d="M9 3h6" />
    </IconBase>
  );
}

export function IconChef(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 11h12v2a6 6 0 0 1-12 0v-2Z" />
      <path d="M6 11a3 3 0 0 1 6 0M12 11a3 3 0 0 1 6 0" />
      <path d="M9 19h6" />
    </IconBase>
  );
}

export function IconApple(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 4c-2 0-3.5 1.5-3.5 3.5C8.5 9 10 11 12 11s3.5-2 3.5-3.5C15.5 5.5 14 4 12 4Z" />
      <path d="M12 11v7" />
      <path d="M9.5 20c1 .5 2.5.5 5 0" />
    </IconBase>
  );
}

export function IconDroplet(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3c3 4.5 6 7.5 6 11a6 6 0 1 1-12 0c0-3.5 3-6.5 6-11Z" />
    </IconBase>
  );
}

export function IconChart(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 19V9M10 19V5M15 19v-7M20 19v-3" />
    </IconBase>
  );
}

export function IconWatch(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="7" y="6" width="10" height="12" rx="2.5" />
      <path d="M9 6V4M15 6V4M9 18v2M15 18v2" />
      <path d="M12 11v3l1.5 1.5" />
    </IconBase>
  );
}

export function IconCoach(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 10a4 4 0 1 1 8 0" />
      <path d="M6 19v-1a6 6 0 0 1 12 0v1" />
      <path d="M12 6v1" />
    </IconBase>
  );
}

export function IconSync(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 12a8 8 0 0 1 13.5-5.5" />
      <path d="M20 7v4h-4" />
      <path d="M20 12a8 8 0 0 1-13.5 5.5" />
      <path d="M4 17v-4h4" />
    </IconBase>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 12.5 10.5 15 16 9" strokeWidth="2.25" />
    </IconBase>
  );
}

export type BrandIconName =
  | "target"
  | "camera"
  | "trending"
  | "dashboard"
  | "sparkles"
  | "timer"
  | "chef"
  | "apple"
  | "droplet"
  | "chart"
  | "watch"
  | "coach"
  | "sync";

const iconMap = {
  target: IconTarget,
  camera: IconCamera,
  trending: IconTrending,
  dashboard: IconDashboard,
  sparkles: IconSparkles,
  timer: IconTimer,
  chef: IconChef,
  apple: IconApple,
  droplet: IconDroplet,
  chart: IconChart,
  watch: IconWatch,
  coach: IconCoach,
  sync: IconSync,
} as const;

export function BrandIcon({
  name,
  accent,
  size = "md",
}: {
  name: BrandIconName;
  accent: string;
  size?: "sm" | "md" | "lg";
}) {
  const Icon = iconMap[name];
  const box =
    size === "sm" ? "h-9 w-9 rounded-xl" : size === "lg" ? "h-12 w-12 rounded-2xl" : "h-10 w-10 rounded-xl";
  const iconSize = size === "sm" ? 18 : size === "lg" ? 24 : 20;

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${box}`}
      style={{
        color: accent,
        background: `linear-gradient(145deg, color-mix(in srgb, ${accent} 18%, transparent), color-mix(in srgb, ${accent} 6%, transparent))`,
        boxShadow: `inset 0 1px 0 color-mix(in srgb, white 40%, transparent), 0 8px 20px -12px color-mix(in srgb, ${accent} 55%, transparent)`,
      }}
    >
      <Icon size={iconSize} />
    </span>
  );
}
