import React from 'react'
import {  BsX } from "react-icons/bs";
type SelectedEvent = {
    kegiatan: string;
    lama_sewa: number;
    tgl_mulai: string; // atau tipe lain sesuai kebutuhan
    tgl_akhir?: string | null; // opsional atau null
    waktu: string; // atau tipe lain sesuai kebutuhan
    status_kegiatan: string; // atau tipe lain sesuai kebutuhan
  };
  
  type ModalProps = {
    selectedEvent: SelectedEvent;
    closeModal: () => void;
  };
export default function CardModalCalender({selectedEvent,closeModal}:ModalProps) {
  return (
    <div className="modal-overlay duration-1000 flex justify-center bg-slate-500 md:mx-10 mx-3">
    <div className="modal-content">
      <table className="table md:text-lg text-base">
        <thead>
          <tr className="m-1 text-center text-white-10/90">
            <th className="styl-th-kalender py-3">kegiatan</th>
            <th className="styl-th-kalender">lama sewa</th>
            <th className="styl-th-kalender">tanggal mulai</th>
            <th className="styl-th-kalender">tanggal akhir</th>
            <th className="styl-th-kalender">waktu sewa</th>
            <th className="styl-th-kalender">kegiatan</th>
          </tr>
        </thead>
        <tbody>
          <tr className="static text-center text-white-10/85">
            <td className="border border-white-20/70 px-2">
              {selectedEvent.kegiatan}
            </td>
            <td className="border border-white-20/70 px-2">
              {selectedEvent.lama_sewa}{" "}
              {selectedEvent.tgl_akhir ||
              /pernikahan/i.test(selectedEvent.kegiatan)
                ? "hari"
                : "jam"}
            </td>
            <td className="border border-white-20/70 px-2">
              {new Date(
                selectedEvent?.tgl_mulai
              ).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </td>
            <td className="border border-white-20/70 px-2">
              {selectedEvent.tgl_akhir
                ? new Date(
                    selectedEvent.tgl_akhir
                  ).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                : "-"}
            </td>
            <td className="border border-white-20/70 px-2">
              {selectedEvent.waktu}
            </td>
            <td className="border border-white-20/70 px-2">
              {selectedEvent.status_kegiatan}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="close absolute right-2 top-[15rem] md:top-[4rem] md:right-[4rem] md:m-5 font-medium text-3xl m-1 hover:bg-black-10/15 bg-slate-400 rounded-full"
        onClick={closeModal}
      >
        <BsX />
      </button>
    </div>
  </div>
  )
}
