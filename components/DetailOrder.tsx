import React from "react";
import { BsBuildingFillCheck, BsBagPlus } from "react-icons/bs";

type FormState = {
  Name: string;
  no_tlp: string;
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
  objekDataModal,
}: DetailOrder) {

  var Akhir = form.tgl_akhir ? new Date(form.tgl_akhir) : "0000-00-00";
  var Mulai = new Date(form.tgl_mulai);

  const tanggal = Akhir
    ? new Date(Akhir).getTime() - new Date(Mulai).getTime()
    : 0;
  const hasil = Math.ceil(tanggal / (1000 * 60 * 60 * 24)+1 );
  // console.log(hasil)
  const lama_sewa = hasil || 1;

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
            <h3>
              {objekDataModal.dataModal.hari},{objekDataModal.dataModal.kegiata}
              ,{objekDataModal.dataModal.warga}
            </h3>
            <h3>Rp.{objekDataModal.dataModal.hargadetail}</h3>
          </div>
        </div>
        <h1 className="desc text-xl ml-2 font-medium">Order Details :</h1>
        <table className="ml-6 text-left gap-1">
          <tr className="">
            <th className="">Nama</th>
            <td className="pl-10">{form.Name}</td>
          </tr>
          <tr>
            <th>No Telfon</th>
            <td className="pl-10">{form.no_tlp}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td className="pl-10">{form.email}</td>
          </tr>
          <tr>
            <th>Alamat</th>
            <td className="pl-10">{form.alamat}</td>
          </tr>
          <tr>
            <th>Tanggal Mulai</th>
            <td className="pl-10">{form.tgl_mulai}</td>
          </tr>
          {selectedOption === "1" && (
            <tr>
              <th>Tanggal Akhir</th>
              <td className="pl-10">{form.tgl_akhir}</td>
            </tr>
          )}
          <tr>
            <th>Waktu</th>
            <td className="pl-10">{form.waktu}</td>
          </tr>
          <tr>
            <th>Kegiatan</th>
            <td className="pl-10">{form.kegiatan}</td>
          </tr>
          <tr>
            <th>Pembayaran</th>
            <td className="pl-10">{form.MetPembayaran}</td>
          </tr>
        </table>
        <h1 className="rician text-xl ml-2 font-medium">Rincian Penbayaran</h1>
        <div className="flex justify-between">
          <div className="ml-6 font-bold">
            <h1>Harga</h1>
            <h1>Lama sewa</h1>
            <h1>Total </h1>
          </div>
          <div className=" mr-16">
            <h1>{objekDataModal.dataModal.hargadetail}</h1>
            <h1>{lama_sewa} hari</h1>
            <h1>{Number(objekDataModal.dataModal.hargadetail) * 1}</h1>
          </div>
        </div>
      </div>
      <div className="tombol flex justify-end m-6">
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
