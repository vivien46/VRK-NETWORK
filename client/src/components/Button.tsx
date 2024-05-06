import React from 'react';

interface ButtonProps {
  content: string;
}

const Button: React.FC<ButtonProps> = ({ content }) => {
  return <button className="text-red-500">{content}</button>;
};

export default Button;
