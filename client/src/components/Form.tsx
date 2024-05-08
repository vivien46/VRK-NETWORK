import React from 'react';
import Input, { InputProps } from './Input';
import Button from './Button';

export interface FormProps {
  action: string;
  inputs: InputProps[];
  className?: string;
}

const Form: React.FC<FormProps> = ({ action, inputs, className }) => {
  return (
    <div className="m-[15px] p-[15px] w-[100%] flex flex-row justify-center items-center">
      <form action={action} className={className}>
        {inputs.map((input) => (
          <Input
            key={input.label}
            label={input.label}
            type={input.type}
            field={input.field}
            isRequired={input.isRequired}
          />
        ))}
        <br />
        <Button content="Envoyer" />
      </form>
    </div>
  );
};

export default Form;
