import React, { InputHTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/theme';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseComponentProps {
    label?: string;
    helperText?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
