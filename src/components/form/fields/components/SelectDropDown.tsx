"use client";
import { forwardRef, SelectHTMLAttributes } from "react";
import { FormFieldWrapper } from "./FormFieldWrapper";

export type SelectDropDownProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  tooltip?: string;
  supportingText?: string;
  error?: string;
  success?: string;
  required?: boolean;
  renderSupportingText?: React.ReactNode;
  options: { value: string; label: string }[];
  size?: "sm" | "md" | "lg";
};

export const SelectDropDown = forwardRef<
  HTMLSelectElement,
  SelectDropDownProps
>(
  (
    {
      label,
      tooltip,
      supportingText,
      error,
      success,
      required,
      className = "",
      disabled,
      renderSupportingText,
      options,
      size = "md",
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
        <select
          ref={ref}
          className={`form-select w-full ${sizeClasses[size]} ${stateClasses} ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FormFieldWrapper>
    );
  }
);

SelectDropDown.displayName = "SelectDropDown";
