/** App screenshots in /public/screenshots (semantic filenames) */
export const SCREENSHOTS = {
  today: "/screenshots/nutrivibe-today.png",
  aiScan: "/screenshots/nutrivibe-ai-scan.png",
  fasting: "/screenshots/nutrivibe-fasting.png",
  recipes: "/screenshots/nutrivibe-recipes.png",
  progressCalories: "/screenshots/calories_progress.png",
  progressWeight: "/screenshots/weight_progress.png",
  foodSearch: "/screenshots/food_search.png",
  foodDetails: "/screenshots/nutrivibe-food-detail.png",
} as const;

export type ScreenshotKey = keyof typeof SCREENSHOTS;
