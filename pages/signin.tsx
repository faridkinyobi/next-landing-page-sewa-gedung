import React from "react";
import { GetServerSidePropsContext } from "next";
const NavbarLending = React.lazy(() => import("@/components/NavbarLending"));
const FormSignin = React.lazy(() => import("@/components/FormSignin"));
export default function Signin() {
  return (
    <main className="bg-blue-30 h-screen w-screen md:h-fit md:w-auto">
      <NavbarLending />
      <div className="container flex items-center justify-center mx-auto ">
        <div className="bg-white-20 rounded-2xl my-10 ">
          <div className="p-10 transition-transform delay-200">
            <h1 className="text-center font-bold text-3xl my-2">Sing In</h1>
            <FormSignin />
          </div>
        </div>
      </div>
    </main>
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
