import React from 'react';

// Définition de l'interface pour les props
interface ButtonProps {
  content: string; // Texte du bouton
}

// Définition du composant Button avec des props typées
const Button: React.FC<ButtonProps> = ({ content }) => {
  return (
    <button className="text-red-500">{content}</button>
    // Utilisation de 'color' comme style CSS du texte du bouton
  );
};

export default Button;
