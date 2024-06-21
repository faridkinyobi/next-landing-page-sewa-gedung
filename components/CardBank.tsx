import React, { useState } from "react";
import { toast } from "react-toastify";
import { BsFillCaretLeftFill, BsFillCaretDownFill } from "react-icons/bs";
import Image from "next/image";

type PaymentMethodCardProps = {
  image: string;
  title: string;
  NoRekening: string;
};
export default function CardBank({
  image,
  title,
  NoRekening,
}: PaymentMethodCardProps) {
  const [iconRek, setIconRek] = useState(false);
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Nomer Rekening Berhasil Dicopy", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handelClikIconRek = () => {
    setIconRek(!iconRek);
  };
  return (
    <div
      className={` card box-border border-2 border-gray-10 rounded-xl mt-2 max-w-80 w-[18rem] md:w-96 delay-200  transition-all ease-in-out ${
        !iconRek ? " h-[5rem]" : " h-auto "
      }`}
    >
      <div className=" flex items-center justify-around">
        <Image
          className=" w-24 md:max-h-16 pt-1 md:tp-0 max-h-20 max-w-16 md:max-w-20 "
          src={image}
          alt="98x100"
          width={91}
          height={100}
          layout="responsive"
          loading="lazy"
        />
        <h1 className="text-rek text-center font-bold text-xl text-white-10">
          {title}
        </h1>
        {iconRek ? (
          <BsFillCaretDownFill
            onClick={handelClikIconRek}
            className="text-white-10 font-bold text-3xl  cursor-pointer"
          />
        ) : (
          <BsFillCaretLeftFill
            onClick={handelClikIconRek}
            className="text-white-10 font-bold text-3xl   cursor-pointer"
          />
        )}
      </div>
      <div
        className={`flex justify-around   text-center delay-75 transition-all ease-in-out mb-2 ${
          !iconRek ? "opacity-0 hidden" : ""
        }`}
      >
        <h1 className="text-xl text-left text-white-10">{NoRekening}</h1>
        <h4
          className=" bg-slate-300 cursor-pointer py-2 px-1"
          onClick={() => copyToClipboard(NoRekening)}
        >
          Salin Nomer
        </h4>
      </div>
    </div>
  );
}
