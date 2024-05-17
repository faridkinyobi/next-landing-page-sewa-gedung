import React, { useState } from "react";
// import Button from "../../app/Chekout";
import { BsBuildingFillCheck, BsCheckLg } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

interface PaketType {
  data: {
    titel: string;
    _id: number;
    fasilitas: { detail: string }[];
    harga: {
      kegiata: string;
      hari: string;
      warga: string;
      hargadetail: number;
    }[];
  }[];
}
const Paket = ({ data }: PaketType) => {
  const [selectedharga, setSelectedharga] = useState<number | null>(null);
  const hendelharga = (index: number) => {
    setSelectedharga((prevSelectedharga) =>
      prevSelectedharga === index ? null : index
    );
  };
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: data.length >= 3 ? 3 : 1,
    slidesToScroll: 2,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: data.length >= 2 ? 2 : 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: data.length > 1 ? 2 : 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="Package"
      className={`items-center justify-center  bg-blue-30 lg:mx-24 ${
        selectedharga !== null
          ? "lg:mb-[35rem] transition-all delay-400"
          : "lg:mb-[18rem] transition-transform delay-400"
      } md:my-20 lg:h-[29rem] w-auto md:rounded-3xl shadow-pxl`}
    >
      <div className="container flex-1 text-center pt-5">
        <h1 className=" font-bold text-3xl lg:ml-4 text-white-20 lg:text-left">
          Daftar
        </h1>
        <p className="py-2 md:text-2xl text-xl  ml-4 text-gray-10 lg:text-left">
          Pilih paket Sewa Gedung
        </p>
        <div className="mt-16 mx-8 md:mx-60 lg:mx-[27rem]">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div className="my-4  px-3 rounded-b-xl text-blue-40" key={index}>
                <div className="text-center items-center bg-white-10 py-2 rounded-t-xl">
                  <h1 className="text-2xl lg:text-3xl font-semibold my-2">
                    {item.titel}
                  </h1>
                  <BsBuildingFillCheck className=" py-0 px-3 text-8xl text-blue-30 bg-gray-10 mx-auto" />
                </div>
                <div className="bg-blue-40 py-5">
                  {item.fasilitas &&
                    item.fasilitas.map((items, index) => (
                      <div key={index}>
                        <p className="  text-white-10 text-left flex items-center text-base pt-1 mx-2">
                          <BsCheckLg className=" text-blue-30 mx-2 bg-yellow-300 text-xl rounded-xl" />
                          {items.detail}
                        </p>
                      </div>
                    ))}
                  <div className="m-5">
                    <Link
                      className="btn_green text-blue-30 px-14 md:px-10 font-semibold xl:py-3 py-3 rounded-full"
                      href={`/sewa/${item._id}`}
                    >
                      Pilih Paket
                    </Link>
                    <h2
                      className="font-semibold  bg-red-500 xl:py-2 py-2  lg:mx-10 mx-2 my-5 text-white-20 cursor-pointer rounded-full  shadow-red-500  duration-300 transition-all ease-in-out outline-2 hover:outline hover:outline-red-600 hover:bg-red-500/70 "
                      onClick={() => hendelharga(index)}
                    >
                      Harga
                    </h2>
                  </div>

                  <div className="my-2">
                    <div
                      className={`my-2 mx-4 grid grid-cols-2 gap-3 ml-4 ${
                        selectedharga !== index
                          ? "hidden"
                          : " origin-bottom transition-transfor delay-1000"
                      }`}
                    >
                      {item.fasilitas &&
                        item.harga.map((item, index) => (
                          <div
                            className=" border-spacing-9 border px-3 py-1"
                            key={index}
                          >
                            <h3 className="text-[1rem] font-normal text-left text-white-10">
                              {item.kegiata}
                            </h3>
                            <p className="text-[1rem] font-normal text-left text-blue-500">
                              {item.hari}
                            </p>
                            <p className="text-[1rem] font-normal text-left text-white-10">
                              {item.warga}
                            </p>
                            <p className="text-[1rem] font-normal text-left text-gray-10">
                              {item.hargadetail}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Paket;
