"use client";

import { FieldValues, useFormContext, Controller } from "react-hook-form";
import { get, pick } from "lodash";
import { useValidationRules } from "../hooks/useValidationRules";
import { FieldValidation, NestedKeyOf } from "../../../types";
import { MultiFileUploader, MultiFileUploaderProps } from "./components/MultiFileUploader";
import { uploadFileInChunks } from "../../../utils";

interface FormFieldMultiFileUploadProps<T extends FieldValues> extends MultiFileUploaderProps {
  name: NestedKeyOf<T>;

  required?: boolean;
  validation?: FieldValidation<T>;
}

export function FormFieldMultiFileUpload<T extends FieldValues>({
  name,

  required,
  validation,
  ...props
}: FormFieldMultiFileUploadProps<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();

  const error = get(errors, name);
  const rules = useValidationRules<T>(validation);
  return (
    <Controller
      control={control}
      // @ts-ignore
      name={name as string}
      rules={rules}
      render={({ field: { value = [], onChange } }) => (
        <MultiFileUploader
          required={required}
          error={error?.message as string}
          onUpload={async (file, onProgress) => {
            const uniqueKey = `${file.name}-${Date.now()}`;
            try {
              const url = await uploadFileInChunks(file, file.name, file.type, uniqueKey, (progressMap) => {
                onProgress(progressMap[uniqueKey]);
              });
              onChange([...(value || []), { name: file.name, url }]);
            } catch (err) {
              throw err;
            }
          }}
          {...pick(props, ["label", "tooltip", "error", "success", "supportingText", "renderSupportingText", "accept"])}
        />
      )}
    />
  );
}
