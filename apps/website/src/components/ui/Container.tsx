import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      {...props}
      className={[
        "mx-auto w-full max-w-7xl px-4",
        "sm:px-6",
        "lg:px-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

export default Container;
