import React from "react";
import { getData } from "../utils/fetchData";
import Footer from "@/components/Footer";
import Header from "../components/LandingPage/Header";
import Alur from "../components/LandingPage/Alur";
import Fasil from "../components/LandingPage/Fasil";
import Galery from "@/components/LandingPage/Galery";
import Paket from "../components/LandingPage/Paket";
import EventCalendar from "@/components/LandingPage/Calender";
import About from "@/components/LandingPage/About";

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
    <main>
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
    const data = paketRespon?.data || [];
    const event = eventRespon?.data || [];
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
