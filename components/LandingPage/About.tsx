import React, { useState } from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';

const ImgComponent = dynamic(() => import("@/components/ImgComponen"), { ssr: false });
const About = () => {
  const [loading, setLoading] = useState(false);
  const handleNavigation = async () => {
    setLoading(true);
    //  penundaan menampilkan 
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoading(false);
  };
  return (
    <section
      id="about"
      className="About justify-center  items-center mx-5 lg:mx-[6rem] md:mx-[2rem]  my-[8rem]"
    >
      <div className="flex flex-wrap">
        <ImgComponent
          src="/Image/abaut.svg"
          alt="About Image"
          width={330}
          height={330}
          loading="lazy"
          className="shadow-alg rounded-2xl  mt-7 h-auto w-[80%]  md:w-[43%] lg:w-[31%] "
        />
        <div className="lg:mx-20 md:mx-[2rem] mt-7 w-[30rem] md:w-[20rem] lg:w-[27rem] ">
          <h1 className="font-bold text-3xl my-2 text-blue-40">About</h1>
          <h2 className=" font-medium text-xl md:text-2xl my-3">
            Gedung Pertemaan Dasa <br /> Cangkol Kecamatan Mojolaban{" "}
          </h2>
          <p className="font-normal md:text-xl text-lg mb-12">
            Baca kisah bagaimana Gedung Desa Cangkol berhasil dibangun dan dipersewaan 
            yang dapat membantu warga untuk mensukseskan semua acara.
          </p>
          <Link
            className={`btn_green text-blue-30 px-12  font-semibold  py-4 rounded-full bg-green-10 hover:outline-green-10 hover:bg-green-600`}
            href={`/about`}
            onClick={handleNavigation}
            tabIndex={loading? -1 : undefined}
          >
            Baca
          </Link>
          {loading ? (
            <span className="relative flex w-5 h-auto left-28 bottom-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-sky-500"></span>
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
