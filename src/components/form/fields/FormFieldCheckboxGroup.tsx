"use client";
import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { FieldValidation, NestedKeyOf } from "../../../types";
import { useValidationRules } from "../hooks/useValidationRules";

import {
  CheckboxGroup,
  CheckboxGroupProps,
} from "./components/CheckboxGroup";

interface FormFieldCheckboxGroupProps<T extends FieldValues>
  extends Omit<CheckboxGroupProps, "value" | "onChange"> {
  name: NestedKeyOf<T>;
  validation?: FieldValidation<T>;
}

export function FormFieldCheckboxGroup<T extends FieldValues>({
  name,
  validation,
  ...props
}: FormFieldCheckboxGroupProps<T>) {
  const { control } = useFormContext();
  const rules = useValidationRules<T>(validation);

  return (
    <Controller
      name={name as string}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <CheckboxGroup
          {...props}
          value={field.value || []}
          onChange={field.onChange}
          error={fieldState.error?.message}
          defaultChecked={field.value?? props?.defaultValue}
        />
      )}
    />
  );
}
