import React from 'react';
import Input, { InputProps } from './Input';
import Button from './Button';

export interface FormProps {
  title?: string;
  action: string;
  inputs: InputProps[];
  submitBtnText?: string;
}

const Form: React.FC<FormProps> = ({
  title,
  action,
  inputs,
  submitBtnText = 'Submit',
}) => {
  return (
    <div className="max-w-md w-full rounded-lg shadow-lg overflow-hidden">
      <div className="px-8 py-8">
        {title && (
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-4">
            {title}
          </h2>
        )}
        <form action={action} className="space-y-6">
          {inputs.map((input) => (
            <Input
              key={input.label}
              label={input.label}
              type={input.type}
              field={input.field}
              placeholder={input.placeholder}
              isRequired={input.isRequired}
            />
          ))}
          <Button content={submitBtnText} />
        </form>
      </div>
    </div>
  );
};

export default Form;
