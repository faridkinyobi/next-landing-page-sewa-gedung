
import React from 'react'
type ButtonProp= {
    type :'button'|'submit';
    title : string;
    className: string;
    onClick?: () => void;
}
const Button = ({type,title,className,onClick}:ButtonProp) => {
  return (
    <button className={`rounded-full font-semibold text-base ${className}`}
    type={type}
    onClick={onClick}
    >
        {title}
    </button>
  )
}

export default Button