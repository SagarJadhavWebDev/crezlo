import React, { forwardRef, HTMLAttributes, useEffect, useCallback } from 'react';
import { BaseComponentProps } from '../../types/theme';
import { generateComponentClasses } from '../../utils/themeUtils';

export interface ModalProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  backdrop?: 'blur-sm' | 'dark' | 'light';
  animation?: 'fade' | 'scale' | 'slide-up' | 'slide-down';
}

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      className,
      size = 'md',
      variant = 'primary',
      open = false,
      onClose,
      closeOnBackdrop = true,
      closeOnEscape = true,
      showCloseButton = true,
      backdrop = 'blur-sm',
      animation = 'scale',
      ...props
    },
    ref
  ) => {
    const handleEscape = useCallback((event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEscape && onClose) {
        onClose();
      }
    }, [closeOnEscape, onClose]);

    const handleBackdropClick = useCallback((event: React.MouseEvent) => {
      if (event.target === event.currentTarget && closeOnBackdrop && onClose) {
        onClose();
      }
    }, [closeOnBackdrop, onClose]);

    useEffect(() => {
      if (open && closeOnEscape) {
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
      }
    }, [open, handleEscape, closeOnEscape]);

    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'unset';
        };
      }
    }, [open]);

    if (!open) return null;

    const backdropClasses = {
      blur: 'backdrop-blur-xs bg-black/50',
      dark: 'bg-black/75',
      light: 'bg-white/75',
    };

    const animationClasses = {
      fade: 'animate-fade-in',
      scale: 'animate-scale-in',
      'slide-up': 'animate-slide-up',
      'slide-down': 'animate-slide-down',
    };

    const sizeClasses = {
      xs: 'max-w-xs',
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
    };

    const baseClasses = `fixed inset-0 z-50 flex items-center justify-center p-4`;
    const modalClasses = `relative bg-background rounded-lg shadow-xl w-full ${sizeClasses[size]} ${animationClasses[animation]}`;
    
    const componentClasses = generateComponentClasses(
      modalClasses,
      variant,
      size,
      false,
      false,
      className
    );

    return (
      <div className={baseClasses} onClick={handleBackdropClick}>
        <div className={`fixed inset-0 ${backdropClasses[backdrop]}`} />
        <div ref={ref} className={componentClasses} {...props}>
          {showCloseButton && onClose && (
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Close"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          {children}
        </div>
      </div>
    );
  }
);

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className || ''}`} {...props}>
        {children}
      </div>
    );
  }
);

export const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ children, className, as: Component = 'h2', ...props }, ref) => {
    return (
      <Component ref={ref} className={`text-lg font-semibold leading-none tracking-tight ${className || ''}`} {...props}>
        {children}
      </Component>
    );
  }
);

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={`p-6 pt-0 ${className || ''}`} {...props}>
        {children}
      </div>
    );
  }
);

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={`flex items-center justify-end space-x-2 p-6 pt-0 ${className || ''}`} {...props}>
        {children}
      </div>
    );
  }
);

Modal.displayName = 'Modal';
ModalHeader.displayName = 'ModalHeader';
ModalTitle.displayName = 'ModalTitle';
ModalContent.displayName = 'ModalContent';
ModalFooter.displayName = 'ModalFooter';

