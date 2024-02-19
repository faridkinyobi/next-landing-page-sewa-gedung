import React, { useState } from "react";
import NavbarLending from "../NavbarLending";
import Button from "../Button";
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
      className="h-[60rem] md:h-[59.125rem]  bg-cover bg-center"
      style={{ backgroundImage: "url('/img/backgroud3.svg')" }}
    >
      <NavbarLending />
      <div className={`text-center mt-24 md:mt-24 lg:mt-20 justify-center`}>
        <h1 className="titel text-white-10 font-semibold md:text-[3rem] leading-none text-[2.5rem] ">
          Sukses{" "}
          <span className="bg-gradient-to-br from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Acara Anda
          </span>
          <br />
          Di{" "}
          <span className="bg-gradient-to-r from-pink-500 to-pink-200 bg-conic-gradient bg-clip-text text-transparent">
            Gedung
          </span>{" "}
          Kami
        </h1>
        <div className="flexCenter">
          <p className="desc md:w-[70%] lg:w-[50%] w-[90%] my-5 mx-10 lg:py-8 text-gray-10 text-[1.3rem] md:text-2xl font-light text-left md:text-center">
            Kami menyediakan tempat yang terbaik dan fasilitas yang bisa
            digunakan untuk memberikan kenyamanan dalam menyewa gedung
          </p>
        </div>
        <Button
          className="btn_green mt-7 px-14  xl:py-3 py-3 text-xl shadow-md shadow-green-10/50"
          type="button"
          title="Orders"
          onClick={() => router.push("#Package")}
        />
      </div>

      {/* fasil */}
      <div className="flex  relative flex-wrap md:gap-12 gap-10 justify-center  mt-[17rem] lg:mt-[19rem]">
        {Faslitem.map((item, index) => (
          <div
            key={index}
            className="flex items-center md:block bg-blue-30 text-center p-5 md:p-8 rounded-2xl"
          >
            {item.icon}
            <div className="text-left mx-5">
              <h1 className="font-bold text-xl md:text-lg lg:text-xl text-white-10 my-2 md:text-center">
                {item.titel}
              </h1>
              <p className="text font-light text-sm md:text-base text-gray-10 text-left w-52 md:w-56  ">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
