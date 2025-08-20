
import React from "react";
import { Tooltip } from "../../../common";

export type FormFieldWrapperProps = {
  label?: string;
  tooltip?: string;
  required?: boolean;
  error?: string;
  success?: string;
  supportingText?: string;
  renderSupportingText?: React.ReactNode;
  children: React.ReactNode;
};

export const FormFieldWrapper: React.FC<FormFieldWrapperProps> = ({
  label,
  tooltip,
  required,
  error,
  success,
  supportingText,
  renderSupportingText,
  children,
}) => {
  return (
    <div className="w-full">
      {(label || tooltip) && (
        <div className="flex items-center justify-between mb-1">
          {label && (
            <label className="block text-sm font-medium">
              {label}
              {required && <span className="text-red-500 ml-0.5">*</span>}
            </label>
          )}
          {tooltip && (
            <Tooltip className="ml-2" bg="dark" size="md" position="left">
              <div className="text-sm text-gray-200">{tooltip}</div>
            </Tooltip>
          )}
        </div>
      )}

      {children}

      {renderSupportingText && renderSupportingText}
      {error && <div className="text-xs font-medium mt-1 text-red-500">{error}</div>}
      {success && <div className="text-xs font-medium mt-1 text-green-500">{success}</div>}
      {supportingText && !error && !success && (
        <div className="text-xs font-medium mt-1 text-gray-500">{supportingText}</div>
      )}
    </div>
  );
};
