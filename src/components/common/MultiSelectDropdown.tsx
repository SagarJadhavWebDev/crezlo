"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";

interface Option {
  lable: string;
  value: string;
}

interface MultiSelectDropdownProps {
  options: Option[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  selectedValues?: string[];
}

export default function MultiSelectDropdown({
  options,
  onChange,
  placeholder = "Select options",
  selectedValues = [],
}: MultiSelectDropdownProps) {
  const [selected, setSelected] = useState<string[]>(selectedValues || []);

  // Update selected state when selectedValues prop changes
  useEffect(() => {
    setSelected(selectedValues);
  }, [selectedValues]);

  const handleSelect = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    
    setSelected(newSelected);
    onChange(newSelected);
  };

  const getSelectedLabels = () => {
    if (selected.length === 0) return placeholder;
    
    if (selected.length === 1) {
      const selectedOption = options.find(opt => opt.value === selected[0]);
      return selectedOption?.lable || placeholder;
    }
    
    return `${selected.length} items selected`;
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-1">
        Channels <span className="text-red-500">*</span>
      </label>
      <Menu as="div" className="relative inline-flex w-full">
        {({ open }) => (
          <>
            <MenuButton
              className="btn w-full justify-between min-w-[11rem] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
              aria-label="Select options"
            >
              <span className="flex items-center">
                <span>{getSelectedLabels()}</span>
              </span>
              <svg
                className="shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500"
                width="11"
                height="7"
                viewBox="0 0 11 7"
              >
                <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
              </svg>
            </MenuButton>
            <Transition
              as="div"
              className="z-10 absolute top-full left-0 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1"
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 -translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-out duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <MenuItems className="font-medium text-sm text-gray-600 dark:text-gray-300 divide-y divide-gray-200 dark:divide-gray-700/60 focus:outline-hidden max-h-60 overflow-y-auto">
                {options?.map((option, optionIndex) => (
                  <MenuItem key={optionIndex}>
                    {({ active }) => (
                      <button
                        className={`flex items-center justify-between w-full py-2 px-3 cursor-pointer ${
                          active ? "bg-gray-50 dark:bg-gray-700/20" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelect(option.value);
                        }}
                      >
                        <span>{option.lable}</span>
                        {selected.includes(option.value) && (
                          <svg
                            className="shrink-0 mr-2 fill-current text-violet-500"
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                          >
                            <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                          </svg>
                        )}
                      </button>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
} 