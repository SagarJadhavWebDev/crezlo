"use client";

import { FieldValues, useFormContext } from "react-hook-form";
import { Input, InputProps } from "../../common";
import { FieldValidation, NestedKeyOf } from "../../../types/form.type";
import { useValidationRules } from "../hooks/useValidationRules";
import { get } from "lodash";

interface FormFieldInputProps<T extends FieldValues> extends InputProps {
  name: NestedKeyOf<T>;
  required?: boolean;
  validation?: FieldValidation<T>;
}
export function FormFieldInput<T extends FieldValues>({ name, required, validation, ...props }: FormFieldInputProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, name);
  const rules = useValidationRules<T>(validation);

  return <Input {...register(name, rules)} error={error?.message as string} {...props} />;
}
