import React from "react";
import { format } from "date-fns";
import { BsBuildingFillCheck, BsBagPlus } from "react-icons/bs";
interface HistoryPaket {
  title: string;
  hari: string;
  kegiatan: string;
  warga: string;
  waktu: string;
  lama_sewa: number;
  tgl_mulai: Date;
  tgl_akhir: Date;
  hargadetail: number;
}

interface Order {
  historyPaket: HistoryPaket;
  status: string;
  total: number;
  total_dp: number;
  sisa_pembayaran: number;
  NumberOrder: string;
  date: Date;
  MetPembayaran: string;
}

interface DashType {
  data: Order[];
}

export const PrintComponent = ({ data }: DashType) => {
  return (
    <div className=" bg-blue-30 print:h-auto print:bg-white-10 print:text-black-10 print:mx-5 print:mt-20">
      <h1 className="text-blue-30 p-4 bg-orange-400 mb-5 flex items-center text-xl font-bold">
        <BsBagPlus className="mr-2 text-xl w-11 h-11 p-2 rounded-xl bg-blue-30 text-white-10 " />
        Sewa Gedung Desa Cangkol
      </h1>
      <div className=" mx-5">
        <h1 className="desc text-xl  font-bold text-gray-100 print:text-black-10">
          Order Details :
        </h1>
        <div className="text-blue-30 text-left print:text-black-10 grid grid-flow-col my-3">
          <div className="text-ellipsis font-bold static text-inherit bg-slate-400 px-2 py-2 w-40 h-auto ">
            <h1>Nama Paket</h1>
            <h1>Harga</h1>
            <h1>Warga</h1>
            <h1>hari</h1>
            <h1 className="my-1">Jenis Kegiatan</h1>
            <h1>waktu</h1>
            <h1>Lama Sewa</h1>
            <h1>Tanggal Mulai</h1>
            <h1>Tanggal Akhir</h1>
          </div>
          <div className="grid-flow-col grid overflow-auto p-2 text-white-10 print:text-black-10">
            {data.map((item, index) => (
              <div key={index} className="p-2 border-b">
                <p>{item.historyPaket.title}</p>
                <p>
                  {item.historyPaket.hargadetail.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                <p>{item.historyPaket.warga}</p>
                <p>{item.historyPaket.hari}</p>
                <p>{item.historyPaket.kegiatan}</p>
                <p>{item.historyPaket.waktu}</p>
                <p className="flex flex-row">
                  {item.historyPaket.lama_sewa}{" "}
                  <span className="mx-2">
                    {item.historyPaket.tgl_akhir ||
                    /pernikahan/i.test(item.historyPaket.kegiatan)
                      ? "hari"
                      : "jam"}
                  </span>
                </p>
                <p>
                  {new Date(item.historyPaket.tgl_mulai).toLocaleString(
                    "id-ID",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
                <p>
                  {item.historyPaket.tgl_akhir
                    ? new Date(item.historyPaket.tgl_akhir).toLocaleString(
                        "id-ID",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )
                    : "-"}
                </p>
              </div>
            ))}
          </div>
        </div>

        <h1 className="rician text-xl ml-2 font-medium text-gray-100 print:text-black-10">
          Rincian Penbayaran
        </h1>
        {/*tabel-order*/}
      </div>
      <div className="tabel-order overflow-x-auto mt-2 ">
        <table className="text-center text-white-10 w-full table-auto border-2 print:text-black-10 ">
          <thead>
            <tr className="border-2 bg-slate-500/90">
              <th className="py-3">date</th>
              <th>Number Order</th>
              <th>Status</th>
              <th>Metode Pembayaran</th>
              <th>Total Pembayaran</th>
              <th>Uang Muka</th>
              <th>Pelunasan</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="py-3">
                  {format(new Date(item.date), "MM/dd/yyyy")}
                </td>
                <td className="px-3">{item.NumberOrder}</td>
                <td>
                  <p
                    className={` mx-1 py-1 rounded-xl text-gray-900 border ${
                      item.status === "pendding"
                        ? " bg-lime-300 border-lime-600"
                        : "bg-yellow-300 border-yellow-600"
                    } `}
                  >
                    {item.status}
                  </p>
                </td>
                <td>{item.MetPembayaran}</td>
                <td>
                  {item.total.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </td>
                <td>
                  {item.total_dp.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </td>
                <td>
                  {item.sisa_pembayaran.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1 className="hidden print:block ">hallo</h1>
      </div>
    </div>
  );
};
