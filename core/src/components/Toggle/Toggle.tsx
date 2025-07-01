import React, { forwardRef, InputHTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/theme';
import { generateComponentClasses } from '../../utils/themeUtils';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseComponentProps {
  label?: string;
  description?: string;
  onCheckedChange?: (checked: boolean) => void;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      className,
      size = 'md',
      variant = 'primary',
      disabled = false,
      label,
      description,
      checked,
      onCheckedChange,
      onChange,
      id,
      ...props
    },
    ref
  ) => {
    const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = event.target.checked;
      onCheckedChange?.(newChecked);
      onChange?.(event);
    };

    const sizeClasses = {
      xs: 'h-4 w-7',
      sm: 'h-5 w-9',
      md: 'h-6 w-11',
      lg: 'h-7 w-12',
      xl: 'h-8 w-14',
    };

    const thumbSizeClasses = {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-7 w-7',
    };

    const translateClasses = {
      xs: 'translate-x-3',
      sm: 'translate-x-4',
      md: 'translate-x-5',
      lg: 'translate-x-5',
      xl: 'translate-x-6',
    };

    const variantClasses = {
      primary: 'peer-checked:bg-primary-600 peer-focus:ring-primary-500',
      secondary: 'peer-checked:bg-secondary-600 peer-focus:ring-secondary-500',
      accent: 'peer-checked:bg-accent-600 peer-focus:ring-accent-500',
      success: 'peer-checked:bg-green-600 peer-focus:ring-green-500',
      warning: 'peer-checked:bg-yellow-600 peer-focus:ring-yellow-500',
      error: 'peer-checked:bg-red-600 peer-focus:ring-red-500',
      info: 'peer-checked:bg-blue-600 peer-focus:ring-blue-500',
    };

    const baseToggleClasses = `
      relative inline-flex ${sizeClasses[size]} shrink-0 cursor-pointer rounded-full border-2 border-transparent 
      transition-colors duration-200 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-offset-2
      bg-secondary-200 ${variantClasses[variant]}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `;

    const thumbClasses = `
      pointer-events-none inline-block ${thumbSizeClasses[size]} transform rounded-full bg-white shadow-lg ring-0 
      transition duration-200 ease-in-out translate-x-0 peer-checked:${translateClasses[size]}
    `;

    const componentClasses = generateComponentClasses(
      baseToggleClasses,
      variant,
      size,
      disabled,
      false,
      className
    );

    return (
      <div className="flex items-center">
        <div className="flex items-center">
          <input
            ref={ref}
            type="checkbox"
            id={toggleId}
            className="sr-only peer"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            {...props}
          />
          <label
            htmlFor={toggleId}
            className={componentClasses}
          >
            <span className={thumbClasses} />
          </label>
        </div>
        
        {(label || description) && (
          <div className="ml-3">
            {label && (
              <label
                htmlFor={toggleId}
                className={`text-sm font-medium cursor-pointer ${disabled ? 'text-secondary-400' : 'text-foreground'}`}
              >
                {label}
              </label>
            )}
            {description && (
              <p className={`text-sm ${disabled ? 'text-secondary-400' : 'text-secondary-600'}`}>
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';

