import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};

function Textarea({
  error = false,
  disabled,
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      {...props}
      disabled={disabled}
      aria-invalid={error || undefined}
      className={[
        "min-h-28 w-full resize-y rounded-md border bg-surface-raised px-3 py-2",
        "text-sm text-text-primary",
        "placeholder:text-text-muted",
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
    />
  );
}

export default Textarea;
