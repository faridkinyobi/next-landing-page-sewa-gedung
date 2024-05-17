import React,{useState} from "react";

import NavbarLending from "@/components/NavbarLending";
import FormSignup from "../components/FormSignup";

export default function Signup() {
  return (
    <main className="bg-blue-30 h-[676px]">
      <NavbarLending />
      <div className="container flex items-center justify-center ">
        <div className="bg-white-20 md:ml-24 rounded-2xl">
          <div className="m-10">
          <h1 className="text-center font-bold text-3xl">Sing up</h1>
          <FormSignup/>
          </div>
        </div>
      </div>
    </main>
  )
}
