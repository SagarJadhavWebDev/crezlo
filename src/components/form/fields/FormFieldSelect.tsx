"use client";

import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { FieldValidation, NestedKeyOf } from "../../../types";
import { useValidationRules } from "../hooks/useValidationRules";

import {
  SelectDropDown,
  SelectDropDownProps,
} from "./components/SelectDropDown";

interface FormFieldSelectProps<T extends FieldValues>
  extends SelectDropDownProps {
  name: NestedKeyOf<T>;
  required?: boolean;
  validation?: FieldValidation<T>;
}
export function FormFieldSelect<T extends FieldValues>({
  name,
  required,
  validation,
  ...props
}: FormFieldSelectProps<T>) {
  const { control } = useFormContext();
  const rules = useValidationRules<T>(validation);

  return (
    <Controller
      name={name as string}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <SelectDropDown
          {...props}
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
          error={fieldState.error?.message}
        />
      )}
    />
  );
}
