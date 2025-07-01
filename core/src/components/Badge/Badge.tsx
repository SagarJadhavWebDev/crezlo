import React, { forwardRef, HTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/theme';
import { generateComponentClasses } from '../../utils/themeUtils';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  children: React.ReactNode;
  dot?: boolean;
  outline?: boolean;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      children,
      className,
      size = 'md',
      variant = 'primary',
      dot = false,
      outline = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = `rtc-badge ${outline ? 'border-current bg-transparent' : ''}`;
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
        {dot && (
          <span className="mr-1 h-2 w-2 rounded-full bg-current" />
        )}
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

