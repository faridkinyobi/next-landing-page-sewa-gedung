import React, { useState } from "react";
import { BsBuildingFillCheck, BsCheckLg } from "react-icons/bs";
import { toast } from "react-toastify";
type DetailPaketProps = {
  detailPage: {
    titel: string;
    fasilitas: Array<{ detail: string }>;
    harga: Array<{
      _id: string;
      kegiata: string;
      hari: string;
      warga: string;
      hargadetail: string;
    }>;
  };
  handleHargaSelection: (_id: string) => void;
  isCardChecked: boolean | null;
  setIsCardChecked: (isCardChecked: boolean) => void;
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
    <div
      className={`lg:w-[67rem] md:w-[40rem] w-[20rem] justify-items-center mx-auto`}
    >
      {/* {detailPage.titel} */}
      <div className="my-4  px-2 rounded-b-xl text-blue-40">
        <div className="text-center items-center bg-gray-10 py-2 rounded-t-xl">
          <h1 className="text-2xl lg:text-3xl font-semibold my-2">
            {detailPage.titel}
          </h1>
          <BsBuildingFillCheck className=" py-0 px-3 text-7xl lg:text-8xl text-blue-30 bg-blue-10 mx-auto" />
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
          <div className="mx-2 my-2">
            <div
              className={`my-2 mx-1 grid grid-cols-2 md:grid-cols-3  gap-3 `}
            >
              {detailPage.fasilitas &&
                detailPage.harga.map((item, index) => (
                  <div className="" key={index}>
                    <h3 className="text-[1rem] font-normal text-left text-white-10">
                      {item.kegiata}
                    </h3>
                    <div
                      className={`${
                        activeCard === item._id ? "border-green-500" : ""
                      } border-4 box-border  md:px-4 rounded-lg md:flexBetween text-center cursor-pointer `}
                      onClick={() => toggleCard(item._id)}
                    >
                      <div className="">
                        <p className="text-[1rem] font-normal md:text-left text-blue-500">
                          {item.hari}
                        </p>
                        <p className="text-[1rem] font-normal md:text-left text-white-10">
                          {item.warga}
                        </p>
                        <p className="text-[1rem] font-normal md:text-left text-gray-10">
                          {item.hargadetail}
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
  );
};

export default DetailPaket;
