import type { ReactNode } from "react";
import Label from "./Label";

type FormFieldProps = {
  label: string;
  htmlFor?: string;
  required?: boolean;
  helpText?: string;
  error?: string;
  children: ReactNode;
};

function FormField({
  label,
  htmlFor,
  required = false,
  helpText,
  error,
  children,
}: FormFieldProps) {
  const messageId = htmlFor
    ? `${htmlFor}-${error ? "error" : "help"}`
    : undefined;

  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} required={required}>
        {label}
      </Label>

      {children}

      {error ? (
        <p id={messageId} role="alert" className="text-sm text-error">
          {error}
        </p>
      ) : helpText ? (
        <p id={messageId} className="text-sm text-text-muted">
          {helpText}
        </p>
      ) : null}
    </div>
  );
}

export default FormField;
