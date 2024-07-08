import React from "react";
import Link from "next/link";
import NavbarLending from "@/components/NavbarLending";
import { BiUserCircle, BiWrench } from "react-icons/bi";
export default function Settings() {
  return (
    <main className="bg-blue-30 w-screen-sm h-screen">
      <NavbarLending />
      <div className="flex flex-wrap gap-10 mx-5 md:mx-13 lg:mx-24 my-16">
        <div className="bg-white-20 w-full h-60  text-center rounded-3xl shadow-xl shadow-gray-700 md:max-w-xs ">
          <BiUserCircle className="my-5 mx-5 text-5xl font-bold text-neutral-600 text-left  " />
          <h1 className=" font-extrabold text-4xl">My Profile</h1>
          <h3 className="py-4 text-slate-500">Ubah data diri kamu</h3>
          <Link
            className="btn_green text-blue-30 px-14 md:px-10 font-semibold xl:py-3 py-3 rounded-full bg-green-10 hover:outline-green-10 hover:bg-green-10/75"
            href={`/404`}
          >
            edit New
          </Link>
        </div>
        <div className="bg-white-20 w-full h-60  text-center rounded-3xl shadow-xl shadow-gray-700 md:max-w-xs">
          <BiWrench className="my-5 mx-5 p-1 text-5xl font-bold text-neutral-600 text-left border-4 border-neutral-600 rounded-full " />
          <h1 className=" font-extrabold text-3xl">My Password</h1>
          <h3 className="py-4 text-slate-500">Ganti kata sandimu</h3>
          <Link
            className="btn_green text-blue-30 px-14 md:px-10 font-semibold xl:py-3 py-3 rounded-full bg-green-10 hover:outline-green-10 hover:bg-green-10/75"
            href={`/change-password`}
          >
            chenge New
          </Link>
        </div>
      </div>
    </main>
  );
}
