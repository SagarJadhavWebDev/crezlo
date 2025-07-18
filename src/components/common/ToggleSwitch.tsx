import { useState } from 'react';

type ToggleSwitchProps = {
  label?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
};

export const ToggleSwitch = ({
  label,
  defaultChecked = false,
  disabled = false,
  onChange,
  size = 'md',
}: ToggleSwitchProps) => {
  const [checked, setChecked] = useState(defaultChecked);
  const id = `switch-${Math.random().toString(36).substring(2, 9)}`;

  const handleChange = () => {
    if (!disabled) {
      const newValue = !checked;
      setChecked(newValue);
      onChange?.(newValue);
    }
  };

  const sizeClasses = {
    sm: 'w-10 h-5 after:w-4 after:h-4',
    md: 'w-12 h-6 after:w-5 after:h-5',
    lg: 'w-14 h-7 after:w-6 after:h-6',
  };

  return (
    <div className="flex items-center">
      <div className="form-switch">
        <input
          type="checkbox"
          id={id}
          className="sr-only"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
        />
        <label
          className={`bg-gray-400 dark:bg-gray-700 ${sizeClasses[size]} ${
            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          }`}
          htmlFor={id}
        >
          <span
            className="bg-white shadow-sm"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Switch label</span>
        </label>
      </div>
      {label && (
        <div className="text-sm text-gray-400 dark:text-gray-500 italic ml-2">
          {disabled ? 'Disabled' : checked ? 'On' : 'Off'}
        </div>
      )}
    </div>
  );
};