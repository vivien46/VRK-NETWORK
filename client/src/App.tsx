import React from 'react';
import Button from './components/Button';
import Form, { FormProps } from './components/Form'; // Assure-toi que FormProps est exporté depuis le composant Form

const App: React.FC = () => {
  // Définition des inputs pour le formulaire
  const formInputs = [
    { label: 'Nom', type: 'text', field: 'name', isRequired: true },
    { label: 'Email', type: 'email', field: 'email', isRequired: true },
    { label: 'Message', type: 'text', field: 'message', isRequired: false },
  ];

  // Props pour le composant Form
  const formProps: FormProps = {
    action: 'https://exemple.com/api/form-submit', // URL où le formulaire sera envoyé
    inputs: formInputs, // Inputs à afficher dans le formulaire
  };

  return (
    <>
      <h1>Mon Application</h1>
      {/* Utilisation du composant Button */}
      <Button content="Clique ici" />

      {/* Utilisation du composant Form avec les props spécifiées */}
      <Form {...formProps} />
      <Form action={formProps.action} inputs={formProps.inputs} />
      <Form
        action="POST"
        inputs={[
          { label: 'InputTest', type: 'password', field: 'name', isRequired: true },
        ]}
      />
      <Form action="POST" inputs={[formProps.inputs[2]]} />
    </>
  );
};

export default App;
