import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
const navitem = [
  {
    titel: "Home",
    url: "/",
  },
  {
    titel: "Step",
    url: "/",
  },
  {
    titel: "About",
    url: "/",
  },
  {
    titel: "Package",
    url: "/",
  },
  {
    titel: "Timetable",
    url: "/",
  },
];
const Footer = () => {
  return (
    <footer className="my-6 mt-60 w-full">
      <div className=" flex flex-wrap justify-between mx-10 lg:mx-28 text-white-10">
        <div>
          <img src="logo2.png" alt="Logo" width={140} height={100} />
          <p className=" font-light] text-sm lg:text-2xl w-60  ml-3 mt-3">
            Website ini resmi milik gedung desa cangkol
          </p>
        </div>
        <div className="">
          {navitem.map((item) => (
            <a className="m-2 block " href={item.url}>
              {item.titel}
            </a>
          ))}
        </div>
        <div className=" mr-10">
          <BsInstagram className="bg-blue-10 p-2 w-11 text-5xl text-white-10 rounded-md " />

          <BsFacebook className="bg-blue-10 p-2 w-11 text-5xl text-white-10 rounded-md mr-9 my-3" />

          <BsYoutube className="bg-blue-10 p-2  w-11 text-5xl text-white-10 rounded-md " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
