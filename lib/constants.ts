export const APP_STORE_URL =
  "https://apps.apple.com/bg/app/nutrivibe-ai-food-scanner/id6762268159";

export function getSiteOrigin(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  try {
    return new URL(raw.endsWith("/") ? raw.slice(0, -1) : raw);
  } catch {
    return new URL("http://localhost:3000");
  }
}

export const navAnchors = [
  { id: "features", labelKey: "features" },
  { id: "how-it-works", labelKey: "howItWorks" },
  { id: "pricing", labelKey: "pricing" },
  { id: "faq", labelKey: "faq" },
] as const;
