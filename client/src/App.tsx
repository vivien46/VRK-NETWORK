import React, { useEffect, useState } from "react";
import Splashscreen from "./components/Splashscreen";
import StarsCanvas from "./components/Starbackground";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';


const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const formInputs = [
    { label: 'Adresse email', type: 'email', field: 'email', isRequired: true },
    { label: 'Mot de passe', type: 'password', field: 'password', isRequired: true },
    { label: 'Nom d\'utilisateur', type: 'text', field: 'username', isRequired: true },
  ];

  return (
    <>
      {isLoading ? (
        <Splashscreen />
      ) : (
        <div className="relative flex flex-col min-h-screen bg-[#100d28] text-white">
          {/* Fond étoilé sur toute la page */}
          <StarsCanvas />

          {/* Header */}
          <div className="relative z-10">
            <Header />
          </div>

          {/* Formulaire design */}
          <div className="flex-grow container mx-auto mt-8 p-4 relative z-10">
            <div className="bg-[#1c1c28] shadow-2xl backdrop-blur-lg rounded-lg max-w-lg mx-auto p-10">
              <h2 className="text-3xl font-extrabold text-white text-center mb-8">
                Connexion à la Messagerie
              </h2>
              <Form action="/submit" inputs={formInputs} className="max-w-lg mx-auto" />
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
