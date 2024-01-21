import React from "react";

type TextInputProps = {
  name: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  label: string;
};
const TextInput = ({
  name,
  type,
  onChange,
  placeholder,
  value,
  label,
}: TextInputProps) => {
  return (
    <div className="flex flex-col items-start col-span-1">
      <label className="text-blue-30">{label}</label>
      <input
      className="rounded-lg  focus:border-blue-20 focus:outline-none box-border border-2 border-gray-10 px-4 py-3 lg:w-96 my-2"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
