export const THEME_STORAGE_KEY = "theme";
export const THEME_OPTIONS = ["light", "dark"] as const;
export type ThemeName = (typeof THEME_OPTIONS)[number];

export const DEFAULT_THEME: ThemeName = "light";

/** Blocking script for <head> — runs before paint to avoid theme flash. */
export function getThemeInitScript(): string {
  const attributes = JSON.stringify(["class", "data-theme"]);
  const storageKey = JSON.stringify(THEME_STORAGE_KEY);
  const defaultTheme = JSON.stringify(DEFAULT_THEME);
  const themes = JSON.stringify([...THEME_OPTIONS]);
  const enableSystem = "false";
  const enableColorScheme = "true";

  return `(${applyThemeToDocument.toString()})(${attributes},${storageKey},${defaultTheme},undefined,${themes},undefined,${enableSystem},${enableColorScheme})`;

  function applyThemeToDocument(
    attribute: string | string[],
    storageKey: string,
    defaultTheme: string,
    forcedTheme: string | undefined,
    themes: string[],
    value: Record<string, string> | undefined,
    enableSystem: boolean,
    enableColorScheme: boolean,
  ) {
    const root = document.documentElement;
    const colorSchemes = ["light", "dark"];

    function setTheme(name: string) {
      const attrs = Array.isArray(attribute) ? attribute : [attribute];
      attrs.forEach((attr) => {
        const isClass = attr === "class";
        const classList = isClass && value ? themes.map((t) => value[t] || t) : themes;
        if (isClass) {
          root.classList.remove(...classList);
          root.classList.add(value && value[name] ? value[name] : name);
        } else {
          root.setAttribute(attr, name);
        }
      });
      if (enableColorScheme && colorSchemes.includes(name)) {
        root.style.colorScheme = name;
      }
    }

    function systemTheme() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    if (forcedTheme) {
      setTheme(forcedTheme);
      return;
    }

    try {
      const stored = localStorage.getItem(storageKey) || defaultTheme;
      const resolved =
        enableSystem && stored === "system" ? systemTheme() : stored;
      setTheme(resolved);
    } catch {
      setTheme(defaultTheme);
    }
  }
}

export function applyThemeOnClient(theme: ThemeName) {
  const root = document.documentElement;
  root.classList.remove(...THEME_OPTIONS);
  root.classList.add(theme);
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
}
