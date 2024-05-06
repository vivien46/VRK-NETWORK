import React from 'react';
import Input, { InputProps } from './Input'; // Importation de l'interface InputProps

// Définition de l'interface pour les props du composant Form
export interface FormProps {
  action: string;
  inputs: InputProps[]; // Utilisation de l'interface InputProps pour typer les éléments de l'array
}

// Définition du composant Form avec des props typées
const Form: React.FC<FormProps> = ({ action, inputs }) => {
  return (
    <form action={action}>
      {/* Utilisation de map pour rendre chaque input */}
      {inputs.map((input, index) => (
        <Input
          key={index}
          label={input.label}
          type={input.type}
          field={input.field}
          isRequired={input.isRequired}
        />
      ))}
      <button type="submit">Envoyer</button> {/* Bouton de soumission du formulaire */}
    </form>
  );
};

export default Form;
