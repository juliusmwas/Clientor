import type { HTMLAttributes } from "react";

type AvatarSize = "sm" | "md" | "lg";

type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: AvatarSize;
};

const sizeStyles: Record<AvatarSize, string> = {
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-12 text-base",
};

function Avatar({
  src,
  alt = "",
  fallback = "?",
  size = "md",
  className,
  ...props
}: AvatarProps) {
  return (
    <div
      {...props}
      className={[
        "inline-flex shrink-0 items-center justify-center overflow-hidden",
        "rounded-full bg-primary-light text-primary font-semibold",
        sizeStyles[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {src ? (
        <img src={src} alt={alt} className="size-full object-cover" />
      ) : (
        fallback.slice(0, 2).toUpperCase()
      )}
    </div>
  );
}

export default Avatar;
