"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { FormFieldWrapper, FormFieldWrapperProps } from "./FormFieldWrapper";
import { BlogEditor } from "../../../editor";
export type BlogFormEditorProps = {
  value?: string;
  onChange: (value: string) => void;
  
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> &
  Omit<FormFieldWrapperProps, "children">;

export const BlogFormEditor = forwardRef<HTMLInputElement, BlogFormEditorProps>(
  ({ value, onChange, ...props }, ref) => {
    return (
      <FormFieldWrapper {...props}>
        <BlogEditor
          onHtmlChanged={onChange}
          initialHtml={value}
         
          
        />
      </FormFieldWrapper>
    );
  }
);

BlogFormEditor.displayName = "BlogFormEditor";
