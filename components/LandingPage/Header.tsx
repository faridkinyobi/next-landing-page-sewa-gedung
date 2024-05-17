"use client";
import Image from "next/image";
import React, { useState } from "react";

import NavbarLending from "../NavbarLending";
import Button from "../Button";
import ImgBg from "../../public/img/Group59bg.svg";
import {
  BsPCircle,
  BsFillPersonLinesFill,
  BsFillLuggageFill,
} from "react-icons/bs";
import { useRouter } from "next/navigation";
const Faslitem = [
  {
    titel: "Parkiran",
    desc: "Parkiran luas bisa menampung banyak kendaraan mini bus,mobil, motor",
    icon: (
      <BsPCircle className=" mx-auto text-white-10 text-6xl md:text-7xl bg-blue-30 p-2 rounded-full shadow-ml md:mt-[-4.30rem] " />
    ),
  },
  {
    titel: "Kapasita",
    desc: "Gedung dengan berkapasitas 2000 orang, cocok untuk berbagai event",
    icon: (
      <BsFillPersonLinesFill className=" mx-auto text-white-10 text-6xl md:text-7xl bg-blue-30 p-2 rounded-full shadow-ml md:mt-[-4.30rem]" />
    ),
  },
  {
    titel: "Ruang Rias",
    desc: "Ruang khusus di mana pengantin dapat bersiap-siap sebelum acara utama",
    icon: (
      <BsFillLuggageFill className=" mx-auto text-white-10 text-6xl md:text-7xl bg-blue-30 p-2 rounded-full shadow-ml md:mt-[-4.30rem]" />
    ),
  },
];
const Header = () => {
  const router = useRouter();
  return (
    <header
      className="w-screen h-[50rem] md:h-[59.125rem] bg-cover bg-center items-center text-center  "
      style={{
        backgroundImage: "url('/img/backgroud3.svg')",
        backgroundSize: "cover",
      }}
    >
      <NavbarLending />
      <h1 className="titel text-white-10 font-semibold md:text-[3rem] leading-tight text-[2.5rem] md:my-10 my-12 mt-20 ">
        Sukses{" "}
        <span className="bg-gradient-to-br from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Acara Anda
        </span>
        <br />
        Di{" "}
        <span className="bg-gradient-to-r from-pink-500 to-pink-200 bg-conic-gradient bg-clip-text text-transparent ">
          Gedung
        </span>{" "}
        Kami
      </h1>
      <div>
        <p className="inline-block lg:h-[20%] md:h-[20%] h-[26%] lg:w-[50%] md:w-[70%] w-[90%] mx-6 text-gray-200 text-[1.3rem] md:text-2xl font-light text-left md:text-center">
          Kami menyediakan tempat yang terbaik dan fasilitas yang bisa digunakan
          untuk memberikan kenyamanan dalam menyewa gedung
        </p>
      </div>
      <Button
        className="btn_green  px-14  md:py-3 py-3 text-xl shadow-md shadow-green-10/50 mt-16 "
        type="button"
        title="Orders"
        onClick={() => router.push("#Package")}
      />
      {/* <div className="mt-[27rem] mx-28 h-28 bg-blue-30">
        <div className=" h-23 bg-white-10/20 py-10 mr-[50rem]">

        </div>
      </div> */}
    </header>
  );
};

export default Header;
