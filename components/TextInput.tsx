import React from "react";

type TextInputProps = {
  name: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value?: string | null,
  label: string;
  checked?: boolean
  className?:string
  min?: number | string | undefined
  maxLength?: number | undefined
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
  min,
  maxLength
}: TextInputProps) => {
  return (
    
    <div className="flex flex-col  col-span-1 my-1">
      <label className="text-blue-30">{label}</label>
      <input
      className={`rounded-lg focus:border-blue-20  focus:outline-slate-500  border border-neutral-300  px-4 py-3 lg:w-96 my-2 md:mx-1 ${className ? className : undefined} `}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value || ""}
        onChange={onChange}
        checked={checked ? checked : undefined}
        required 
        min={min? min:undefined}
        maxLength = {maxLength? maxLength:undefined} 
      />
    </div>
  );
};

export default TextInput;
