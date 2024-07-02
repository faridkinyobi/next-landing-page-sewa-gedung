import React from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";
const NavbarLending = React.lazy(() => import("../NavbarLending"));
const Header = () => {
  const router = useRouter();
  return (
    <header
      className=" h-[50rem] md:h-[58.125rem] bg-cover bg-center bg-no-repeat items-center text-center  "
      style={{
        backgroundImage: "url('/Image/backgroud3.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <NavbarLending />
      <h1 className="titel text-white-10 font-semibold md:text-[3rem] leading-tight text-[2.5rem] md:my-10 my-12 mt-20 ">
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
      <div>
        <p className="inline-block lg:h-[20%] md:h-[20%] h-[26%] lg:w-[50%] md:w-[70%] w-[90%] mx-6 text-gray-200 text-[1.3rem] md:text-2xl font-light text-left md:text-center">
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
