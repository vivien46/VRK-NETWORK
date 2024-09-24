import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#100d28] text-white shadow-md py-6 w-full mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Section Contact */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-white text-lg font-bold mb-2">Contactez-nous</h2>
            <p className="text-gray-400">Vrk-Network@gmail.com</p>
          </div>

          {/* Section Réseaux Sociaux */}
          <div className="text-center md:text-right">
            <h2 className="text-white text-lg font-bold mb-2">Suivez-nous</h2>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Section Liens avec Contact et Politique de confidentialité sur la même ligne */}
        <div className="mt-6">
          <ul className="text-gray-400 text-center md:text-left space-y-2 md:flex md:justify-center md:space-y-0 md:space-x-4">
            <li>
              <a href="#" className="hover:text-white transition duration-300">À propos</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">Contactez-nous</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">Politique de confidentialité</a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          © 2024 Vrk-Network. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
