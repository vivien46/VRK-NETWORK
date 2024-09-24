import React from 'react';
import logo from '../assets/photo/Logo.png'; 
const Splashscreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#100d28]">
      <img className="h-45 w-auto" src={logo} alt="Logo" />
    </div>
  );
};

export default Splashscreen;
