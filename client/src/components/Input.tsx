import React from 'react';

// Définition de l'interface InputProps
export interface InputProps {
  label: string;
  type: string;
  field: string;
  isRequired?: boolean;
}

// Définition du composant Input avec des props typées
const Input: React.FC<InputProps> = ({ label, type, field, isRequired = false }) => {
  return (
    <>
      <label htmlFor={field} className="text-red-500">
        {' '}
        {label}{' '}
      </label>
      <input type={type} id={field} name={field} required={isRequired} />
    </>
  );
};

export default Input;
