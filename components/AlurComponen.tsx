import React from 'react'
type TextAlurProps = {
    desc: string;
    Number: string;
  };


 const AlurComponen = ({ Number, desc }: TextAlurProps) => {
  return (
    <div
    className="flex bg-green-10 py-4 text-center rounded-xl  my-5 shadow-md shadow-slate-800"
  >
    <span
      className={`p-4 bg-gray-10 absolute rounded-full top-[1rem] left-[-2.8rem] `}
    ></span>
    <h3 className="bg-blue-30 py-1 px-3 text-white-10 ml-2 rounded-lg font-medium">
      {Number}
    </h3>
    <p className="ml-[1.4rem] mr-3 py-1">{desc}</p>
  </div>
  )
}
export default AlurComponen