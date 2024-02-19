import React from "react";
import { BsBuildingFillCheck, BsBagPlus } from "react-icons/bs";
type DetailPageItem = {
  title: string;
  // Add other properties as needed
};
type FormState = {
  Name: string;
  no_tlp: string;
  email: string;
  alamat: string;
  no_ktp: string;
  tgl_mulai: string;
  tgl_akhir?: string; // Make it optional if it's conditionally included
  waktu: string;
  kegiatan: string;
  // Add other properties as needed
};
type DetailOrder = {
  form: FormState;
  selectedOption: string;
  detailPage: {
    titel: string;
  };
  handleCloseModal: () => void;
  handleSubmit: () => void;
  objekData: {
    data: {
      hari: string;
      kegiata: string;
      warga: string;
      hargadetail: string;
    };
  };
};
function DetailOrder({
  form,
  selectedOption,
  detailPage,
  handleCloseModal,
  handleSubmit,
  objekData
}: DetailOrder) {
  var Akhir = form.tgl_akhir ? new Date(form.tgl_akhir) : "0000-00-00"
  console.log(Akhir)
  var Mulai = new Date(form.tgl_mulai)
  const tanggal = Akhir
  ? new Date(Akhir).getTime() - new Date(Mulai).getTime()
  : 0;
  // console.log(tanggal)
  const hasil = Math.ceil(tanggal / (1000 * 60 * 60 * 24) + 1);

 var lama_sewa = hasil | 1

  return (
    <div className="container max-h-screen">
      <h1 className="text-blue-30 p-4 bg-orange-400 mb-5 flex items-center text-xl font-bold">
        <BsBagPlus className="mr-2 text-xl w-11 h-11 p-2 rounded-xl bg-blue-30 text-gray-10 " />
        Sewa Gedung Desa Cangkol
      </h1>
      <div className="mx-2">
        <div className=" flex mx-auto">
          <BsBuildingFillCheck className=" py-1 px-3 text-7xl lg:text-8xl text-blue-30 bg-blue-10 mr-5" />
          <div className="my-auto">
            <h1>{detailPage.titel}</h1>
            <h3>{objekData.data.hari},{objekData.data.kegiata},{objekData.data.warga}</h3>
            <h3>Rp.{objekData.data.hargadetail}</h3>
          </div>
        </div>
        <h1 className="desc text-xl ml-2 font-medium">Order Details :</h1>
        <div className="flex justify-between">
          <div className="ml-6">
            <h1>Nama</h1>
            <h1>No Telfon</h1>
            <h1>Email</h1>
            <h1>Alamat</h1>
            <h1>No KTP</h1>
            <h1>Tanggal Mulai</h1>
            <h1>Waktu</h1>
            <h1>Kegiatan</h1>
          </div>
          <div className="mr-5">
            <p>{form.Name}</p>
            <p>{form.no_tlp}</p>
            <p>{form.email}</p>
            <p>{form.alamat}</p>
            <p>{form.no_ktp}</p>
            <p>{form.tgl_mulai}</p>
            {selectedOption === "1" && <p>{form.tgl_akhir}</p>}
            <p>{form.waktu}</p>
            <p>{form.kegiatan}</p>
          </div>
        </div>
        <h1 className="rician text-xl ml-2 font-medium">Rincian Penbayaran</h1>
        <div className="flex justify-between">
        <div className="ml-6">
          <h1>haraga</h1>
          <h1>lama sewa</h1>
          <h1>Total </h1>
        </div>
        <div className=" mr-16">
          <h1>{objekData.data.hargadetail}</h1>
          <h1>{lama_sewa}</h1>
          <h1>{Number(objekData.data.hargadetail)*1}</h1>
        </div>
        </div>
      </div>
      <div className="tombol flex justify-end m-6">
      <p className="closs cursor-pointer mx-5 bg-red-600 px-8 py-2 text-white-20 hover:bg-red-700 border-2 hover:border-red-800 delay-200 transition-all" onClick={handleCloseModal}>
        closs
      </p>
      <p className="order cursor-pointer bg-blue-600 px-8 py-2 text-white-20 hover:bg-blue-700 border-2 hover:border-blue-800 delay-200 transition-all" onClick={handleSubmit}>orders</p>
      </div>
    </div>
  );
}

export default DetailOrder;
