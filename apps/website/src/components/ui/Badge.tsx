import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "default" | "success" | "warning" | "error" | "info";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  children: ReactNode;
};

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-surface text-text-secondary border-border",

  success: "bg-primary-light text-primary border-transparent",

  warning:
    "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900",

  error:
    "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-400 dark:border-red-900",

  info: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900",
};

function Badge({
  variant = "default",
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={[
        "inline-flex items-center rounded-full border px-2.5 py-1",
        "text-xs font-medium leading-none",
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}

export default Badge;
