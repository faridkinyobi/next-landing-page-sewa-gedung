import React, { Suspense } from "react";
import NavbarLending from "@/components/NavbarLending";
const FormSignup = React.lazy(() => import("@/components/FormSignup"));
export default function Signup() {
  return (
    <main className="bg-blue-30 h-screen w-screen md:h-fit md:w-auto">
      <NavbarLending />
      <div className="container flex items-center justify-center md:-mt-10">
        <div className="bg-white-20 rounded-2xl my-10">
          <div className="py-6 px-10">
            <h1 className="text-center font-bold text-3xl">Sing up</h1>
            <Suspense
              fallback={<div className="text-white-10">Loading...</div>}
            >
              <FormSignup />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
