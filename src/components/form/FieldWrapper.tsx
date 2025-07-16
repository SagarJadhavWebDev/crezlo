import { ReactNode } from 'react';

interface FieldWrapperProps {
  label?: string;
  error?: string;
  children: ReactNode;
}

export function FieldWrapper({ label, error, children }: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium">{label}</label>}
      {children}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
