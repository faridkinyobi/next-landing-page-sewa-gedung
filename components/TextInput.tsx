import React from "react";

type TextInputProps = {
  name: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string | null,
  label: string;
  checked?: boolean
  className?:string
  min?: number | string | undefined
};

const TextInput = ({
  name,
  type,
  onChange,
  placeholder,
  value,
  label,
  checked,
  className,
  min
}: TextInputProps) => {
  return (
    
    <div className="flex flex-col  col-span-1 my-1">
      <label className="text-blue-30">{label}</label>
      <input
      className={`rounded-lg focus:border-blue-20 focus:outline-none box-border border-2 border-gray-10 px-4 py-3 lg:w-96 my-2 md:mx-1 ${className ? className : undefined} `}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value || ""}
        onChange={onChange}
        checked={checked ? checked : undefined}
        required 
        min={min? min:undefined}
      />
    </div>
  );
};

export default TextInput;
