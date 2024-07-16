import React from "react";
import { GetServerSidePropsContext } from "next";
import dynamic from 'next/dynamic';

import NavbarLending from "@/components/NavbarLending";
const FormSignin = dynamic(() => import("@/components/FormSignin"), { ssr: false });
export default function Signin() {
  return (
    <div className="bg-blue-30  w-screen h-screen">
      <NavbarLending />
      <div className="container flex items-center justify-center mx-auto ">
        <div className="bg-white-20 rounded-2xl mb-14 md:mb-10">
          <div className="p-10">
            <h1 className="text-center font-bold text-3xl my-2">Sign In</h1>
            <FormSignin />
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { token } = context.req.cookies;

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
