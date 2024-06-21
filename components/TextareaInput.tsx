import React from "react";

type TextInputProps = {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  value: string | null;
  label: string;
  className?: string;
  maxLength?: number;
};

const TextAralInput = ({
  name,
  onChange,
  placeholder,
  value,
  label,
  className,
  maxLength,
}: TextInputProps) => {
  return (
    <div className="flex flex-col col-span-1 my-1">
      <label className="text-blue-30">{label}</label>
      <textarea
        className={`rounded-lg focus:border-blue-20 focus:outline-slate-500 border border-neutral-300 px-4 py-3 lg:w-96 my-2 md:mx-1 ${
          className ? className : ""
        }`}
        placeholder={placeholder}
        name={name}
        value={value || ""}
        onChange={onChange}
        maxLength={maxLength}
        required
      />
    </div>
  );
};

export default TextAralInput;
