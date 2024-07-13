import React from "react";
import dynamic from 'next/dynamic';

const NavbarLending = dynamic(() => import("@/components/NavbarLending"), { ssr: false });
const FormSignup = dynamic(() => import("@/components/FormSignup"), { ssr: false });
export default function Signup() {
  return (
    <main className="bg-blue-30 w-screen md:h-screen h-[560px]">
      <NavbarLending />
      <div className="container flex items-center justify-center mx-auto ">
        <div className="bg-white-20 rounded-2xl">
          <div className="py-4 px-10">
            <FormSignup />
          </div>
        </div>
      </div>
    </main>
  );
}
