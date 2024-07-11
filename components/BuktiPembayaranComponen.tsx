import React from "react";
import ImgComponent from "./ImgComponen"; 

interface BuktiPemayaranProps {
  img: {
    BuktiUangMuka?: {
      name: string;
    };
    BuktiPelunasan?: {
      name: string;
    };
  }[];
}

const BuktiPemayaran: React.FC<BuktiPemayaranProps> = ({ img }) => {
  const urlFoto = process.env.NEXT_PUBLIC_API;

  return (
    <div>
      {img.map((items, index) => (
        <div key={index} className="flex gap-5 mt-6">
          <div className="border-2 p-2 text-white-10">
            <h1>Bukti Pembayaran Uang Muka</h1>
            {items.BuktiUangMuka?.name ? (
              <ImgComponent
                className="max-w-40 max-h-40"
                width={100}
                height={106}
                alt="121x126"
                src={`${urlFoto}/${items.BuktiUangMuka.name}`}
                priority={true}
              />
            ) : (
              <p>Gambar tidak tersedia</p>
            )}
          </div>
          <div className="border-2 p-2 text-white-10">
            <h1>Bukti Pembayaran Lunas</h1>
            {items.BuktiPelunasan?.name ? (
              <ImgComponent
                className="max-w-40 max-h-40"
                width={100}
                height={100}
                alt="121x126"
                src={`${urlFoto}/${items.BuktiPelunasan.name}`}
                priority={true}
              />
            ) : (
              <p>Gambar tidak tersedia</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuktiPemayaran;
