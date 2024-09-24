import React from "react";

interface InputProps {
  label: string;
  type: string;
  field: string;
  isRequired: boolean;
}

interface FormProps {
  action: string;
  inputs: InputProps[];
  className?: string;
}

const Form: React.FC<FormProps> = ({ action, inputs, className }) => {
  return (
    <form action={action} className={`${className} space-y-6`}>
      {inputs.map((input) => (
        <div key={input.field} className="relative">
          <input
            id={input.field}
            type={input.type}
            required={input.isRequired}
            placeholder=" "
            className="peer w-full px-4 py-3 bg-[#2b2b40] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a4fff] transition-all duration-300"
          />
          <label
            htmlFor={input.field}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all duration-300"
          >
            {input.label}
          </label>
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-[#8a4fff] hover:bg-[#a37eff] text-white font-semibold py-3 rounded-md transition-colors duration-300 transform hover:scale-105"
      >
        Soumettre
      </button>
    </form>
  );
};

export default Form;
