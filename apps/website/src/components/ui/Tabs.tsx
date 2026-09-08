import type { ReactNode } from "react";

type Tab = {
  value: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  value: string;
  onChange: (value: string) => void;
};

function Tabs({ tabs, value, onChange }: TabsProps) {
  const activeTab = tabs.find((tab) => tab.value === value);

  return (
    <div>
      <div role="tablist" className="flex gap-6 border-b border-border">
        {tabs.map((tab) => {
          const active = tab.value === value;

          return (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(tab.value)}
              className={[
                "relative pb-3 text-sm font-medium",
                "transition-colors",
                active
                  ? "text-primary"
                  : "text-text-secondary hover:text-text-primary",
                active
                  ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                  : "",
              ].join(" ")}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="pt-5">{activeTab?.content}</div>
    </div>
  );
}

export default Tabs;
