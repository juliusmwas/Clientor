import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
};

const paddingStyles = {
  none: "p-0",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

function Card({ children, padding = "md", className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={[
        "rounded-lg border border-border",
        "bg-surface-raised",
        "text-text-primary",
        "shadow-sm",
        paddingStyles[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export default Card;
