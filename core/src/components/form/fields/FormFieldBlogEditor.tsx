"use client";
import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { FieldValidation, NestedKeyOf } from "../../../types";
import { useValidationRules } from "../hooks/useValidationRules";
import {
  BlogFormEditor,
  BlogFormEditorProps,
} from "./components/BlogFormEditor";

interface FormFieldBlogEditorProps<T extends FieldValues>
  extends Omit<BlogFormEditorProps, "onChange"> {
  name: NestedKeyOf<T>;
  validation?: FieldValidation<T>;
}

export function FormFieldBlogEditor<T extends FieldValues>({
  name,
  validation,
  ...props
}: FormFieldBlogEditorProps<T>) {
  const { control } = useFormContext();
  const baseRules = useValidationRules<T>(validation);

  const rules = {
    ...baseRules,
    validate: (value: string) => {
      const trimmed = value?.replace(/<[^>]*>/g, "").trim(); // remove HTML tags
      return props?.required && trimmed === ""
        ? "Content cannot be empty"
        : true;
    },
  };

  return (
    <Controller
      name={name as string}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <BlogFormEditor
          {...props}
          value={field.value}
          onChange={(v) => {
            field.onChange(v);
          }}
          error={fieldState.error?.message}
        />
      )}
    />
  );
}
