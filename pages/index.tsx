// import Image from "next/image";
// import dynamic from "next/dynamic";
// ("use strict");
import { getData } from "../utils/fetchData";
import React from "react";
import EventCalendar from "../components/LandingPage/Calender";
import Alur from "../components/LandingPage/Alur";
import About from "../components/LandingPage/About";
import Fasil from "../components/LandingPage/Fasil";
import Footer from "@/components/Footer";
import Header from "../components/LandingPage/Header";
import Galery from "../components/LandingPage/Galery";
import Paket from "../components/LandingPage/Paket";
// const EventCalendar = dynamic(
//   () => import("../components/LandingPage/Calender"),
//   {
//     ssr: true,
//   }
// );
// const Alur = dynamic(() => import("../components/LandingPage/Alur"), {
//   ssr: false,
// });
// const About = dynamic(() => import("../components/LandingPage/About"), {
//   ssr: false,
// });
// const Fasil = dynamic(() => import("../components/LandingPage/Fasil"), {
//   ssr: false,
// });
// const Footer = dynamic(() => import("@/components/Footer"), {
//   ssr: false, // Jika Anda tidak memerlukan SSR untuk komponen ini
// });
// const Header = dynamic(() => import("../components/LandingPage/Header"), {
//   ssr: false,
// });
// const Galery = dynamic(() => import("../components/LandingPage/Galery"), {
//   ssr: false,
// });
// const Paket = dynamic(() => import("../components/LandingPage/Paket"), {
//   ssr: true,
// });

// Defining the typesc for the props
interface PaketType {
  data: {
    titel: string;
    _id: number;
    fasilitas: { detail: string }[];
    harga: {
      kegiatan: string;
      hari: string;
      warga: string;
      hargadetail: number;
    }[];
  }[];
  event: {
    id: number;
    kegiatan: string;
    tgl_mulai: Date;
    tgl_akhir: Date;
    lama_sewa: number;
    status_kegiatan: string;
    waktu: number;
  }[];
}

export default function Home({ data, event }: PaketType) {
  return (
    <main
    // style={{
    //   backgroundImage: "url('/img/Group61.svg')",
    //   backgroundSize: "cover",
    // }}
    >
      <Header />
      <Alur />
      <Fasil />
      <Paket data={data} />
      <About />
      <EventCalendar event={event} />
      <Galery />
      <Footer />
    </main>
  );
}

export async function getServerSideProps() {
  try {
    // Fetching data using getData utility function
    const [paketRespon, eventRespon] = await Promise.all([
      getData("/app/v1/PeketPelanggan"),
      getData("/app/v1/jadwalPelanggan"),
    ]);
    const data = paketRespon?.data;
    const event = eventRespon?.data;

    return {
      props: {
        data,
        event,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        event: null,
      },
    };
  }
}
