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
    <footer className="py-10 bg-blue-20">
      <div className=" flex flex-wrap justify-between mx-5 md:mx-5 lg:mx-28 text-white-10 items-center">
        <div className=" font-light text-sm ">
          <ImgComponent
            className="w-44 h-auto"
            src="/Image/logo5coklat.svg"
            alt="Logo"
            width={250}
            height={950}
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
        <div className="metsos md:mr-10">
          <BsInstagram className="bg-blue-10 p-2 w-9 md:w-11 h-auto text-5xl text-white-10 rounded-md " />

          <BsFacebook className="bg-blue-10 p-2 w-9 md:w-11 h-auto text-5xl text-white-10 rounded-md mr-9 my-3" />

          <BsYoutube className="bg-blue-10 p-2  w-9 md:w-11 h-auto text-5xl text-white-10 rounded-md " />
        </div>
      </div>
      <p className="Copyright text-center text-white-10 text-sm py-7">
        &copy; Copyright 2024 by @Faridkin7
      </p>
    </footer>
  );
};

export default Footer;
