"use client"
import React from "react";
import Button from "../Button";
import { useRouter } from 'next/navigation'


const About = () => {
  const router = useRouter()
  return (
    <section id="about" className="About  justify-center  items-center mx-[3rem] xl:mx-[6rem]  my-[6rem] xl:my-[10rem]">
      <div className="flex flex-wrap">
        <img
          src="abaut.svg"
          alt="Logo"
          width={340}
          height={400}
          className="shadow-lg rounded-2xl"
        />
        <div className="lg:mx-20 sm:mx-[1.5rem] mt-7 w-[34rem] md:w-[20rem] lg:w-[30rem]">
          <h1 className="font-bold text-3xl my-2 text-blue-40">About</h1>
          <h2 className=" font-normal text-2xl my-3">
            Gedung Pertemaan Dasa <br /> cangkol Kecamatan Mojolanan{" "}
          </h2>
          <p className="font-normal text-1xl  ">
            Baca kisah bagaimana gedung desa cangkol berhasil dibangun dan di
            persewaan yang dapatmembantu warga untuk mensukses kan semuah acara.
          </p>
          <Button
              className="btn_green lg:mt-20 mt-7 w-full py-4   shadow-md  border-2 border-gray-10   active:bottom-4 duration-100 transition-all ease-in  active:border-4 focus:border-gray-300 "
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
