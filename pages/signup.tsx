import React from "react";
import NavbarLending from "@/components/NavbarLending";
import FormSignup  from "@/components/FormSignup";
export default function Signup() {
  return (
    <main className="bg-blue-30 w-screen h-screen ">
      <NavbarLending />
      <div className="container flex items-center justify-center mx-auto ">
        <div className="bg-white-20 rounded-2xl mb-14 md:mb-10 ">
          <div className="py-4 px-10">
            <FormSignup />
          </div>
        </div>
      </div>
    </main>
  );
}
