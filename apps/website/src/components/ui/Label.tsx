import type { LabelHTMLAttributes, ReactNode } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
  required?: boolean;
};

function Label({
  children,
  required = false,
  className,
  ...props
}: LabelProps) {
  return (
    <label
      {...props}
      className={[
        "inline-flex items-center gap-1",
        "text-sm font-medium text-text-primary",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}

      {required && (
        <span aria-hidden="true" className="text-error">
          *
        </span>
      )}
    </label>
  );
}

export default Label;
