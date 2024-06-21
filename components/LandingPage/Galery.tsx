import React from "react";
import Image from "next/image";
export const Galery = () => {
  return (
    <section id="galery" className="galery mx-10 lg:mx-[6rem] my-5 md:mt-20 ">
      <h1 className=" font-bold text-3xl ml-4 text-blue-40 ">Galery</h1>
      <p className="py-2 md:text-2xl text-xl  ml-4 text-blue-20">
        Documentasi Gedung
      </p>
      <div className="static grid col-auto gap-4">
        <div className=" md:flex grid justify-items-start md:items-center md:justify-center gap-2">
          <div className="grid grid-cols-2 gap-2 max-w-max h-auto">
            <Image
              src="/img/gambar1.svg"
              alt="Logo"
              width={210}
              height={189}
              className="md:w-[10rem] lg:w-[13rem]"
              loading="lazy"
            />
            <Image
              src="/img/gambar3.svg"
              alt="Logo"
              width={210}
              height={189}
              className="md:w-[10rem] lg:w-[13rem]"
              loading="lazy"
            />
          </div>
          <Image
            src="/img/gambar2.svg"
            alt="Logo"
            width={604}
            height={194}
            className="md:w-[27rem] lg:w-[38rem]"
            loading="lazy"
          />
        </div>
        <div className=" md:flex grid justify-items-start md:items-center md:justify-center gap-2 max-w-max h-auto">
          <Image
            src="/img/gambar8.svg"
            alt="Logo"
            width={604}
            height={194}
            className="md:w-[27rem] lg:w-[38rem]"
            loading="lazy"
          />
          <div className="grid grid-cols-2 gap-2">
            <Image
              src="/img/gambar5.svg"
              alt="Logo"
              width={210}
              height={189}
              className="md:w-[10rem] lg:w-[13rem]"
              loading="lazy"
            />
            <Image
              src="/img/gambar6.svg"
              alt="Logo"
              width={210}
              height={189}
              className="md:w-[10rem] lg:w-[13rem]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Galery;
