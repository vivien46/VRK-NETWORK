import React from 'react';
import Button from './components/Button';
import Form, { FormProps } from './components/Form';

const App: React.FC = () => {
  const formInputs = [
    { label: 'Nom', type: 'text', field: 'name', isRequired: true },
    { label: 'Email', type: 'email', field: 'email', isRequired: true },
    { label: 'Message', type: 'text', field: 'message', isRequired: false },
  ];

  const formProps: FormProps = {
    action: 'POST',
    inputs: formInputs,
  };

  return (
    <>
      <h1>Mon Application</h1>
      <Button content="Clique ici" />

      <p>Exemples d'utilisation de Forms</p>
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
