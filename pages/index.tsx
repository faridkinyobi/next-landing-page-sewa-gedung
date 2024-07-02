import React, { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import { getData } from "../utils/fetchData";
// import EventCalendar from "../components/LandingPage/Calender";
import About from "../components/LandingPage/About";
import Footer from "@/components/Footer";
import Header from "../components/LandingPage/Header";
import Paket from "../components/LandingPage/Paket";
import Loading from "../components/loading";
const Alur = React.lazy(() => import("../components/LandingPage/Alur"));
const Fasil = React.lazy(() => import("../components/LandingPage/Fasil"));
const Galery = React.lazy(() => import("../components/LandingPage/Galery"));
const EventCalendar = React.lazy(
  () => import("../components/LandingPage/Calender")
);
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
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <main>
          <Header />
          <Alur />
          <Fasil />
          {data ? <Paket data={data} /> : <Loading />}
          <About />
          {event ? <EventCalendar event={event} /> : <Loading />}
          <Galery />
          <Footer />
        </main>
      </Suspense>
    </ErrorBoundary>
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
