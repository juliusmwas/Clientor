import { useEffect, useMemo, useState, type ReactNode } from "react";
import { applyTheme, getStoredTheme, setTheme, type Theme } from "./theme";
import { ThemeContext } from "./theme-context";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => getStoredTheme());

  useEffect(() => {
    applyTheme(theme);

    if (theme !== "system") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = () => {
      applyTheme("system");
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  const changeTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    setTheme(nextTheme);
  };

  const value = useMemo(
    () => ({
      theme,
      changeTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
