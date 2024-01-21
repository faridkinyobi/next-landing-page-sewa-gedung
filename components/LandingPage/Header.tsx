
import React, { useState } from "react";
import NavbarLending from "../NavbarLending";
import Button from "../Button";
import { BsPCircle, BsPeople } from "react-icons/bs";
import { useRouter } from 'next/navigation'
 
const Header = () => {
  const [clicked, setClicked] = useState(true);
  const router = useRouter()
  return (
    <header
      className="h-[60rem] lg:h-[59.125rem]   bg-cover bg-center"
      style={{ backgroundImage: "url('backgroud3.svg')" }}
    >
      <NavbarLending clicked={clicked} setClicked={setClicked} />
      <div
        className={`text-center py-[2rem] lg:py-28 justify-center ${
          clicked
            ? "transition_duration"
            : "py-[8rem] mt-40 transition_duration lg:mt-auto"
        }`}
      >
        <div className="text-white-10 font-semibold lg:text-[3rem] leading-none text-[45px] ">
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
        </div>
        <div className="flexCenter">
          <p className="lg:w-[50%] sm:[50%] w-[90%] py-7 lg:py-8 text-gray-10 text-[1.3rem] lg:text-2xl font-light ">
            Kami menyediakan tempat yang terbaik dan fasilitas yang bisa
            digunakan untuk memberikan kenyamanan dalam menyewa gedung
          </p>
        </div>
        <Button
          className="btn_green w-32 xl:py-3 py-3  mt-7 shadow-md shadow-green-10/50  duration-300 transition-all ease-in-out outline-2 active:outline focus:outline-gray-300 "
          type="button"
          title="Orders"
          onClick={() => router.push('#Package')}
        />
      </div>

      {/* fasil */}
      <div className="sm:flex  relative flex-row md:gap-[11rem] lg:gap-80 justify-center md:mt-96 lg:mt-[15rem] mt-[16rem] z-0">
        <div className="flex justify-center mb-[12rem] lm:m-0">
          <BsPCircle className=" text-center text-white-10 text-7xl bg-blue-30 p-2 rounded-full shadow-ml block" />
          <div className="bg-blue-30 rounded-2xl w-[14rem]  lg:w-[20rem] z-[-1] p-8  top-[2.6rem] absolute text-center  font-light  leading-relaxed">
            <h1 className="font-bold p-2 text-xl md:text-lg lg:text-xl text-white-10 ">Parkiran </h1>
            <p className="text text-base lg:text-xl text-gray-10 ">
              parkiran luas bisa <br />
              menampung banyak kendaraan
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-[12rem] lm:m-0 ">
          <BsPCircle className=" text-center text-white-10 text-7xl bg-blue-30 p-2 rounded-full shadow-ml" />
          <div className="bg-blue-30 rounded-2xl w-[14rem] lg:w-[20rem] z-[-1] p-8  top-[19rem] md:top-[2.4rem] lg:top-[2.6rem] absolute text-center font-light  leading-relaxed">
          <h1 className="font-bold p-2 text-xl md:text-lg lg:text-xl text-white-10  ">Kapasita</h1>
            <p className="text text-base lg:text-xl text-gray-10 ">
              Kapasitas gedung<br />
              bisa menampung 2000 orang
            </p>
          </div>
        </div>
        <div className="flex justify-center  lm:m-0 ">
          <BsPCircle className=" text-center text-white-10 text-7xl bg-blue-30 p-2 rounded-full shadow-ml" />
          <div className="bg-blue-30 rounded-2xl w-[14rem]  lg:w-[20rem] z-[-1] p-8  top-[35.64rem] md:top-[2.6rem] absolute text-center font-light  leading-relaxed">
          <h1 className="font-bold p-2 text-xl md:text-lg lg:text-xl text-white-10">Parkiran </h1>
            <p className="text text-base lg:text-xl text-gray-10">
              parkiran luas bisa <br />
              menampung banyak kendaraan
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
