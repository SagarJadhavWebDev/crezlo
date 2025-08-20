import { FormFieldWrapper } from "./FormFieldWrapper";
import { forwardRef, TextareaHTMLAttributes } from "react";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  tooltip?: string;
  supportingText?: string;
  error?: string;
  success?: string;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  icon?: React.ReactNode;
  isSearch?: boolean;
  inputSize?: "sm" | "md" | "lg";
  renderSupportingText?: React.ReactNode;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      tooltip,
      supportingText,
      error,
      success,
      prefix,
      suffix,
      icon,
      isSearch = false,
      inputSize = "md",
      className = "",
      required,
      disabled,
      renderSupportingText,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-2 py-1",
      md: "px-3 py-2",
      lg: "px-4 py-3",
    };

    const stateClasses = error
      ? "border-red-300"
      : success
      ? "border-green-300"
      : disabled
      ? "border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600"
      : "";

    return (
      <FormFieldWrapper
        label={label}
        tooltip={tooltip}
        required={required}
        error={error}
        success={success}
        supportingText={supportingText}
        renderSupportingText={renderSupportingText}
      >
        <div className="relative">
          {prefix && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">
                {prefix}
              </span>
            </div>
          )}

          {icon && !isSearch && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {icon}
            </div>
          )}

          <textarea
            ref={ref}
            className={`form-textarea w-full rounded-lg focus:ring-violet-500 border-gray-300 ${
              sizeClasses[inputSize]
            } ${prefix ? "pl-10" : icon ? "pl-9" : ""} ${
              suffix ? "pr-8" : ""
            } ${stateClasses} ${className}`}
            disabled={disabled}
            {...props}
          />

          {isSearch && (
            <button
              className="absolute inset-y-0 left-0 flex items-center pl-3 group"
              type="button"
              aria-label="Search"
              disabled={disabled}
            >
              <svg
                className="shrink-0 fill-current text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
              </svg>
            </button>
          )}

          {suffix && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">
                {suffix}
              </span>
            </div>
          )}
        </div>
      </FormFieldWrapper>
    );
  }
);

TextArea.displayName = "TextArea";
