import React, { useState } from "react";

const Fasil = () => {
  // State untuk menentukan bagian mana yang ditampilkan
  const [selectedSection, setSelectedSection] = useState("section1");
  return (
    <section className=" mx-2 md:px-24 my-20">
      <div className="shadow-blue-40 shadow-inner py-3 md:mb-10 mb-5  rounded-full">
        <h1 className="text-center mx-10 py-2 bg-blue-20 text-white-10 rounded-full shadow-at">
          Detail Fasilitas Umum
        </h1>
      </div>
      {/* Kolom Kiri: Navigasi */}
      <div className="sticky rounded-s-3xl  ">
        <ul className=" mx-5 lg:mx-60 items-center justify-center cursor-pointer flex gap-2  py-3  lg:px-10 rounded-t-2xl shadow-inner shadow-blue-40 text-blue-40">
          <li
            className={`py-1 px-1 md:px-3 rounded-2xl font-medium transitionAll75 hover:bg-slate-200 ${
              selectedSection === "section1"
                ? "  shadow-blue-40 shadow-at bg-white-10"
                : " bg-slate-100"
            } `}
            onClick={() => setSelectedSection("section1")}
          >
            Spesifikasi
          </li>
          <li
            className={`py-1 px-3 rounded-2xl font-medium  transitionAll75 hover:bg-slate-200 ${
              selectedSection === "section2"
                ? " shadow-blue-40 shadow-at bg-white-10"
                : " bg-slate-100"
            } `}
            onClick={() => setSelectedSection("section2")}
          >
            jejak aktivitas
          </li>
        </ul>
      </div>

      <div className=" overflow-y-auto md:py-2 py-2 md:px-6 px-2 rounded-3xl  shadow-inner shadow-blue-40 text-white-10 ">
        {selectedSection === "section1" && (
          <div
            id="section1"
            className="md:my-4 my-1 shadow-at shadow-blue-40  py-4 md:px-8 px-4  rounded-3xl bg-blue-30 delay-75"
          >
            <div className="grid md:grid-cols-4 grid-cols-3  md:gap-4 gap-2">
              <div>
                <h2 className="font-bold my-1">Parkiaran</h2>
                <div className="text-neutral-200 font-light">
                  <p>Bus</p>
                  <p>Motor</p>
                  <p>Mobil</p>
                </div>
              </div>
              <div>
                <h2 className="font-bold my-1">Luas gedung</h2>
                <div className="text-neutral-200 font-light">
                  <p>100 x 150 m</p>
                  <p>
                    tanah{" "}
                    <span>
                      6.515.98 m <sup>2</sup>
                    </span>
                  </p>
                  <p>Termasuk listrik</p>
                </div>
              </div>
              <div>
                <h2 className="font-bold my-1">Ruangan</h2>
                <div className="text-neutral-200 font-light">
                  <p>Ruang Ganti/Rias</p>
                  <p>Dapur catring</p>
                  <p>Toilet</p>
                  <p>mushola</p>
                </div>
              </div>
              <div>
                <h2 className="font-bold my-1">Kapasitas</h2>
                <p className="text-neutral-200 font-light">max 2.000 orang</p>
              </div>
            </div>
          </div>
        )}
        {selectedSection === "section2" && (
          <div
            id="section1"
            className="md:my-4 my-1 shadow-at shadow-blue-40  py-7 md:px-8 px-5 rounded-3xl bg-blue-30 delay-75"
          >
            <h1 className="text-center  mb-4 font-bold">
              Acara Kegiatan Yang Pernah Dilakukan
            </h1>
            <div className="grid md:grid-cols-4 grid-cols-1 gir md:gap-4 gap-1 text-neutral-200 font-light">
              <p>Resepsi Pernikahan</p>
              <p>Lomba Pencak Silat</p>
              <p>Halal bi halal</p>
              <p>Wisuda</p>
              <p>anniversary club motor</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Fasil;
