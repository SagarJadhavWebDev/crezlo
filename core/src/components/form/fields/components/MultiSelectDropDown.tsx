import { forwardRef } from "react";
import { FormFieldWrapper } from "./FormFieldWrapper";
import Select, { Props } from "react-select";

export type MultiSelectDropDownProps = Props & {
  label?: string;
  tooltip?: string;
  supportingText?: string;
  error?: string;
  success?: string;
  required?: boolean;
  renderSupportingText?: React.ReactNode;
};

// @ts-ignore
export const MultiSelectDropDown = forwardRef<Props, MultiSelectDropDownProps>(
  (
    {
      label,
      tooltip,
      supportingText,
      error,
      success,
      required,
      className = "",

      renderSupportingText,

      ...props
    },
    ref
  ) => {
    return (
      <>
        <style>
          {`
        .css-13cymwt-control{
         border:none;
         border-radius:var(--radius-lg);
        }
         #react-select-3-input , #react-select-2-input{
         box-shadow:none;
         }
        `}
        </style>
        <FormFieldWrapper
          label={label}
          tooltip={tooltip}
          required={required}
          error={error}
          success={success}
          supportingText={supportingText}
          renderSupportingText={renderSupportingText}
        >
          <Select {...props} className="form-input w-full rounded-lg focus:ring-violet-500 border-gray-300 p-0    " />
        </FormFieldWrapper>
      </>
    );
  }
);

MultiSelectDropDown.displayName = "MultiSelectDropDown";
