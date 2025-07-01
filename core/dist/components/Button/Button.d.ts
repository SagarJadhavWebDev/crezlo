import React, { ButtonHTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/theme';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseComponentProps {
    children: React.ReactNode;
    asChild?: boolean;
    fullWidth?: boolean;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
