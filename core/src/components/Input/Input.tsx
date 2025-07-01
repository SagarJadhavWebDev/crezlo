import React, { forwardRef, InputHTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/theme';
import { generateComponentClasses } from '../../utils/themeUtils';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseComponentProps {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size = 'md',
      variant = 'primary',
      disabled = false,
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      fullWidth = false,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);
    
    const baseClasses = `rtc-input ${fullWidth ? 'w-full' : ''} ${hasError ? 'border-red-500 focus-visible:ring-red-500' : ''}`;
    const componentClasses = generateComponentClasses(
      baseClasses,
      variant,
      size,
      disabled,
      false,
      className
    );

    const containerClasses = `${fullWidth ? 'w-full' : ''} ${className ? 'space-y-2' : ''}`;

    return (
      <div className={containerClasses}>
        {label && (
          <label
            htmlFor={inputId}
            className={`block text-sm font-medium ${hasError ? 'text-red-600' : 'text-foreground'}`}
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <div className={`h-4 w-4 ${hasError ? 'text-red-500' : 'text-muted-foreground'}`}>
                {leftIcon}
              </div>
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            className={`${componentClasses} ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''}`}
            disabled={disabled}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <div className={`h-4 w-4 ${hasError ? 'text-red-500' : 'text-muted-foreground'}`}>
                {rightIcon}
              </div>
            </div>
          )}
        </div>
        
        {(helperText || error) && (
          <p className={`text-sm ${hasError ? 'text-red-600' : 'text-muted-foreground'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

