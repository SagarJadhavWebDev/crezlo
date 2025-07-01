import React, { forwardRef, HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/theme';
import { generateComponentClasses } from '../../utils/themeUtils';

export interface AlertProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

export interface AlertTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export interface AlertDescriptionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      children,
      className,
      size = 'md',
      variant = 'info',
      title,
      icon,
      closable = false,
      onClose,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'rtc-alert';
    const componentClasses = generateComponentClasses(
      baseClasses,
      variant,
      size,
      false,
      false,
      className
    );

    const defaultIcons = {
      success: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      warning: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      error: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      info: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    };

    const displayIcon = icon || (variant in defaultIcons ? defaultIcons[variant as keyof typeof defaultIcons] : defaultIcons.info);

    return (
      <div ref={ref} className={componentClasses} {...props}>
        <div className="flex">
          {displayIcon && (
            <div className="shrink-0">
              {displayIcon}
            </div>
          )}
          <div className={`${displayIcon ? 'ml-3' : ''} flex-1`}>
            {title && (
              <h5 className="mb-1 font-medium leading-none tracking-tight">
                {title}
              </h5>
            )}
            <div className="text-sm [&_p]:leading-relaxed">
              {children}
            </div>
          </div>
          {closable && onClose && (
            <button
              onClick={onClose}
              className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-gray-400"
              aria-label="Close"
            >
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }
);

export const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h5 ref={ref} className={`mb-1 font-medium leading-none tracking-tight ${className || ''}`} {...props}>
        {children}
      </h5>
    );
  }
);

export const AlertDescription = forwardRef<HTMLDivElement, AlertDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={`text-sm [&_p]:leading-relaxed ${className || ''}`} {...props}>
        {children}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
AlertTitle.displayName = 'AlertTitle';
AlertDescription.displayName = 'AlertDescription';

