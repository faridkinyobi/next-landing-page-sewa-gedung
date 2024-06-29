import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function PageNotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.back();
    }, 2000);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-6xl font-bold text-gray-800">404</div>
      <div className="text-2xl text-gray-600">Halaman tidak ditemukan</div>
      <Link className=" text-blue-600" href="/">
        Kembali ke Halaman Utama
      </Link>
    </div>
  );
}
