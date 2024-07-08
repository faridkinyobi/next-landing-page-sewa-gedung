import React from "react";
import Button from "../Button";
import NavbarLending from "../NavbarLending";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header
      className=" text-center md:h-[58.125rem]  bg-cover bg-center bg-no-repeat  w-screen h-screen "
      style={{
        backgroundImage: `url(/Image/backgroud3.svg)`,
      }}
    >
      <NavbarLending />
      <div>
        <h1 className="titel text-white-10 font-medium md:font-semibold md:text-[3rem] leading-tight text-[1.9rem]  my-12 ">
          Sukses{" "}
          <span className="bg-gradient-to-br from-violet-500 to-teal-400 bg-clip-text text-transparent">
            Acara Anda
          </span>
          <br />
          Di{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-200 bg-conic-gradient bg-clip-text text-transparent ">
            Gedung
          </span>{" "}
          Kami
        </h1>
        <p className="inline-block mx-10 lg:mx-80 text-white-10 text-[1.2rem] md:text-2xl font-light text-center">
          Kami menyediakan tempat yang terbaik dan fasilitas yang bisa digunakan
          untuk memberikan kenyamanan dalam menyewa gedung
        </p>
      </div>
      <Button
        className="btn_green  px-14  md:py-3 py-3 text-xl shadow-md shadow-green-10/50 mt-16 bg-green-10 hover:outline-green-10 hover:bg-green-10/75"
        type="button"
        title="Orders"
        onClick={() => router.push("#Package")}
      />
    </header>
  );
};

export default Header;
