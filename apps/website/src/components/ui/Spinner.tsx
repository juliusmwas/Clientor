import type { HTMLAttributes } from "react";

type SpinnerSize = "sm" | "md" | "lg";

type SpinnerProps = HTMLAttributes<HTMLSpanElement> & {
  size?: SpinnerSize;
};

const sizeStyles: Record<SpinnerSize, string> = {
  sm: "size-4 border-2",
  md: "size-6 border-2",
  lg: "size-8 border-[3px]",
};

function Spinner({ size = "md", className, ...props }: SpinnerProps) {
  return (
    <span
      {...props}
      role="status"
      aria-label="Loading"
      className={[
        "inline-block animate-spin rounded-full",
        "border-border border-t-primary",
        sizeStyles[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export default Spinner;
