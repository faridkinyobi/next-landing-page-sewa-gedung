import Image from "next/image";
import Header from '../components/LandingPage/Header'
import Alur from '../components/LandingPage/Alur'
import Paket from '../components/LandingPage/Paket'
import About from '../components/LandingPage/About'
import EventCalendar from '../components/LandingPage/Calender'
import Galery from '../components/LandingPage/Galery'
import { getData } from '../utils/fetchData';
import React, { useState } from "react";
import axios from "axios";

// Defining the types for the props
interface PaketType {
  data: {
    titel: string;
    _id: number;
    fasilitas: { detail: string }[];
    harga: {
      kegiata: string;
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
      <Paket data={data}  />
      <About />
      <EventCalendar event={event} />
      <Galery/>
    </main>
  );
}

export async function getServerSideProps() {
  // Fetching data using getData utility function
  const paketRespon = await getData("/app/v1/cms/pakets");
  const pakets = paketRespon.data;

  const eventRespon = await getData("/app/v1/cms/jadwal");
  const event = eventRespon.data;

  return {
    props: {
      data: pakets,
      event: event,
    },
  };
}
