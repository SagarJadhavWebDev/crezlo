import { InputHTMLAttributes, forwardRef } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <label className={`flex items-center ${className}`}>
        <input
          type="checkbox"
          ref={ref}
          className="form-checkbox"
          {...props}
        />
        {label && <span className="text-sm ml-2">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';