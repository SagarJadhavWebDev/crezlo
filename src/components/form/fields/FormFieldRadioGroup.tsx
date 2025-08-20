import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { FieldValidation, NestedKeyOf } from "../../../types";
import { useValidationRules } from "../hooks/useValidationRules";

import {
  RadioGroup,
  RadioGroupProps,
} from "./components/RadioGroup";

interface FormFieldRadioGroupProps<T extends FieldValues>
  extends Omit<RadioGroupProps, "value" | "onChange"> {
  name: NestedKeyOf<T>;
  validation?: FieldValidation<T>;
}

export function FormFieldRadioGroup<T extends FieldValues>({
  name,
  validation,
  ...props
}: FormFieldRadioGroupProps<T>) {
  const { control } = useFormContext();
  const rules = useValidationRules<T>(validation);

  return (
    <Controller
      name={name as string}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <RadioGroup
          {...props}
          value={field.value}
          onChange={field.onChange}
          error={fieldState.error?.message}
          defaultChecked={field.value?? props?.defaultValue}
          
        />
      )}
    />
  );
}
