import React from 'react'
type Fasilsprop = {
    index: number | string;
    icon: JSX.Element
    titel: string;
    desc:string
  };
export default function CardFasil({index,icon,titel,desc}:Fasilsprop) {
  return (
    <div
    key={index}
    className="flex items-center text-center p-5 bg-blue-20 md:block md:bg-blue-30 md:p-8 rounded-2xl"
  >
    {icon}
    <div className="text-left mx-5">
      <h1 className="font-bold text-white-10 my-2 text-xl md:text-lg lg:text-xl  md:text-center">
        {titel}
      </h1>
      <p className="text font-light text-gray-10 text-left w-52 text-sm md:text-base  md:w-56 md:h-auto  ">
        {desc}
      </p>
    </div>
    </div>
  )
}
