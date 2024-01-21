import React from "react";

const Alur = () => {
  return (
    <section id="alur" className="alur text-center items-center justify-center padding-container mt-[48rem] md:mt-[10rem] xl:mt-[14rem]">
      <div className="flex-1">
        <h1 className="p-4 font-bold text-3xl my-8 text-blue-40">Alur Sewa</h1>
        <div className="flex flex-wrap gap-0  lg:gap-[10rem] justify-center">
          <div className="border-blue-30 border-l-8">
            <div className=" relative ml-8">
              <div className="flex bg-green-10 py-4 text-center rounded-xl  my-5">
                <span className="p-4 bg-gray-10 absolute rounded-full top-[0.8rem] left-[-3.2rem]"></span>
                <h3 className="bg-blue-30 py-1 px-3 text-white-10 ml-2 rounded-lg font-medium">
                  1
                </h3>
                <p className="ml-[0.7rem] mr-3 py-1">Chek tanggal serta bulan</p>
              </div>
              <div className="flex bg-green-10 py-4 text-center rounded-xl my-5">
              <span className="p-4 bg-gray-10 absolute rounded-full top-[6rem] left-[-3.2rem]"></span>
                <h3 className="bg-blue-30 py-1 px-3 text-white-10 ml-2 rounded-lg">
                  2
                </h3>
                <p className="py-1 ml-[0.7rem] ">Mendaftar </p>
              </div>
              <div className="flex bg-green-10 py-4 text-center rounded-xl  my-5">
              <span className="p-4 bg-gray-10 absolute rounded-full top-[11.2rem] left-[-3.2rem]"></span>
                <h3 className="bg-blue-30 py-1 px-3 text-white-10 ml-2  rounded-lg">
                  3
                </h3>
                <p className="py-1 ml-[0.7rem]">Login</p>
              </div>
              <div className="flex bg-green-10 py-4 text-center rounded-xl  my-5">
              <span className="p-4 bg-gray-10 absolute rounded-full top-[16.3rem] left-[-3.2rem]"></span>
                <h3 className="bg-blue-30 py-1 px-3 text-white-10 ml-2   rounded-lg">
                  4
                </h3>
                <p className="py-1 ml-[0.7rem]">Isi formulir</p>
              </div>
            </div>
          </div>
          <div className="border-blue-30 border-l-8 sm:ml-6">
            <div className=" relative ml-8">
              <div className="flex bg-green-10 py-4 text-center rounded-xl  my-5">
                <span className="p-4 bg-gray-10 absolute rounded-full top-[0.8rem] left-[-3.2rem]"></span>
                <h3 className="bg-blue-30 py-1 px-3 text-white-10 ml-2 rounded-lg">
                  5
                </h3>
                <p className="py-1 ml-[0.7rem]">Pilih metode pembayaran</p>
              </div>
              <div className="flex bg-green-10 py-4 text-center rounded-xl  my-5">
              <span className="p-4 bg-gray-10 absolute rounded-full top-[6rem] left-[-3.2rem]"></span>
                <h3 className="bg-blue-30 py-1 px-3 text-white-10 ml-2 rounded-lg">
                  6
                </h3>
                <p className="py-1 ml-[0.7rem]">Upload bukti pembayaran</p>
              </div>
              <div className="flex bg-green-10 py-4 text-center rounded-xl  my-5">
              <span className="p-4 bg-gray-10 absolute rounded-full top-[11.2rem] left-[-3.2rem]"></span>
                <h3 className="bg-blue-30 py-1 px-3 text-white-10 ml-2 rounded-lg">
                  7
                </h3>
                <p className="py-1 ml-[0.7rem]">Verifikasi oleh admin</p>
              </div>
              <div className="flex bg-green-10 py-4 text-center rounded-xl  my-5">
              <span className="p-4 bg-gray-10 absolute rounded-full top-[16.3rem] left-[-3.2rem]"></span>
                <h3 className="bg-blue-30 py-1 px-3 text-white-10 ml-2 rounded-lg">
                  8
                </h3>
                <p className="py-1 ml-[0.7rem]">Gedung berhasil disewa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alur;
