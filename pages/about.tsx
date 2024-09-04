import React, { useState, useEffect } from "react";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";
import dynamic from "next/dynamic";
import NavbarLending from "@/components/NavbarLending";

const ImgComponent = dynamic(() => import("@/components/ImgComponen"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const DescAboutComponent = dynamic(
  () => import("@/components/DescAboutComponent"),
  { ssr: false }
);

const About = () => {

  return (
    <div
      className="  bg-cover bg-center bg-no-repeat  w-screen h-screen  "
      style={{ backgroundImage: "url('/Image/bg-about.svg')" }}
    >
      <NavbarLending />
      <h1 className="titel text-center text-white-10 font-semibold md:text-[3rem] leading-tight text-[2.5rem] md:my-10 my-auto mt-20 mx-5">
        Bagaimana{" "}
        <span className="bg-gradient-to-br from-violet-500 to-teal-400 bg-clip-text text-transparent">
          Gedung ini
        </span>
        <br />
        <span className="bg-gradient-to-r from-orange-500 to-orange-200 bg-conic-gradient bg-clip-text text-transparent ">
          Dibangun dan
        </span>{" "}
        Dipersewakan
      </h1>
      {/* <div className="relative w-full max-w-2xl h-64 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        {slides.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
        ))}
      </div> */}
        {/* const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: "/Image/slides1.webp",title:"Tampilan Dalam Dan Tampilan Kursi " },
    { image: "/Image/slides2.webp",title:"Tempat Parkir Depan" },
    { image: "/Image/slides3.webp",title:"Tempat Parkir Samping" },
    { image: "/Image/slides4.webp",title:"Tampat Catering" },
    { image: "/Image/slides5.webp",title:"Panggung Gedung" },
  ]; */}
{/* 
  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 3000);

  //   return () => clearInterval(slideInterval);
  // }, []); */}

        {/* <div className="relative overflow-hidden">
          {slides.map((item, index) => (
            <div
              key={index}
              className={`absolute text-center items-center bg-gray-10 py-2 rounded-ss-xl bg-origin-border inset-0 bg-cover bg-center transition-opacity duration-1000 ease-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${item.image})`}}
            >
              <h1 className="text-2xl lg:text-3xl font-semibold my-2 bg-slate-300/85 mx-20 rounded-sm py-1">
                {detailPage.titel}
              </h1>
              <BsBuildingFillCheck className=" py-0 px-3 text-7xl lg:text-8xl text-blue-30 bg-blue-10 mx-auto bg-gradient-to-br from-violet-500 to-blue-400" />
              <h2 className="text-2xl  font-semibold text-left mt-60 bg-slate-300 mx-2 py-2 px-2 rounded-sm">
                {item.title}
              </h2>
            </div>
          ))}
        </div> */}
        {/* <div className="bg-slate-700 py-5 rounded-se-xl "></div> */}
      <div className="paragraf text-justify mx-5  lg:mx-[6rem] md:mt-96 mt-48 my-auto bg-[#ffffff67] px-10 py-9">
        <DescAboutComponent />
      </div>
      <div className="About my-10 xl:my-20 mx-5 lg:mx-24 flexStart bg-[#ffffff67] px-10 py-9">
        <div className="kontak flex flex-wrap md:static gap-16">
          <ImgComponent
            src="/Image/abaut.svg"
            alt="image gedung cangkol"
            width={200}
            height={200}
            className=" rounded-2xl md:w-[300px] md:h-[400px] h-auto w-60"
            priority={true}
          />
          <div className="md:mt-20 mt-2  text-left sm:w-[19rem] sm:text-2xl ">
            <p className="text-base sm:text-lg flex  ">
              <BsTelephone className="bg-blue-10 p-2 w-11 text-4xl  text-white-10 rounded-md mr-4" />
              081915312649
            </p>
            <p className=" text-base sm:text-lg flex my-4">
              <BsEnvelope className="bg-blue-10 p-2 w-11 text-4xl  text-white-10 rounded-md mr-4" />
              ged_Cangkol@gmail.com
            </p>
            <p className=" text-base  sm:text-lg flex">
              <BsGeoAlt className="bg-blue-10 p-2 w-16 md:w-13  text-4xl  text-white-10 rounded-md mr-4" />
              Jepuh, Cangkol, Kec. Mojolaban, Jawa Tengah
            </p>
          </div>
        </div>
      </div>
      <div className=" mx-5 lg:mx-24  my-7 About bg-[#ffffff67] px-10 py-4">
        <h1 className="titel font-bold text-3xl  text-blue-40  my-7">Maps</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15818.656562341292!2d110.8778483!3d-7.611477199999981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3df443986921%3A0xd962e1261bc15f22!2sGedung%20Cangkol!5e0!3m2!1sid!2sid!4v1704034189061!5m2!1sid!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="z-10">
        <Footer />
      </div>
    </div>
  );
};
export default About;
