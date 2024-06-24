import React, { useState } from "react";
import NavbarLending from "../components/NavbarLending";
import Footer from "../components/Footer";
import Image from "next/image";
import {
  BsEnvelope,
  // BsFacebook,
  BsGeoAlt,
  // BsInstagram,
  BsTelephone,
  // BsYoutube,
} from "react-icons/bs";

interface PaketType {
  data: {
    titel: string;
    _id: number;
    fasilitas: { detai: string }[];
    harga: {
      kegiata: string;
      hari: string;
      warga: string;
      hargadetail: number;
    }[];
  }[];
}
const About = ({ data }: PaketType) => {
  const [clicked, setClicked] = useState(true);
  return (
    <div
      className=" h-[794px]  bg-cover bg-center"
      style={{ backgroundImage: "url('/img/bg-about.svg')" }}
    >
      <NavbarLending />
      <div
        className={`text-white-10 font-semibold lg:text-[3rem] leading-none text-[45px]  text-center mt-20 ${
          clicked
            ? "transition_duration"
            : "py-[8rem] mt-40 transition_duration lg:mt-auto"
        }`}
      >
        Bagaimana{" "}
        <span className="bg-gradient-to-br from-violet-500 to-teal-400 bg-clip-text text-transparent">
          Gedung ini
        </span>
        <br />
        <span className="bg-gradient-to-r from-orange-500 to-orange-200 bg-conic-gradient bg-clip-text text-transparent">
          Dibangun dan{" "}
        </span>{" "}
        Dipersewakan
      </div>
      <div className="paragraf text-justify mx-10  lg:mx-[6rem] md:mt-96 mt-48">
        <h1 className="titel font-semibold text-2xl my-7 text-slate-500">
          Gedung Pertenuan Desa Cangkol
        </h1>
        <p className="containt font-normal text-sm  md:text-xl">
          Pembangunan Gedung Pertemuan Desa Cangkol dimulai dari kebutuhan akan
          tempat pertemuan yang luas dan representatif. Kepala Desa Cangkol
          menyadari bahwa desanya tidak memiliki tempat yang cukup besar untuk
          mengadakan acara seperti pesta pernikahan, rapat, dan berbagai
          kegiatan masyarakat lainnya. Untuk itu, Kepala Desa berinisiatif untuk
          membangun gedung pertemuan yang mampu menampung berbagai jenis acara,
          sekaligus menyediakan area parkir yang memadai.
        </p>
        <p className="containt font-normal text-sm   md:text-xl mt-5">
          Proses pembangunan gedung dimulai pada tahun 2017, dengan
          pengalokasian lahan bengkok desa seluas 1 hektar dan tambahan 1.000
          meter persegi untuk pasar desa. Namun, penggalian dan pengurukan lahan
          memerlukan biaya yang cukup besar. Dengan anggaran dari pemerintah
          yang terbatas, Kepala Desa berupaya mencari dana tambahan dari pihak
          ketiga untuk melanjutkan proyek ini.
        </p>
        <p className="containt font-normal text-sm  md:text-xl mt-5">
          Pandemi COVID-19 pada tahun 2020 menyebabkan proyek pembangunan
          terhenti sementara, namun gedung pertemuan masih dapat digunakan untuk
          kegiatan vaksinasi dan rapat terbatas. Setelah pandemi mereda,
          pembangunan kembali dilanjutkan. Dukungan datang dari pemerintah dan
          masyarakat, termasuk kunjungan Ketua DPR Puan Maharani, yang
          menunjukkan apresiasi terhadap gedung yang mampu menampung hingga
          2.000 orang dengan area parkir yang luas.
        </p>
        <p className="containt font-normal text-sm  md:text-xl mt-5">
          Salah satu keunggulan gedung ini adalah biaya sewanya yang relatif
          murah, dengan tarif yang terjangkau untuk masyarakat lokal. Gedung ini
          juga dilengkapi dengan fasilitas kursi, listrik, dan kebersihan.
          Pendapatan dari sewa gedung digunakan untuk mendukung pembangunan desa
          dan ekonomi lokal.
        </p>
        <p className="containt font-normal text-sm   md:text-xl mt-5">
          Selain gedung pertemuan, Kepala Desa Cangkol memiliki rencana untuk
          membangun fasilitas lain seperti stadion, area kuliner, dan rumah
          kontrakan, dengan tujuan untuk mendorong perkembangan ekonomi desa.
          Proyek-proyek ini diharapkan dapat mendukung pertumbuhan desa dan
          meningkatkan pendapatan masyarakat setempat.
        </p>
      </div>

      {/* <Paket data={data}/> */}

      <div className="kontak my-10 xl:my-20 mx-10 lg:mx-24 flexStart ">
        <div className="kontak flex flex-wrap md:static gap-16">
          <Image
            src="/img/abaut.svg"
            alt="Logo"
            width={200}
            height={200}
            className="shadow-lg rounded-2xl md:w-[300px] md:h-[400px]:"
            loading="lazy"
          />
          <div className="md:mt-20 mt-2  text-left sm:w-[19rem] sm:text-2xl ">
            <p className="text-base sm:text-lg flex  ">
              <BsTelephone className="bg-blue-10 p-2 w-11 text-4xl  text-white-10 rounded-md mr-4" />
              081915312649
            </p>
            <p className=" text-base sm:text-lg flex my-4">
              <BsEnvelope className="bg-blue-10 p-2 w-11 text-4xl  text-white-10 rounded-md mr-4" />
              ged_Cangkol@gmail.com
            </p>
            <p className=" text-base  sm:text-lg flex">
              <BsGeoAlt className="bg-blue-10 p-2 w-16 md:w-13  text-4xl  text-white-10 rounded-md mr-4" />
              Jepuh, Cangkol, Kec. Mojolaban, Jawa Tengah
            </p>
          </div>
        </div>
      </div>
      <div className="mx-10 md:mx-60  mb-10">
        <h1 className="titel font-bold text-3xl  text-blue-40  my-7">Maps</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15818.656562341292!2d110.8778483!3d-7.611477199999981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3df443986921%3A0xd962e1261bc15f22!2sGedung%20Cangkol!5e0!3m2!1sid!2sid!4v1704034189061!5m2!1sid!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="z-10">
        <Footer />
      </div>
    </div>
  );
};

export default About;
// export async function getServerSideProps() {
//   return {
//     props: {
//       data: [
//         {
//           _id: 1,
//           titel: "Paket 2",
//           fasilitas: [
//             {
//               detai: "meja dan kursi untuk 1000 tamu",
//             },
//             {
//               detai: "kursi VIP",
//             },
//             {
//               detai: "Ruang rias Pengantin",
//             },
//             {
//               detai: "Parkir Luas",
//             },
//             {
//               detai: "Ruang Catring",
//             },
//             {
//               detai: "Toilet",
//             },
//           ],
//           harga: [
//             {
//               name: "Resepsi",
//               hari: "Weekend",
//               warga: "warga desa cangkol",
//               hargadetail: "1.000.000",
//             },
//             {
//               kegiata: "Resepsi",
//               hari: "Weekend",
//               warga: "luar desa cangkol",
//               hargadetail: "1.000.000",
//             },
//             {
//               kegiata: "Resepsi",
//               hari: "Weekend",
//               warga: "luar desa cangkol",
//               hargadetail: "1.000.000",
//             },
//           ],
//         },
//       ],
//     },
//   };
// }
