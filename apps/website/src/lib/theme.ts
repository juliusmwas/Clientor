export type Theme = "light" | "dark" | "system";

const THEME_KEY = "clientor-theme";

export function getStoredTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY);

  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }

  return "system";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.classList.remove("light", "dark");

  if (theme === "system") {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    root.classList.toggle("dark", prefersDark);
  } else {
    root.classList.add(theme);
  }
}

export function setTheme(theme: Theme) {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}
