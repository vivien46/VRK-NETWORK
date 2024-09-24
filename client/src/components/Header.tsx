import React, { useState } from 'react';


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#100d28] text-white ">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center">
          <img className="h-20 w-auto mr-3" src="./src/assets/photo/Logo.png" alt="Logo" />
          <h1 className="text-gradient[#f0abfc] text-xl font-semibold">VRK-NETWORK</h1>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-5">
            <a href="#" className="hover:text-gray-300 transition duration-300">Accueil</a>
            <a href="#" className="hover:text-gray-300 transition duration-300">Connexion</a>
            <a href="#" className="hover:text-gray-300 transition duration-300">Déconnexion</a>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden px-4 pb-4">
          <a href="#" className="block py-2 hover:text-gray-300 transition duration-300">Home</a>
          <a href="#" className="block py-2 hover:text-gray-300 transition duration-300">Connexion</a>
          <a href="#" className="block py-2 hover:text-gray-300 transition duration-300">Déconnexion</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
