import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import dynamic from 'next/dynamic';

const CartPaket = dynamic(() => import("@/components/CartPaket"), { ssr: false });
interface PaketType {
  data: {
    titel: string;
    _id: number;
    fasilitas: { detail: string }[];
    harga: {
      kegiatan: string;
      hari: string;
      warga: string;
      hargadetail: number;
    }[];
  }[];
}
const Paket = ({ data }: PaketType) => {
  const [selectedharga, setSelectedharga] = useState<number | null>(null);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: data?.length >= 3 ? 3 : 2,
    slidesToScroll: 2,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: data?.length >= 2 ? 2 : 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: data?.length > 1 ? 2 : 1,
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
      className={`bg-blue-30 lg:mx-24  md:mx-10 mx-5 ${
        selectedharga !== null
          ? "lg:mb-[35rem] transition-all delay-400"
          : "lg:mb-[18rem] transition-transform delay-400"
      }  lg:h-[25rem] w-auto md:rounded-3xl shadow-pxl`}
    >
      <div className="container flex-1 text-center pt-5">
        <h1 className=" font-bold text-3xl lg:ml-4 text-white-20 lg:text-left">
          Daftar
        </h1>
        <p className="py-2 md:text-2xl text-xl  ml-4 text-gray-10 lg:text-left">
          Pilih paket Sewa Gedung
        </p>
        <div className="mx-1 md:mx-10 lg:mx-20">
          <Slider {...settings}>
            {data?.map((item, index) => (
              <div key={index}>
                <CartPaket
                  setSelectedharga={setSelectedharga}
                  selectedharga={selectedharga}
                  item={item}
                  index={index}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Paket;
