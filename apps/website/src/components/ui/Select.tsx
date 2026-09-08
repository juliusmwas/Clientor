import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: boolean;
};

function Select({
  error = false,
  disabled,
  className,
  children,
  ...props
}: SelectProps) {
  return (
    <select
      {...props}
      disabled={disabled}
      aria-invalid={error || undefined}
      className={[
        "w-full rounded-md border bg-surface-raised px-3 py-2",
        "text-sm text-text-primary",
        "transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-primary/20",
        error
          ? "border-error focus:border-error focus:ring-error/20"
          : "border-border focus:border-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </select>
  );
}

export default Select;
