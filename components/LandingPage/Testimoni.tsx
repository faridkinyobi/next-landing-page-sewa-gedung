import React from "react";

const Testimoni = () => {
  return (
    <section className="mx-10 lg:mx-[8rem]">
      <h1 className=" font-bold text-3xl  text-blue-40 lg:text-lift  ">
        jadwal
      </h1>
      <p className="py-2 text-2xl  text-blue-20 lg:text-lift">
        Pilih paket Sewa Gedung
      </p>
      <div className="testimoni_row flex flex-wrap  lg:grid-cols-3  lg:grid-rows-2 lg:gap-x-16 mt-5 justify-center ">
        <div className="w-60 h-80 relative">
          <div className="w-8 h-28 left-[0.02px] top-0 absolute text-black text-6xl font-medium ">
            “
          </div>
          <img
            src="Rectangle29.svg"
            alt="Logo"
            width={174}
            height={213}
            className="ml-[5rem]"
          />
          <div className="w-7 h-28 left-[218.76px] top-[236.76px] absolute text-black text-6xl font-medium ">
            “
          </div>
          <img
            src="Rectangle26.svg"
            alt="Logo"
            width={174}
            height={213}
            className="mt-[-9rem]"
          />
          <div className="w-44 h-32 left-[43.30px] top-[108.24px] absolute text-center text-black text-xs font-medium">
            ASDJAKHSDJAHSDJHASD
            <br />
            ASJDHKAJDHADASKDAS
            <br />
            ASDJASKDJAHSDKHASD
            <br />
            ASJDKASHDKJASHJD
            <br />
            ASJDKASDJASD
            <br />
            JASDKASJDAS
          </div>
        </div>

      </div>

      
    </section>
  );
};

export default Testimoni;
