import React, { useState } from "react";
import { GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
const FormOrder = dynamic(() => import("@/components/FormOrder"));
// import DetailPaket from "@/components/DetailPaket";
const DetailPaket = dynamic(() => import("@/components/DetailPaket"), {
  loading: () => <Loading />,
});
const NavbarLending = dynamic(() => import("@/components/NavbarLending"));
import { getData } from "@/utils/fetchData";
import Petunjuk from "@/components/itemsData";
import Loading from "@/components/loading";
interface PaketType {
  detailPage: {
    _id: string | null;
    titel: string;
    fasilitas: Array<{ detail: string }>;
    harga: Array<{
      _id: string;
      kegiatan: string;
      hari: string;
      warga: string;
      hargadetail: number | string;
    }>;
  };
  selectedHarga: string;
  Petunjuk: {
    dec: string;
  }[];
}

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
        style={""}
      />
      <div className="container_form mx-[1rem] md:mx-[5.7rem] padding-container bg-blue-20 ">
        <div className=" bg-slate-300 px-9 shadow-xl">
          <h1 className="titel text-xl font-bold">Petunjuk Pemesanan</h1>
          <ol className="list-decimal text-sm md:text-xl">
            {Petunjuk.Petunjuk.map((item, index) => (
              <li key={index}>{item.dec}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="bg-white-10 mx-[2rem] padding-container ">
        <h3 className="Titel font-extrabold text-2xl">Formulir Pemesanan</h3>
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

  const response = await getData(
    `/app/v1/PeketPelanggan/${paramsId}`,
    {},
    token
  );
  const Paket = response?.data;

  return {
    props: {
      detailPage: Paket,
    },
  };
}
