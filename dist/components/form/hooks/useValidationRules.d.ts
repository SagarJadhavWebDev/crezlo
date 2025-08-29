import { FieldValues } from "react-hook-form";
import { FieldValidation } from "../../../types/form.type";
export declare function useValidationRules<T extends FieldValues>(validation?: FieldValidation<T>): {
    required?: undefined;
    pattern?: undefined;
    minLength?: undefined;
    maxLength?: undefined;
    min?: undefined;
    max?: undefined;
    validate?: undefined;
} | {
    required: string | boolean;
    pattern: {
        value: RegExp;
        message: string;
    };
    minLength: {
        value: number;
        message: string;
    };
    maxLength: {
        value: number;
        message: string;
    };
    min: {
        value: number;
        message: string;
    };
    max: {
        value: number;
        message: string;
    };
    validate: (value: any) => string | boolean;
};
