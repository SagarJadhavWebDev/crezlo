import React, { forwardRef, HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/theme';
import { generateComponentClasses } from '../../utils/themeUtils';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  speed?: 'slow' | 'normal' | 'fast';
  thickness?: 'thin' | 'normal' | 'thick';
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      className,
      size = 'md',
      variant = 'primary',
      speed = 'normal',
      thickness = 'normal',
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12',
    };

    const speedClasses = {
      slow: 'animate-spin [animation-duration:2s]',
      normal: 'animate-spin',
      fast: 'animate-spin [animation-duration:0.5s]',
    };

    const thicknessClasses = {
      thin: 'stroke-1',
      normal: 'stroke-2',
      thick: 'stroke-3',
    };

    const variantClasses = {
      primary: 'text-primary-600',
      secondary: 'text-secondary-600',
      accent: 'text-accent-600',
      success: 'text-green-600',
      warning: 'text-yellow-600',
      error: 'text-red-600',
      info: 'text-blue-600',
    };

    const baseClasses = `inline-block ${sizeClasses[size]} ${speedClasses[speed]} ${variantClasses[variant]}`;
    const componentClasses = generateComponentClasses(
      baseClasses,
      variant,
      size,
      false,
      false,
      className
    );

    return (
      <div ref={ref} className={componentClasses} {...props}>
        <svg
          className={`${sizeClasses[size]} ${thicknessClasses[thickness]}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';

