"use client";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import debounce from "lodash/debounce";
import { InputProps , Input} from "./Input";

type InlineEditableInputProps = Omit<InputProps, "value" | "onChange"> & {
  value: string;
  onChange: (val: string) => void;
  onSave: (val: string) => void;
  onCancel?: () => void;
  debounceMs?: number;
  renderDisplayValue?: (val: string) => React.ReactNode;
  isInputValid?: boolean;
};

export const InlineEditableInput = ({
  value,
  onChange,
  debounceMs = 500,
  renderDisplayValue,
  className,
  onSave,
  onCancel,
  isInputValid = true,
  ...inputProps
}: InlineEditableInputProps) => {
  const [editing, setEditing] = useState(false);
  const [internalValue, setInternalValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!editing) setInternalValue(value);
  }, [value, editing]);

  const debouncedChange = useRef(
    debounce((val: string) => {
      onChange(val);
    }, debounceMs)
  ).current;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInternalValue(val);
    debouncedChange(val);
  };

  const exitEditMode = (callSave:boolean) => {
    console.log("exitEditMode", isInputValid);
    if(!isInputValid) return;
    setEditing(false);
    debouncedChange.flush();
    if (callSave) {
      onSave(internalValue);
    } else {
      setInternalValue(value);
      onCancel?.();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      exitEditMode(true);
    } else if (e.key === "Escape") {
      e.preventDefault();
      exitEditMode(false);
    }
  };

  const handleBlur = () => {
    exitEditMode(true);
  };

  if (editing) {
    return (
      <Input
        {...inputProps}
        ref={inputRef}
        value={internalValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoFocus
        className={className}
      />
    );
  }

  return (
    <div className="inline-flex items-center min-h-[36px]" onClick={() => setEditing(true)}>
      {renderDisplayValue ? (
        renderDisplayValue(value)
      ) : value ? (
        <span className="text-gray-800">{value}</span>
      ) : (
        <span className="text-gray-400 italic">Click to edit</span>
      )}
    </div>
  );
};
