import React from "react";

interface FieldErrorProps {
  error?: string | string[];
}

export const FormFieldError: React.FC<FieldErrorProps> = ({ error }) => {
  if (!error) return null;

  if (Array.isArray(error)) {
    return (
      <ul className="text-xs font-medium mt-1 text-red-500">
        {error.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    );
  }

  return <p className="text-xs font-medium mt-1 text-red-500">{error}</p>;
};
