import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover",

  secondary:
    "bg-surface-raised text-text-primary border border-border hover:bg-surface",

  outline:
    "border border-border bg-transparent text-text-primary hover:bg-surface",

  ghost:
    "bg-transparent text-text-secondary hover:bg-surface hover:text-text-primary",

  danger: "bg-error text-white hover:opacity-90",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-8 px-3 text-sm",
  md: "min-h-10 px-4 text-sm",
  lg: "min-h-11 px-5 text-base",
};

function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      {...props}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={[
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        props.className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      )}

      {children}
    </button>
  );
}

export default Button;
