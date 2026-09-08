import { createContext } from "react";
import type { Theme } from "./theme";

export type ThemeContextValue = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);
