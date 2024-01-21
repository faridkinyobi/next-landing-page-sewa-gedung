import React, { useState } from "react";
import axios from "axios";
import NavbarLending from "../../components/NavbarLending";
import FormOrder from "../../components/FormOrder";
import DetailPaket from "@/components/DetailPaket";
import { getData } from "@/utils/fetchData";
interface PaketType {
  detailPage: {
    titel: string;
    fasilitas: { detail: string }[];
    harga: {
      kegiata: string;
      hari: string;
      warga: string;
      hargadetail: number;
    }[];
  }[];
}

const Petunjuk = [
  {
    dec: "Silahkan pilih paket dan harga ",
  },
  {
    dec: "Silakan isi identitas Anda dengan benar termasuk KTP (Kartu Tanda Penduduk), karena akan digunakan pada saat verifikasi.",
  },
  {
    dec: "Setelah berhasil melakukan pemesanan, Anda bisa melihat jadwal pemesanan Anda di menu 'Jadwal pemesanan.",
  },
  {
    dec: "Admin akan verifikasi pemesanan anda sudah sesui atau belum",
  },
  {
    dec: "Setelah berhasil melakukan pemesanan dan melakuan pembayaran uang muka sesui metode pembayaram, lakukan Pemberitahuan  paling lambat 14 hari setelah pemesanan, dengan cara datang langsung pada jam kerja ke Kantor desa cangkol dengan membawa bukti transaksi dan KTP atau menghubungi lewat nomer yang sudah tertera",
  },
  {
    dec: "Jika dalam waktu 14 hari Anda belum melakukan Pemberitahuan, data pemesanan Anda akan dihapus.",
  },
];

const Chekout = ({ detailPage }: PaketType) => {
  const [clicked, setClicked] = useState(true);
  const [selectedHarga, setSelectedHarga] = useState(null);
  // console.log(selectedHarga)
  const handleHargaSelection = (id) => {
    setSelectedHarga(id);
  };
  return (
    <section className="bg-blue-30 lg:h-[50rem] h-[50rem] sm:h-[78rem]">
      <NavbarLending clicked={clicked} setClicked={setClicked} />
      <DetailPaket
        detailPage={detailPage}
        handleHargaSelection={handleHargaSelection}
      />
      <div className="container_form mx-[7.8rem] padding-container bg-blue-20">
        <div className="">
          <h1>Petunjuk Pemesanan</h1>
          <ol className=" list-decimal">
            {Petunjuk.map((item, index) => (
              <li key={index}>{item.dec}</li>
            ))}
          </ol>
        </div>
      </div>
        <div className="bg-white-10 mx-[7.8rem] padding-container ">
          <h3>Formulir Pemesanan</h3>
          <FormOrder selectedHarga={selectedHarga} detailPage={detailPage} />
        </div>
    </section>
  );
};

export default Chekout;
export async function getServerSideProps(context) {
  const { token } = context.req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  const response = await getData(`/app/v1/cms/pakets/${context.params.id}`);
  const Paket = response.data;
  console.log(Paket);
  return {
    props: {
      detailPage: Paket,
    },
  };
}
