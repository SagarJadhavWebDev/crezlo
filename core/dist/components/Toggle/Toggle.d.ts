import React, { InputHTMLAttributes } from 'react';
import { BaseComponentProps } from '../../types/theme';
export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseComponentProps {
    label?: string;
    description?: string;
    onCheckedChange?: (checked: boolean) => void;
}
export declare const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLInputElement>>;
