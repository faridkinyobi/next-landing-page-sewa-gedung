import React from "react";
import Button from "../Button";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter()

  return (
    <section id="about" className="About  justify-center  items-center mx-[3rem] md:mx-[6rem]  my-[6rem] my:my-[10rem]">
      <div className="flex flex-wrap">
        <img
          src="/img/abaut.svg"
          alt="Logo"
          width={340}
          height={340}
          className="shadow-alg rounded-2xl"
          loading="lazy"
        />
        <div className="lg:mx-20 sm:mx-[1.5rem] mt-7 w-[40rem] md:w-[20rem] lg:w-[30rem]">
          <h1 className="font-bold text-3xl my-2 text-blue-40">About</h1>
          <h2 className=" font-medium text-xl md:text-2xl my-3">
            Gedung Pertemaan Dasa <br /> Cangkol Kecamatan Mojolaban{" "}
          </h2>
          <p className="font-normal md:text-xl text-lg  ">
            Baca kisah bagaimana gedung desa Cangkol berhasil dibangun dan di
            persewaan yang dapatmembantu warga untuk mensukses kan semuah acara.
          </p>
          <Button
              className="btn_green mt-7 px-14 xl:py-3 py-3 text-xl "
              type="button"
              title="Baca"
              onClick={() => router.push('/about')}
            />
        </div>
      </div>
    </section>
  );
};

export default About;
