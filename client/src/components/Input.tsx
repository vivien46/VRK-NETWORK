import React from 'react';

export interface InputProps {
  label: string;
  type: string;
  field: string;
  isRequired?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({ label, type, field, isRequired = false, className }) => {
  return (
    <>
      <label htmlFor={field} className="text-white-500">
        {label} :
      </label><br />
      <input type={type} id={field} name={field} required={isRequired} className={className}/><br />
    </>
  );
};

export default Input;
