"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { FormFieldWrapper } from "./FormFieldWrapper";

export type CheckboxOption = {
  label: string;
  value: string;
};

export type CheckboxGroupProps = {
  label?: string;
  tooltip?: string;
  supportingText?: string;
  error?: string;
  success?: string;
  required?: boolean;
  renderSupportingText?: React.ReactNode;
  options: CheckboxOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

export const CheckboxGroup = forwardRef<HTMLInputElement, CheckboxGroupProps>(
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
      value = [],
      onChange,
      ...props
    },
    ref
  ) => {
    const handleChange = (checkedValue: string) => {
      if (!onChange) return;

      if (value.includes(checkedValue)) {
        onChange(value.filter((v) => v !== checkedValue));
      } else {
        onChange([...value, checkedValue]);
      }
    };

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
                type="checkbox"
                 className="form-checkbox"
                checked={value.includes(option.value)}
                onChange={() => handleChange(option.value)}
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

CheckboxGroup.displayName = "CheckboxGroup";
