"use client";
import { nanoid } from "nanoid";
import { InputHTMLAttributes, forwardRef, useEffect, useState } from "react";
import { Tooltip } from "../../../common";
import { FormFieldError } from "./FormFieldError";

export type ToggleInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  tooltip?: string;
  supportingText?: string;
  error?: string;
  success?: string;
  defaultChecked?: boolean;
  size?: "sm" | "md" | "lg";
  renderSupportingText?: React.ReactNode;
  onCheckChange?: (checked: boolean) => void;
};

export const ToggleInput = forwardRef<HTMLInputElement, ToggleInputProps>(
  (
    {
      label,
      tooltip,
      supportingText,
      error,
      success,
      defaultChecked,
      size = "md",
      className = "",
      required,
      disabled,
      renderSupportingText,
      onCheckChange,
      ...props
    },
    ref
  ) => {
    const [checked, setChecked] = useState(defaultChecked);
    const sizeClasses = {
      sm: "w-10 h-5 after:w-4 after:h-4",
      md: "w-11 h-6 after:w-5 after:h-5",
      lg: "w-14 h-7 after:w-6 after:h-6",
    };

    const stateClasses = error
      ? "border-red-300"
      : success
      ? "border-green-300"
      : disabled
      ? "border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600"
      : "";
    const id = nanoid();

    const handleChange = () => {
      if (!disabled) {
        const newValue = !checked;
        setChecked(newValue);
        onCheckChange?.(newValue);
      }
    };

    useEffect(() => {
      setChecked(props.checked);
    }, [props.checked]);

    return (
      <div className="w-full">
        <div className="flex w-full justify-between">
          {(label || tooltip) && (
            <div className="flex items-center justify-between mb-1">
              {label && (
                <label className="block text-sm font-medium">
                  {label}
                  {required && <span className="text-red-500">*</span>}
                </label>
              )}
              {tooltip && (
                <Tooltip className="ml-2" bg="dark" size="md" position="left">
                  <div className="text-sm text-gray-200">{tooltip}</div>
                </Tooltip>
              )}
            </div>
          )}

          {/* <input
            ref={ref}
            className={`form-input w-full rounded-lg focus:ring-violet-500 border-gray-300 ${sizeClasses[inputSize]}
             ${stateClasses} ${className}`}
            disabled={disabled}
            {...props}
          /> */}
          <div className="form-switch">
            <input ref={ref} type="checkbox" id={id} className="sr-only" checked={checked} onChange={handleChange} disabled={disabled} />
            <label
              className={` ${sizeClasses[size]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}  ${stateClasses} ${className} ${
                checked ? "bg-indigo-500 dark:bg-indigo-600" : "bg-gray-400 dark:bg-gray-700"
              }`}
              htmlFor={id}
            >
              <span className="bg-white shadow-sm" aria-hidden="true"></span>
              <span className="sr-only">Switch label</span>
            </label>
          </div>
        </div>

        {renderSupportingText && renderSupportingText}
         {error && <FormFieldError error={error} />}
        {success && <div className="text-xs font-medium mt-1 text-green-500">{success}</div>}
        {supportingText && !error && !success && <div className="text-xs font-medium mt-1 text-gray-500">{supportingText}</div>}
      </div>
    );
  }
);

ToggleInput.displayName = "Toggle";
