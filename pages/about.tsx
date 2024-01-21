
import React, { useState } from "react";
import NavbarLending from "../components/NavbarLending";
import Paket from "../components/LandingPage/Paket";
import Footer from "../components/Footer";
import {
  BsEnvelope,
  BsFacebook,
  BsGeoAlt,
  BsInstagram,
  BsTelephone,
  BsYoutube,
} from "react-icons/bs";

interface PaketType {
    data: {
      titel: string;
      _id:number;
      fasilitas: { detai: string}[];
      harga: {
        kegiata: string;
        hari: string;
        warga: string;
        hargadetail: number;
      }[];
    }[];
  }
const About = ({data}:PaketType) => {
  const [clicked, setClicked] = useState(true);
  return (
    <div
      className=" h-[794px]  bg-cover bg-center"
      style={{ backgroundImage: "url('bg-about.svg')" }}
    >
      <NavbarLending clicked={clicked} setClicked={setClicked} />
      <div
        className={`text-white-10 font-semibold lg:text-[3rem] leading-none text-[45px]  text-center mt-20 ${
          clicked
            ? "transition_duration"
            : "py-[8rem] mt-40 transition_duration lg:mt-auto"
        }`}
      >
        Bagaimana{" "}
        <span className="bg-gradient-to-br from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Gedung ini
        </span>
        <br />
        <span className="bg-gradient-to-r from-pink-500 to-pink-200 bg-conic-gradient bg-clip-text text-transparent">
          Dibangun dan{" "}
        </span>{" "}
        Dipersewakan
      </div>
      <div className="paragraf text-justify mx-10  lg:mx-[6rem] md:mt-96 mt-48">
        <h1 className="titel font-semibold text-2xl my-7">
          Gedung Pertenuan Desa cangkol
        </h1>
        <p className="containt font-normal text-sm  xl:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa
          quibusdam error nobis accusantium asperiores consequuntur quisquam
          facilis praesentium suscipit soluta tempore nihil quaerat quas
          nesciunt natus ipsa necessitatibus, blanditiis fugiat quis odio ea.
          Officia saepe deserunt rem dolorem nihil error earum architecto.
          Doloremque molestias obcaecati at ea, doloribus eveniet eius rem
          nulla, maiores fuga consequatur architecto aspernatur repellendus
          libero beatae eaque deleniti, quidem laudantium reprehenderit
          accusantium quasi odit assumenda error laboriosam. Facilis earum
          voluptates hic ratione architecto, assumenda maiores ut. Pariatur
          culpa vel veritatis adipisci, odit veniam. Laudantium dicta cumque eos
          explicabo quis iure voluptatibus minus libero repellendus.
          Perferendis?
        </p>
        <p className="containt font-normal text-sm  xl:text-2xl mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa
          quibusdam error nobis accusantium asperiores consequuntur quisquam
          facilis praesentium suscipit soluta tempore nihil quaerat quas
          nesciunt natus ipsa necessitatibus, blanditiis fugiat quis odio ea.
          Officia saepe deserunt rem dolorem nihil error earum architecto.
          Doloremque molestias obcaecati at ea, doloribus eveniet eius rem
          nulla, maiores fuga consequatur architecto aspernatur repellendus
          libero beatae eaque deleniti, quidem laudantium reprehenderit
          accusantium quasi odit assumenda error laboriosam. Facilis earum
          voluptates hic ratione architecto, assumenda maiores ut. Pariatur
          culpa vel veritatis adipisci, odit veniam. Laudantium dicta cumque eos
          explicabo quis iure voluptatibus minus libero repellendus.
          Perferendis?
        </p>
      </div>
      {/* <Paket data={data}/> */}
      <div className="kontak mt-20 xl:mt-96 mx-10 lg:mx-24 flexStart ">
        <div className="kontak flex flex-wrap md:static gap-16">
          <img
            src="abaut.svg"
            alt="Logo"
            width={200}
            height={200}
            className="shadow-lg rounded-2xl md:w-[300px] md:h-[400px]:"
          />
          <div className="md:mt-20 mt-2  text-left sm:w-[19rem] sm:text-2xl ">
            <p className="text-base sm:text-lg flex  ">
              <BsTelephone className="bg-blue-10 p-2 w-11 text-4xl  text-white-10 rounded-md mr-4" />
              08568291228
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
      <div className="mx-10 lg:mx-60 md:mt-36 mt-10 ">
        <h1 className="titel font-bold text-3xl  text-blue-40  my-7">Maps</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15818.656562341292!2d110.8778483!3d-7.611477199999981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3df443986921%3A0xd962e1261bc15f22!2sGedung%20Cangkol!5e0!3m2!1sid!2sid!4v1704034189061!5m2!1sid!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="bg-blue-20 w-full h-[30rem]  justify-center items-center absolute lg:top-[190rem] top-[278rem] z-[-1] ">
        {/* <footer className="my-6 mt-60 w-full">
          <div className=" flex flex-wrap justify-between mx-10 lg:mx-28 text-white-10">
            <div>
              <img src="/img/logo2.png" alt="Logo" width={140} height={100} />
              <p className=" font-light] text-sm lg:text-2xl w-60  ml-3 mt-3">
                {" "}
                Website ini resmi milik gedung desa cangkol
              </p>
            </div>
            <div className="">
              {navitem.map((item) => (
                <a className="m-2 block " href={item.url}>
                  {item.titel}
                </a>
              ))}
            </div>
            <div className=" mr-10">
              <BsInstagram className="bg-blue-10 p-2 w-11 text-5xl text-white-10 rounded-md " />

              <BsFacebook className="bg-blue-10 p-2 w-11 text-5xl text-white-10 rounded-md mr-9 my-3" />

              <BsYoutube className="bg-blue-10 p-2  w-11 text-5xl text-white-10 rounded-md " />
            </div>
          </div>
        </footer> */}
        <Footer />
      </div>
    </div>
  );
};

export default About;
export async function getServerSideProps(){
    return{
      props:{ data:[  {
        _id:1,
        titel: "Paket 2",
        fasilitas: [
          {
            detai: "meja dan kursi untuk 1000 tamu",
          },
          {
            detai: "kursi VIP",
          },
          {
            detai: "Ruang rias Pengantin",
          },
          {
            detai: "Parkir Luas",
          },
          {
            detai: "Ruang Catring",
          },
          {
            detai: "Toilet",
          },
        ],
        harga: [
          {
            name: "Resepsi",
            hari: "Weekend",
            warga: "warga desa cangkol",
            hargadetail: "1.000.000",
          },
          {
            kegiata: "Resepsi",
            hari: "Weekend",
            warga: "luar desa cangkol",
            hargadetail: "1.000.000",
          },
          {
            kegiata: "Resepsi",
            hari: "Weekend",
            warga: "luar desa cangkol",
            hargadetail: "1.000.000",
          },
        ],
      },
    ]}
    }
  }