import { FieldValues, UseFormSetError } from "react-hook-form";
type ErrorResponse = Record<string, string[]>;
export declare function setFormErrors<T extends FieldValues>(errors: ErrorResponse, setError: UseFormSetError<T>): void;
export {};
