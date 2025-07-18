import { FieldValidation } from "../../../types/form.type";
import { FieldValues, useFormContext } from "react-hook-form";

export function useValidationRules<T extends FieldValues>(validation?: FieldValidation<T>) {
  const { getValues } = useFormContext();

  if (!validation) return {};

  const { required, pattern, minLength, maxLength, min, max, validate } = validation;

  return {
    required,
    pattern,
    minLength,
    maxLength,
    min,
    max,
    validate: validate ? (value: any) => validate(value, getValues() as T) : undefined,
  };
}
