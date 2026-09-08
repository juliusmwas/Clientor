import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../lib/useTheme";
import type { Theme } from "../lib/theme";

const themes: {
  value: Theme;
  label: string;
  icon: typeof Sun;
}[] = [
  {
    value: "light",
    label: "Light",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    icon: Moon,
  },
  {
    value: "system",
    label: "System",
    icon: Monitor,
  },
];

function ThemeSwitcher() {
  const { theme, changeTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Theme"
      className="inline-flex rounded-md border border-border bg-surface p-1"
    >
      {themes.map(({ value, label, icon: Icon }) => {
        const isActive = theme === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => changeTheme(value)}
            aria-label={`Use ${label.toLowerCase()} theme`}
            aria-pressed={isActive}
            className={[
              "inline-flex items-center justify-center rounded-sm p-2",
              "transition-colors",
              "focus-visible:outline-2 focus-visible:outline-offset-2",
              "focus-visible:outline-primary",
              isActive
                ? "bg-primary text-white"
                : "text-text-secondary hover:bg-primary-light hover:text-text-primary",
            ].join(" ")}
          >
            <Icon size={16} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}

export default ThemeSwitcher;
