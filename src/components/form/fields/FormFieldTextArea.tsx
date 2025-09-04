"use client";

import { FieldValues, useFormContext } from "react-hook-form";
import { FieldValidation, NestedKeyOf } from "../../../types";
import { useValidationRules } from "../hooks/useValidationRules";
import { get } from "lodash";
import { TextArea, TextAreaProps } from "./components/TextArea";

interface FormFieldTextAreaProps<T extends FieldValues> extends TextAreaProps {
  name: NestedKeyOf<T>;
  required?: boolean;
  validation?: FieldValidation<T>;
}
export function FormFieldTextArea<T extends FieldValues>({ name, required, validation, ...props }: FormFieldTextAreaProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, name);
  const rules = useValidationRules<T>(validation);

  return <TextArea {...register(name, rules)} error={error?.message as string} {...props} />;
}
