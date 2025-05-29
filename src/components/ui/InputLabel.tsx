import React, { type InputHTMLAttributes } from "react";

interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
}

const InputLabel: React.FC<InputLabelProps> = ({ label, error, id, ...inputProps }) => {
  return (
    <label htmlFor={id} className="block mb-4">
      <span className="text-gray-700 font-medium">{label}</span>
      <input
        id={id}
        {...inputProps}
        className={`mt-1 block w-full rounded-md border p-2 ${error ? "border-red-500" : "border-gray-300"
          }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </label>
  );
};

export default InputLabel;
