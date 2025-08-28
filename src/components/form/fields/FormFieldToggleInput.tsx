"use client";

import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { FieldValidation, NestedKeyOf } from "../../../types";
import { useValidationRules } from "../hooks/useValidationRules";
import { ToggleInput, ToggleInputProps } from "./components/ToggleInput";

interface FormFieldToggleInputProps<T extends FieldValues> extends ToggleInputProps {
  name: NestedKeyOf<T>;
  required?: boolean;
  validation?: FieldValidation<T>;
}
export function FormFieldToggleInput<T extends FieldValues>({ name, required, validation, ...props }: FormFieldToggleInputProps<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const rules = useValidationRules<T>(validation);
  return (
    <Controller
      name={name as string}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <ToggleInput
          {...props}
          checked={!!field.value}
          onCheckChange={(checked: boolean) => field.onChange(checked)}
          error={fieldState.error?.message}
          defaultChecked={field.value ?? props?.defaultValue}
        />
      )}
    />
  );
}
