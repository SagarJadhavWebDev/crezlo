"use client";
import { SelectHTMLAttributes, forwardRef } from 'react';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: { value: string; label: string }[];
  error?: string;
  success?: string;
  size?: 'sm' | 'md' | 'lg';
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, options, error, success, size = 'md', className = '', required, ...props },
    ref
  ) => {
    const sizeClasses = {
      sm: 'px-2 py-1',
      md: 'px-3 py-2',
      lg: 'px-4 py-3',
    };

    const stateClasses = error
      ? 'border-red-300'
      : success
      ? 'border-green-300'
      : '';

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-1">
            {label}
            {required && <span className="text-red-500">*</span>}
          </label>
        )}

        <select
          ref={ref}
          className={`form-select w-full ${sizeClasses[size]} ${stateClasses} ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error && <div className="text-xs mt-1 text-red-500">{error}</div>}
        {success && <div className="text-xs mt-1 text-green-500">{success}</div>}
      </div>
    );
  }
);

Select.displayName = 'Select';