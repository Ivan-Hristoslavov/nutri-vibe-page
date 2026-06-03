/** Mirrors NutriVibeStoreKit.storekit / App Store Connect product IDs. */
export const SUBSCRIPTION_PRODUCT_IDS = {
  proMonthly: "com.healthybite.nutrivibe.premium.monthly",
  proYearly: "com.healthybite.nutrivibe.premium.yearly",
  aiProMonthly: "com.healthybite.nutrivibe.premium.monthly.ai",
  aiProYearly: "com.healthybite.nutrivibe.premium.yearly.ai",
} as const;

/** USD list prices from NutriVibeStoreKit.storekit (production may vary by region). */
export const SUBSCRIPTION_USD = {
  pro: { monthly: 2.99, yearly: 19.99 },
  aiPro: { monthly: 7.99, yearly: 59.99 },
} as const;

export const SCAN_PACK_PRODUCT_IDS = {
  pack10: "scans.pack10",
  pack30: "scans.pack30",
  pack100: "scans.pack100",
} as const;

export const AI_PRO_MONTHLY_CREDITS = 100;
export const FREE_WELCOME_SCANS = 3;
