import type { HTMLAttributes, ReactNode } from "react";

type SectionSpacing = "sm" | "md" | "lg" | "xl";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  spacing?: SectionSpacing;
};

const spacingStyles: Record<SectionSpacing, string> = {
  sm: "py-12",
  md: "py-16",
  lg: "py-20",
  xl: "py-24",
};

function Section({
  children,
  spacing = "lg",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={[spacingStyles[spacing], className].filter(Boolean).join(" ")}
    >
      {children}
    </section>
  );
}

export default Section;
