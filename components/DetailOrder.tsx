import React from "react";
import { BsBuildingFillCheck, BsBagPlus } from "react-icons/bs";

type FormState = {
  Name: string;
  no_tlp: null;
  email: string;
  alamat: string;
  tgl_mulai: string;
  tgl_akhir?: string;
  waktu: string;
  kegiatan: string;
  MetPembayaran: string;
};
type DetailOrder = {
  form: FormState;
  selectedOption: string;
  detailPage: {
    titel: string;
  };
  handleCloseModal: () => void;
  handleSubmit: () => void;
  objekDataModal: {
    dataModal: {
      hari: string;
      kegiatan: string;
      warga: string;
      hargadetail: string | number;
    };
  };
};
function DetailOrder({
  form,
  selectedOption,
  detailPage,
  handleCloseModal,
  handleSubmit,
  objekDataModal,
}: DetailOrder) {
  let Akhir = form.tgl_akhir ? new Date(form.tgl_akhir) : null;
  let Mulai = new Date(form.tgl_mulai);
  const result = Akhir
    ? Math.ceil(new Date(Akhir).getTime() - new Date(Mulai).getTime()) /
        (1000 * 60 * 60 * 24) +
      1
    : 0;

  const lama_sewa = result || 1;
  const duration = Akhir ? result : /pernikahan/i.test(form.kegiatan) ? 1 : 12;
  // Pastikan hargadetail adalah string sebelum mencoba untuk menggantinya
  const hargaDetailString = String(objekDataModal.dataModal?.hargadetail);
  const hargaDetailNumber = Number(hargaDetailString.replace(/[^\d.-]/g, ""));
  const totalHarga = hargaDetailNumber * lama_sewa;

  return (
    <div className="container max-h-screen">
      <h1 className="text-blue-30 p-4 bg-orange-400 mb-4 flex items-center text-xl font-bold">
        <BsBagPlus className="mr-2 text-base md:text-xl w-10 h-10 p-2 rounded-xl bg-blue-30 text-gray-10 " />
        Sewa Gedung Desa Cangkol
      </h1>
      <div className="mx-2">
        <div className="flex mx-auto">
          <BsBuildingFillCheck className=" py-1 px-2 text-7xl md:text-7xl text-blue-30 bg-blue-10 mr-5" />
          <div className="my-auto text-sm md:text-base">
            <h1>{detailPage.titel}</h1>
            <h3>
              {objekDataModal.dataModal?.hari},
              {objekDataModal.dataModal?.kegiatan},
              {objekDataModal.dataModal?.warga}
            </h3>
            <h3>
              {hargaDetailNumber.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </h3>
          </div>
        </div>
        <h1 className="desc text-xl ml-2 font-medium">Order Details :</h1>
        <table className="ml-6 text-left gap-1 text-sm md:text-base">
          <tr className="">
            <th className="">Nama</th>
            <td className="pl-4 md:pl-10">: {form.Name}</td>
          </tr>
          <tr>
            <th>No Telfon</th>
            <td className="pl-4 md:pl-10">: {form.no_tlp}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td className="pl-4 md:pl-10">: {form.email}</td>
          </tr>
          <tr>
            <th>Alamat</th>
            <td className="pl-4 md:pl-10">: {form.alamat}</td>
          </tr>
          <tr>
            <th>Tanggal Mulai</th>
            <td className="pl-4 md:pl-10">
               : {new Date(form.tgl_mulai).toLocaleString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </td>
          </tr>
          {selectedOption === "4" && form.tgl_akhir &&(
            <tr>
              <th>Tanggal Akhir</th>
              <td className="pl-4 md:pl-10">
                : {new Date(form.tgl_akhir).toLocaleString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
            </tr>
          )}
          <tr>
            <th>Waktu</th>
            <td className="pl-4 md:pl-10">: {form.waktu}</td>
          </tr>
          <tr>
            <th>Kegiatan</th>
            <td className="pl-4 md:pl-10">: {form.kegiatan}</td>
          </tr>
          <tr className="gap-10">
            <th>Pembayaran</th>
            <td className="pl-4 md:pl-10">: {form.MetPembayaran}</td>
          </tr>
        </table>
        <h1 className="rician text-xl ml-2 font-medium">Rincian Penbayaran</h1>
        <div className="flex justify-between text-sm md:text-base">
          <div className="ml-6 font-bold text-sm md:text-base">
            <h3>Harga</h3>
            <h3>Lama sewa</h3>
            <h3>Total </h3>
          </div>
          <div className=" mr-16">
            <h1>
              {hargaDetailNumber.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </h1>
            <h1>
              {duration}
              {form.tgl_akhir || /pernikahan/i.test(form.kegiatan)
                ? "hari"
                : "jam"}
            </h1>
            <h1>
              {totalHarga.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </h1>
          </div>
        </div>
      </div>
      <div className="tombol flex justify-end mx-6 my-3">
        <p
          className="closs cursor-pointer mx-5 bg-red-600 px-8 py-2 text-white-20 hover:bg-red-700 border-2 hover:border-red-800 delay-200 transition-all"
          onClick={handleCloseModal}
        >
          closs
        </p>
        <p
          className="order cursor-pointer bg-blue-600 px-8 py-2 text-white-20 hover:bg-blue-700 border-2 hover:border-blue-800 delay-200 transition-all"
          onClick={handleSubmit}
        >
          orders
        </p>
      </div>
    </div>
  );
}

export default DetailOrder;
