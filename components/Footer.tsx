import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTelephone,
} from "react-icons/bs";
import NavLink from "./NavLink";
import NavData from "./itemsData";
import ImgComponent from "./ImgComponen";

const Footer = () => {
  return (
    <footer className="pt-10 bg-blue-20">
      <div className=" flex flex-wrap justify-between mx-3 md:mx-10 lg:mx-28 text-white-10 items-center">
        <div className=" font-light text-sm ">
          <ImgComponent
            className="w-44 h-auto"
            src="/Image/logo5coklat.svg"
            alt="Logo"
            width={250}
            height={250}
            loading="lazy"
          />
          <p className="  lg:text-2xl w-40 md:w-60 ml-3 h-auto my-3">
            Website ini resmi milik gedung desa cangkol
          </p>
          <p className=" md:text-xl text-lg  ml-3 flex text-center items-center">
            <BsTelephone className="mr-4" />
            081915312649
          </p>
        </div>
        <div className="my-6">
          {NavData.NavbarItem.map((item, index) => (
            <div key={index}>
              <NavLink className="m-2 block " href={item.url}>
                {item.titel}
              </NavLink>
            </div>
          ))}
        </div>
        <div className="metsos mr-2 md:mr-10 ">
          <BsInstagram className="bg-blue-10 p-2 w-9 md:w-11 h-auto text-5xl text-white-10 rounded-md  mx-auto" />

          <BsFacebook className="bg-blue-10 p-2 w-9 md:w-11 h-auto text-5xl text-white-10 rounded-md  my-3 mx-auto " />

          <BsYoutube className="bg-blue-10 p-2  w-9 md:w-11 h-auto text-5xl text-white-10 rounded-md mx-auto" />
        </div>
      </div>
      <div className=" flex flex-wrap justify-between items-center text-white-20  text-center border-t border-white-10 py-5 mx-3 md:mx-10 lg:mx-28">
        <div className=" flex items-center font-light text-sm mx-auto">
          <ImgComponent
            className="w-16 h-auto"
            src="/Image/Universitas Sahid Surakarta.png"
            alt="Logo"
            width={250}
            height={250}
            loading="lazy"
          />
          <div className="ml-3 text-left">
            <p>Universitas Sahid Surakarta</p>
            <p>Prodi Informatika</p>
          </div>
        </div>
        <p className="Copyright text-white-10 text-sm mx-auto py-3">
          &copy; Copyright 2024 by @Faridkin7
        </p>
      </div>
    </footer>
  );
};

export default Footer;
