import React from 'react';
import Input, { InputProps } from './Input';
import Button from './Button';

export interface FormProps {
  action: string;
  inputs: InputProps[];
}

const Form: React.FC<FormProps> = ({ action, inputs }) => {
  return (
    <form action={action}>
      {inputs.map((input) => (
        <Input
          key={input.label}
          label={input.label}
          type={input.type}
          field={input.field}
          isRequired={input.isRequired}
        />
      ))}
      <Button content="Envoyer" />
    </form>
  );
};

export default Form;
