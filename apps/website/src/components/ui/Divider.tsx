import type { HTMLAttributes } from "react";

type DividerProps = HTMLAttributes<HTMLHRElement> & {
  orientation?: "horizontal" | "vertical";
};

function Divider({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        {...props}
        className={["h-full w-px shrink-0 bg-border", className]
          .filter(Boolean)
          .join(" ")}
      />
    );
  }

  return (
    <hr
      {...props}
      className={["w-full border-0 border-t border-border", className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export default Divider;
