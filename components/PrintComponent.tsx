import React from "react";
import { format } from "date-fns";
import { BsBuildingFillCheck, BsBagPlus } from "react-icons/bs";
interface HistoryPaket {
  title: string;
  hari: string;
  kegiatan: string;
  warga: string;
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
    <main className=" max-h-screen w-full bg-blue-30 print:h-auto print:bg-white-10 print:text-black-10">
      <h1 className="text-blue-30 p-4 bg-orange-400 mb-5 flex items-center text-xl font-bold">
        <BsBagPlus className="mr-2 text-xl w-11 h-11 p-2 rounded-xl bg-blue-30 text-white-10 " />
        Sewa Gedung Desa Cangkol
      </h1>
      <div className="ml-6">
        <h1 className="desc text-xl  font-bold text-gray-100 ">
          Order Details :
        </h1>
        {data.map((item, index) => (
          <div
            key={index}
            className=" text-white-10 text-left print:text-black-10 ml-10"
          >
            <table>
              <tbody>
                <tr>
                  <th className="pr-20">Nama Paket</th>
                  <td>{item.historyPaket.title}</td>
                </tr>
                <tr>
                  <th>Lama sewa</th>
                  <td>{item.historyPaket.hari}</td>
                </tr>
                <tr>
                  <th> jadinis Kegiatan</th>
                  <td>{item.historyPaket.kegiatan}</td>
                </tr>
                <tr>
                  <th>Warga</th>
                  <td>{item.historyPaket.warga}</td>
                </tr>
                <tr>
                  <th>Lama sewa</th>
                  <td>
                    {item.historyPaket.lama_sewa}
                    <p>hari</p>
                  </td>
                </tr>
                <tr>
                  <th>tanggal Mulai</th>
                  <td>
                    {format(
                      new Date(item.historyPaket.tgl_mulai),
                      "MM/dd/yyyy"
                    )}
                  </td>
                </tr>
                <tr>
                  <th>tanggal Akhir</th>
                  <td>
                    {item.historyPaket.tgl_akhir
                      ? format(
                          new Date(item.historyPaket.tgl_akhir),
                          "MM/dd/yyyy"
                        )
                      : "-"}
                  </td>
                </tr>
                <tr>
                  <th>Tanggal Akhir</th>
                  <td>{item.historyPaket.hargadetail}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
        <h1 className="rician text-xl ml-2 font-medium text-gray-100">Rincian Penbayaran</h1>
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
              <th>aktor</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="py-3">
                  {format(new Date(item.date), "MM/dd/yyyy")}
                </td>
                <td>{item.NumberOrder}</td>
                <td>
                  <p
                    className={` mx-2 py-1 rounded-xl text-gray-900 ${
                      item.status === "pendding"
                        ? " bg-green-10"
                        : "bg-yellow-700"
                    } `}
                  >
                    {item.status}
                  </p>
                </td>
                <td>{item.MetPembayaran}</td>
                <td>{item.total}</td>
                <td>{item.total_dp}</td>
                <td>{item.sisa_pembayaran}</td>
                {/* <td>
                    <p
                      className=" cursor-pointer bg-yellow-300 mx-2 rounded-xl text-gray-900"
                      onClick={handleDetail}
                    >
                      detail
                    </p>
                  </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
