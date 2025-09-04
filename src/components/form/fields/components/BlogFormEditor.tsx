"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { FormFieldWrapper, FormFieldWrapperProps } from "./FormFieldWrapper";
import { BlogEditor } from "../../../editor";
import { StopEventsWrapper } from "../../../common";
export type BlogFormEditorProps = {
  value?: string;
  onChange: (value: string) => void;
  editorClassName?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> &
  Omit<FormFieldWrapperProps, "children">;

export const BlogFormEditor = forwardRef<HTMLInputElement, BlogFormEditorProps>(({ value, onChange, editorClassName, ...props }, ref) => {
  return (
    <FormFieldWrapper {...props}>
      <StopEventsWrapper>
        {/* @ts-ignore */}
        <BlogEditor onHtmlChanged={onChange} initialHtml={value} className={editorClassName} />
      </StopEventsWrapper>
    </FormFieldWrapper>
  );
});

BlogFormEditor.displayName = "BlogFormEditor";
