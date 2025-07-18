import { InputHTMLAttributes, forwardRef } from "react";

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: string;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({ label, className = "", ...props }, ref) => {
  return (
    <label className={`flex items-center ${className}`}>
      <input
        type="radio"
        ref={ref}
        className="form-radio text-violet-600 focus:ring-violet-500"
        onChange={(e) => {
          if (props?.onChange) {
            props.onChange(e);
          }
        }}
        {...props}
      />
      {label && <span className="text-sm ml-2">{label}</span>}
    </label>
  );
});

Radio.displayName = "Radio";
