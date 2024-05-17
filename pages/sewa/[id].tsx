import React, { useState } from "react";
import { GetServerSidePropsContext } from "next";
import NavbarLending from "../../components/NavbarLending";
import FormOrder from "../../components/FormOrder";
import DetailPaket from "@/components/DetailPaket";
import { getData } from "@/utils/fetchData";

interface PaketType {
  detailPage: {
    _id: string | null;
    titel: string;
    fasilitas: Array<{ detail: string }>;
    harga: Array<{
      _id: string;
      kegiata: string;
      hari: string;
      warga: string;
      hargadetail: string;
    }>;
  };
  selectedHarga: string;
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

  const [selectedHarga, setSelectedHarga] = useState<string>("");
  const [isCardChecked, setIsCardChecked] = useState<boolean | null>(false);
  
  const handleHargaSelection = (_id: string) => {
    setSelectedHarga(_id);
  };
  return (
    <section className="bg-blue-30 lg:h-[50rem] h-[50rem] sm:h-[78rem]">
      <NavbarLending />
      <DetailPaket
        detailPage={detailPage}
        handleHargaSelection={handleHargaSelection}
        isCardChecked={isCardChecked}
        setIsCardChecked={setIsCardChecked}
      />
      <div className="container_form mx-[2rem] padding-container bg-blue-20 ">
        <div className=" bg-slate-300 px-6 shadow-xl">
          <h1 className="titel text-xl font-bold">Petunjuk Pemesanan</h1>
          <ol className="list-decimal text-sm md:text-xl">
            {Petunjuk.map((item, index) => (
              <li key={index}>{item.dec}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="bg-white-10 mx-[2rem] padding-container ">
        <h3>Formulir Pemesanan</h3>
        <FormOrder
          selectedHarga={selectedHarga}
          detailPage={detailPage}
          isCardChecked={isCardChecked}
          objekData={{
            data: {  
              hari: "",
              kegiata: "",
              warga: "",
              hargadetail: "",
            },
          }}
        />
      </div>
    </section>
  );
};

export default Chekout;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { token } = context.req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  const paramsId = context.params?.id as string;

  const response = await getData(`/app/v1/PeketPelanggan/${paramsId}`,{},token);
  const Paket = response?.data;

  return {
    props: {
      detailPage: Paket,
    },
  };
}
