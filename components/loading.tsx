import React from "react";
import { CgSpinnerAlt } from "react-icons/cg";
export default function Loading() {
  return (
    <div className="flex justify-center items-cente text-center">
    <svg
      className="animate-spin h-10 w-10 mr-3 "
      viewBox="0 0 24 24"
    >
      <CgSpinnerAlt  className=" text-2xl"/>
    </svg>
    <p className="mt-1">loading....</p>
  </div>
  );
}
