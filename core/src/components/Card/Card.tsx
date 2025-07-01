import React, { forwardRef, HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/theme';
import { generateComponentClasses } from '../../utils/themeUtils';

export interface CardProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  children: React.ReactNode;
  padding?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'soft' | 'medium' | 'hard';
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      size = 'md',
      variant = 'primary',
      padding = true,
      shadow = 'sm',
      ...props
    },
    ref
  ) => {
    const baseClasses = `rtc-card shadow-${shadow} ${padding ? 'p-6' : ''}`;
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
        {children}
      </div>
    );
  }
);

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={`rtc-card-header ${className || ''}`} {...props}>
        {children}
      </div>
    );
  }
);

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, className, as: Component = 'h3', ...props }, ref) => {
    return (
      <Component ref={ref} className={`rtc-card-title ${className || ''}`} {...props}>
        {children}
      </Component>
    );
  }
);

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p ref={ref} className={`rtc-card-description ${className || ''}`} {...props}>
        {children}
      </p>
    );
  }
);

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={`rtc-card-content ${className || ''}`} {...props}>
        {children}
      </div>
    );
  }
);

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={`rtc-card-footer ${className || ''}`} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardTitle.displayName = 'CardTitle';
CardDescription.displayName = 'CardDescription';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

