import React from 'react';

interface ButtonProps {
  content: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ content }) => {
  return (
    <button className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
      {content}
    </button>
  );
};

export default Button;
