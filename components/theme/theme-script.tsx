import { getThemeInitScript } from "@/lib/theme";

/** Server-only blocking script — must not live inside a client component tree. */
export function ThemeScript() {
  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: getThemeInitScript() }}
    />
  );
}
