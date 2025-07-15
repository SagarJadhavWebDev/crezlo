import { FieldValues } from "react-hook-form";
export type FieldValidation<T extends FieldValues = any> = {
    required?: boolean | string;
    pattern?: {
        value: RegExp;
        message: string;
    };
    minLength?: {
        value: number;
        message: string;
    };
    maxLength?: {
        value: number;
        message: string;
    };
    min?: {
        value: number;
        message: string;
    };
    max?: {
        value: number;
        message: string;
    };
    validate?: (value: any, formValues: T) => string | boolean;
};
export type NestedKeyOf<ObjectType extends object> = {
    [Key in keyof ObjectType & string]: ObjectType[Key] extends (infer ArrayType)[] ? ArrayType extends object ? `${Key}` | `${Key}[${number}]` | `${Key}[${number}].${NestedKeyOf<ArrayType>}` : `${Key}` | `${Key}[${number}]` : ObjectType[Key] extends object ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}` : `${Key}`;
}[keyof ObjectType & string];
