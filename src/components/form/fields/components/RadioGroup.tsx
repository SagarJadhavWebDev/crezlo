"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { FormFieldWrapper } from "./FormFieldWrapper";

export type RadioOption = {
  label: string;
  value: string;
};

export type RadioGroupProps = {
  label?: string;
  tooltip?: string;
  supportingText?: string;
  error?: string;
  success?: string;
  required?: boolean;
  renderSupportingText?: React.ReactNode;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

export const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  (
    {
      label,
      tooltip,
      supportingText,
      error,
      success,
      required,
      renderSupportingText,
      options,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
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
        <div className="flex flex-col gap-2">
          {options.map((option) => (
            <label key={option.value} className="flex items-center gap-2">
              <input
                ref={ref}
                type="radio"
                 className="form-radio text-violet-600 focus:ring-violet-500"
                checked={value === option.value}
                onChange={() => onChange?.(option.value)}
                {...props}

              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </FormFieldWrapper>
    );
  }
);

RadioGroup.displayName = "RadioGroup";
