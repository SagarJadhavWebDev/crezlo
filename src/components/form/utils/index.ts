import { FieldValues, Path, UseFormSetError } from "react-hook-form";

type ErrorResponse = Record<string, string[]>;

export function setFormErrors<T extends FieldValues>(
  errors: ErrorResponse,
  setError: UseFormSetError<T>
) {
  Object.entries(errors).forEach(([field, messages]) => {
    setError(field as Path<T>, {
      type: "server",
      message: messages as unknown as string,
    });
  });
}
