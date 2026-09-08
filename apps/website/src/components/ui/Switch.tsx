import type { InputHTMLAttributes } from "react";

type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function Switch({ disabled, className, ...props }: SwitchProps) {
  return (
    <label
      className={[
        "relative inline-flex h-6 w-11 shrink-0",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <input
        {...props}
        type="checkbox"
        disabled={disabled}
        role="switch"
        className="peer sr-only"
      />

      <span
        aria-hidden="true"
        className={[
          "absolute inset-0 rounded-full",
          "bg-border",
          "transition-colors duration-200",
          "peer-checked:bg-primary",
          "peer-focus-visible:outline-2",
          "peer-focus-visible:outline-offset-2",
          "peer-focus-visible:outline-primary",
        ].join(" ")}
      />

      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute left-1 top-1",
          "size-4 rounded-full bg-white shadow-sm",
          "transition-transform duration-200",
          "peer-checked:translate-x-5",
        ].join(" ")}
      />
    </label>
  );
}

export default Switch;
