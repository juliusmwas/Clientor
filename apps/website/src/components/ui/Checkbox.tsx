import type { InputHTMLAttributes } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

function Checkbox({
  error = false,
  disabled,
  className,
  ...props
}: CheckboxProps) {
  return (
    <input
      {...props}
      type="checkbox"
      disabled={disabled}
      aria-invalid={error || undefined}
      className={[
        "size-4 shrink-0 appearance-none rounded border",
        "bg-surface-raised",
        "transition-colors duration-200",
        "checked:border-primary checked:bg-primary",
        "focus:outline-none focus:ring-2 focus:ring-primary/20",
        error
          ? "border-error focus:border-error focus:ring-error/20"
          : "border-border focus:border-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export default Checkbox;
