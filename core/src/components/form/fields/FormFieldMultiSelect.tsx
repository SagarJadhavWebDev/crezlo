"use client";

import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { FieldValidation, NestedKeyOf } from "../../../types/form.type";
import { useValidationRules } from "../hooks/useValidationRules";

import { MultiSelectDropDown, MultiSelectDropDownProps } from "./components/MultiSelectDropDown";

interface FormFieldMultiSelectProps<T extends FieldValues> extends Partial<MultiSelectDropDownProps> {
  name: NestedKeyOf<T>;
  validation?: FieldValidation<T>;
  type?: "status";
}
export function FormFieldMultiSelect<T extends FieldValues>({ name, validation, type, ...props }: FormFieldMultiSelectProps<T>) {
  const { control } = useFormContext();
  const rules = useValidationRules<T>(validation);

  return (
    <Controller
      name={name as string}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <MultiSelectDropDown
          {...props}
          value={
            type && type === "status"
            // @ts-ignore
              ? props.options?.filter((item) => (props?.isMulti ? field.value.includes(item.value) : field.value === item.value))
              : field.value
          }
          onChange={
            type && type === "status"
              ? (value) => {
                // @ts-ignore
                  const newValue = props?.isMulti ? value?.map((item) => item?.value) : value?.value;
                  console.log("select value", newValue);
                  field.onChange(newValue);
                }
              : (value) => field.onChange(value)
          }
          // value={field.value}
          //  onChange={field.onChange}
          isClearable={!validation?.required}
          error={fieldState.error?.message}
        />
      )}
    />
  );
}
