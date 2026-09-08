import type { ElementType, HTMLAttributes, ReactNode } from "react";

type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-lg"
  | "body"
  | "body-sm"
  | "caption";

type TypographyProps = HTMLAttributes<HTMLElement> & {
  variant?: TypographyVariant;
  as?: ElementType;
  children: ReactNode;
};

const variantStyles: Record<TypographyVariant, string> = {
  display: "text-5xl leading-[1.15] font-bold tracking-tight",
  h1: "text-4xl leading-[1.2] font-bold tracking-tight",
  h2: "text-3xl leading-[1.25] font-semibold tracking-tight",
  h3: "text-2xl leading-[1.33] font-semibold",
  h4: "text-xl leading-[1.4] font-semibold",
  "body-lg": "text-lg leading-7",
  body: "text-base leading-6",
  "body-sm": "text-sm leading-5",
  caption: "text-xs leading-4",
};

const defaultElements: Record<TypographyVariant, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "body-lg": "p",
  body: "p",
  "body-sm": "p",
  caption: "span",
};

function Typography({
  variant = "body",
  as,
  children,
  className,
  ...props
}: TypographyProps) {
  const Component = as ?? defaultElements[variant];

  return (
    <Component
      {...props}
      className={[variantStyles[variant], className].filter(Boolean).join(" ")}
    >
      {children}
    </Component>
  );
}

export default Typography;
