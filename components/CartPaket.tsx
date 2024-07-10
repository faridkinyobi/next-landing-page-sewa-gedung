import React from "react";
import Link from "next/link";
import { BsBuildingFillCheck, BsCheckLg } from "react-icons/bs";

interface PaketType {
  item: {
    titel: string;
    _id: number;
    fasilitas: { detail: string }[];
    harga: {
      kegiatan: string;
      hari: string;
      warga: string;
      hargadetail: number;
    }[];
  };
  index: number;
  setSelectedharga: React.Dispatch<React.SetStateAction<number | null>>;
  selectedharga: number | null;
}

const CartPaket: React.FC<PaketType> = ({
  setSelectedharga,
  selectedharga,
  item,
  index,
}) => {
  const hendelharga = () => {
    setSelectedharga((itemSelectedharga) =>
      itemSelectedharga === index ? null : index
    );
  };

  return (
    <div className="my-4 mx-0 md:mx-3 lg:mx-1 p-1 text-blue-40 cursor-pointer hover:bg-slate-100 hover:rounded-t-xl delay-200 transition-all ease-in-out">
      <div className="text-center items-center bg-white-10 py-2 rounded-t-xl">
        <h1 className="text-2xl lg:text-3xl font-semibold my-2">
          {item.titel}
        </h1>
        <BsBuildingFillCheck className=" py-0 px-3 text-8xl text-blue-30 bg-gray-10 mx-auto" />
      </div>
      <div className="bg-blue-40 py-5">
        {item.fasilitas &&
          item.fasilitas.map((fasilitasItem, fasilitasIndex) => (
            <div key={fasilitasIndex}>
              <p className="text-white-10 text-left flex items-center text-base pt-1 mx-1 md:mx-2">
                <BsCheckLg className="text-blue-30 mx-2 bg-yellow-300 text-xl rounded-xl" />
                {fasilitasItem.detail}
              </p>
            </div>
          ))}
        <p className="my-3 mx-5 font-extralight text-left text-base text-gray-10">
          Kelengkapan lain diserahkan kepada{" "}
          <span className="font-bold text-white-20">Penyewa</span>
        </p>
        <div className="m-5">
          <Link
            className="btn_green text-blue-30 px-10 font-semibold xl:py-3 py-3 rounded-full bg-green-10 hover:outline-green-10 hover:bg-green-10/75"
            href={`/sewa/${item._id}`}
          >
            Pilih Paket
          </Link>
          <h2
            className="font-semibold bg-red-500 py-2 mx-2 md:mx-9 my-5 text-white-20 cursor-pointer rounded-full shadow-red-500 duration-300 transition-all ease-in-out outline-2 hover:outline hover:outline-red-600 hover:bg-red-500/70"
            onClick={hendelharga}
          >
            Harga
          </h2>
        </div>

        <div className="my-2">
          <div
            className={`my-2 mx-1 grid grid-cols-1  gap-1 ${
              selectedharga !== index
                ? "hidden"
                : "origin-bottom transition-transform delay-1000"
            }`}
          >
            {item.harga &&
              item.harga.map((hargaItem, hargaIndex) => (
                <div className="border-spacing-9 border px-2 lg:px-auto py-1" key={hargaIndex}>
                  <h3 className="text-[1rem] font-normal text-left text-white-10">
                    {hargaItem.kegiatan}
                  </h3>
                  <p className="text-[1rem] font-normal text-left text-white-10">
                    Hari: {hargaItem.hari}
                  </p>
                  <p className="text-[1rem] font-normal text-left text-white-10">
                   warga {hargaItem.warga}
                  </p>
                  <p className="text-[1rem] font-normal text-left text-white-10">
                    {hargaItem.hargadetail.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPaket;
