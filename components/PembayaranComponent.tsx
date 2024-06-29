import React from "react";
import Img from "./ImgComponen"; // Assuming you have an Img component defined
import Button from "./Button";
interface PemayaranProps {
  form: {
    getBuktiUangmuka: string;
    getBuktiLunas: string;
    avatar: string;
    avatarLunas: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handPembayaran: () => void;
  handelUpate: () => void;
}

const Pemayaran: React.FC<PemayaranProps> = ({
  form,
  handleChange,
  handPembayaran,
  handelUpate,
}) => {
  const urlFoto = process.env.NEXT_PUBLIC_API;

  return (
    <div className="Pembayaran  flex">
      {/* Input Uangmuka */}
      {!form.getBuktiUangmuka && (
        <div className="flex flex-col">
          <label className=" mx-1 text-xl text-gray-10  ">Uang Muka</label>
          {form.avatar !== "" && (
            <div>
              <Img
                width={91}
                height={100}
                alt="91x100"
                src={`${urlFoto}/${form.avatar}`}
              />
            </div>
          )}
          <input
            name="avatar"
            type="file"
            placeholder="img"
            onChange={handleChange}
            className="max-w-[19rem] rounded-lg focus:border-blue-20 focus:outline-none box-border border-2 border-gray-10 px-4 py-3 md:w-96 my-2 md:mx-1"
          />
          <button
            className="btn_green text-blue-30 px-14 md:px-10 font-semibold xl:py-3 py-3 rounded-full"
            onClick={handPembayaran}
          >
            submite
          </button>
        </div>
      )}
      {/* End Input Nota Uangmuka */}

      {/* Input Nota pelunasan */}
      {form.getBuktiUangmuka !== "" && !form.getBuktiLunas && (
        <div className="flex flex-col">
          <label className="mx-1 text-xl text-gray-10">Pelunasan</label>
          {form.avatarLunas !== "" && (
            <div>
              <Img
                width={91}
                height={100}
                alt="91x100"
                src={`${urlFoto}/${form.avatarLunas}`}
              />
            </div>
          )}
          <input
            name="avatarLunas"
            type="file"
            placeholder="img"
            onChange={handleChange}
            className="max-w-[19rem] rounded-lg focus:border-blue-20 focus:outline-none box-border border-2 border-gray-10 px-4 py-3 md:w-96 my-2 md:mx-1"
          />
          <Button
            className="btn_green text-blue-30 px-14 md:px-10 font-semibold xl:py-3 py-3 rounded-full"
            type="button"
            title="upload"
            onClick={handelUpate}
          />
        </div>
      )}
      {/* end  Nota pelunakan */}
    </div>
  );
};

export default Pemayaran;
