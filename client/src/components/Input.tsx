import React from 'react';

interface InputProps {
  label: string;
  type: string;
  field: string;
  isRequired: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, field, isRequired }) => {
  return (
    <div className="mb-4">
      <label htmlFor={field} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={field}
        name={field}
        type={type}
        required={isRequired}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default Input;
