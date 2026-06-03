/** Native export size of nutrivibe-*.png screenshots */
export const SCREENSHOT_NATIVE = {
  width: 1206,
  height: 2622,
} as const;

export const SCREENSHOT_ASPECT = SCREENSHOT_NATIVE.height / SCREENSHOT_NATIVE.width;

export function screenshotHeightForWidth(width: number) {
  return Math.round(width * SCREENSHOT_ASPECT);
}
