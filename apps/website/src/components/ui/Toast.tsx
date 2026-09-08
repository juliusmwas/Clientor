import { CheckCircle2, Info, TriangleAlert, X } from "lucide-react";
import type { ReactNode } from "react";

type ToastVariant = "success" | "error" | "info";

type ToastProps = {
  variant?: ToastVariant;
  title: string;
  message?: ReactNode;
  onClose?: () => void;
};

const iconStyles = {
  success: CheckCircle2,
  error: TriangleAlert,
  info: Info,
};

function Toast({ variant = "success", title, message, onClose }: ToastProps) {
  const Icon = iconStyles[variant];

  return (
    <div
      role="status"
      className="flex w-full max-w-sm items-start gap-3 rounded-lg border border-border bg-surface-raised p-4 shadow-md"
    >
      <Icon
        size={20}
        aria-hidden="true"
        className={
          variant === "success"
            ? "text-success"
            : variant === "error"
              ? "text-error"
              : "text-info"
        }
      />

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-text-primary">{title}</p>

        {message && (
          <p className="mt-1 text-sm text-text-secondary">{message}</p>
        )}
      </div>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close notification"
          className="shrink-0 rounded-md p-1 text-text-muted hover:bg-surface hover:text-text-primary"
        >
          <X size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

export default Toast;
