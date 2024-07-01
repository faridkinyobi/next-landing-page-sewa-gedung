import React, { useState,Suspense } from "react";
import { BsBuildingFillCheck, BsCheckLg } from "react-icons/bs";
type DetailPaketProps = {
  detailPage: {
    titel: string;
    fasilitas: Array<{ detail: string }>;
    harga: Array<{
      _id: string;
      kegiatan: string;
      hari: string;
      warga: string;
      hargadetail: number | string;
    }>;
  };
  handleHargaSelection: (_id: string) => void;
  isCardChecked: boolean | null;
  setIsCardChecked: (isCardChecked: boolean) => void;
  style: string;
};

const DetailPaket = ({
  detailPage,
  handleHargaSelection,
  isCardChecked,
  setIsCardChecked,
}: DetailPaketProps) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const toggleCard = (_id: string) => {
    setActiveCard((ActiveCard) => {
      return ActiveCard === _id ? null : _id;
    });

    handleHargaSelection(_id);
    setIsCardChecked(!isCardChecked);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={`mx-2 md:mx-20 justify-items-center`}>
        {/* {detailPage.titel} */}
        <div className="my-4  px-2 rounded-b-xl text-blue-40">
          <div className="text-center items-center bg-gray-10 py-2 rounded-t-xl">
            <h1 className="text-2xl lg:text-3xl font-semibold my-2">
              {detailPage.titel}
            </h1>
            <BsBuildingFillCheck className=" py-0 px-3 text-7xl lg:text-8xl text-blue-30 bg-blue-10 mx-auto bg-gradient-to-br from-violet-500 to-blue-400" />
          </div>
          <div className="bg-slate-700 py-5">
            {detailPage.fasilitas.map((items, index) => (
              <div key={index}>
                <p className="  text-white-10 text-left flex items-center text-base pt-1 mx-1">
                  <BsCheckLg className=" text-blue-30 mx-2 bg-yellow-300 text-xl rounded-xl" />
                  {items.detail}
                </p>
              </div>
            ))}
            <p className=" my-3  mx-10 font-extralight text-left text-base text-gray-10">
              Kelengkapan lain diserahkan kepada
              <span className=" font-bold text-white-20">Penyewa</span>
            </p>
            <div className="mx-1 md:mx-2 my-2">
              <div
                className={`my-2 mx-1 grid grid-cols-2 md:grid-cols-3  gap-3 `}
              >
                {detailPage.fasilitas &&
                  detailPage.harga.map((item, index) => (
                    <div className="" key={index}>
                      <h3 className=" rounded-t-2xl text-[1rem] mx-2 mr-6 px-4 py-1 font-normal text-left text-white-10 shadow-inner shadow-blue-40 ">
                        {item.kegiatan}
                      </h3>
                      <div
                        className={`${
                          activeCard === item._id
                            ? "  border-blue-30 shadow-md "
                            : "border-blue-40"
                        } transitionAll75 shadow-inner border-blue-40 shadow-blue-40  md:px-4 md:py-2 rounded-lg md:flexBetween text-center cursor-pointer `}
                        onClick={() => toggleCard(item._id)}
                      >
                        <div
                          className={`transitionAll75 rounded-2xl px-3 py-2   shadow-blue-40 ${
                            activeCard === item._id
                              ? " bg-blue-30 shadow-inner"
                              : " bg-blue-20 shadow-md"
                          }`}
                        >
                          <p className="text-[1rem] font-normal text-left text-blue-500">
                            {item.hari}
                          </p>
                          <p className="text-[1rem] font-normal text-left text-white-10">
                            {item.warga}
                          </p>
                          <p className="text-[1rem] font-normal text-left text-gray-10">
                            {item.hargadetail.toLocaleString("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            })}
                          </p>
                        </div>
                        <div>
                          <input
                            className=" w-6 h-6"
                            type="checkbox"
                            onChange={() => toggleCard(item._id)}
                            checked={activeCard === item._id}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default DetailPaket;
