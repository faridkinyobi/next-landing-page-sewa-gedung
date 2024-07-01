import React, { Suspense } from "react";
import { GetServerSidePropsContext } from "next";
import NavbarLending from "@/components/NavbarLending";
const FormSignin = React.lazy(() => import("@/components/FormSignin"));
export default function Signin() {
  return (
    <main className="bg-blue-30 h-screen w-screen md:h-fit md:w-auto">
      <NavbarLending />
      <div className="container flex items-center justify-center mx-auto ">
        <div className="bg-white-20 rounded-2xl my-10 ">
          <div className="p-10">
            <h1 className="text-center font-bold text-3xl my-2">Sing In</h1>
            <Suspense
              fallback={<div className="text-white-10">Loading...</div>}
            >
              <FormSignin />
            </Suspense>
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
