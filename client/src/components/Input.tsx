import React from 'react';

export interface InputProps {
  label: string;
  type: string;
  field: string;
  placeholder?: string;
  isRequired?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  field,
  placeholder,
  isRequired = false,
}) => {
  return (
    <>
      <label htmlFor={field} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={field}
        name={field}
        placeholder={placeholder}
        required={isRequired}
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
      />
    </>
  );
};

export default Input;
