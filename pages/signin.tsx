import React from "react";
import { GetServerSidePropsContext } from 'next';
import NavbarLending from "@/components/NavbarLending";
import FormSignin from "../components/FormSignin";

export default function Signin() {


  return (
    <main className="bg-blue-30 md:h-[50rem] h-[78rem]">
      <NavbarLending/>
      <div className="container flex items-center justify-center">
        <div
          className="bg-white-20 lg:ml-24 rounded-2xl mt-10 sm:mt-[9rem] lg:mt-[2rem]"
        >
          <div className="m-10">
            <h1 className="text-center font-bold text-3xl my-5">Sing In</h1>
            <FormSignin />
          </div>
        </div>
      </div>
    </main>
  );
}
export async function getServerSideProps(context:GetServerSidePropsContext ) {
  const { token } = context.req.cookies;

  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
