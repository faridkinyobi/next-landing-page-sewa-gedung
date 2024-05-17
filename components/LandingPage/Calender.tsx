import React, { useState } from "react";
import dynamic from "next/dynamic";
const Calendar = dynamic(() => import("react-calendar"), { ssr: false });
import { BsCaretLeftFill, BsCaretRightFill, BsX } from "react-icons/bs";
import { add, sub, format } from "date-fns";
import CustomModal from "../modal";
interface PaketType {
  event: {
    id: number;
    kegiatan: string;
    tgl_mulai: Date;
    tgl_akhir: Date;
    lama_sewa: number;
    status_kegiatan: string;
    waktu: number;
  }[];
}
const EventCalendar = ({ event }: PaketType) => {
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const event = getEventsForDate(date);
      if (event) {
        return event.map((item, index) => (
          <div
            key={index}
            className="bg-red-500 mx-1   rounded-md p-1 hover:bg-red-900/100 delay-100  border border-red-900 overflow-hidden whitespace-nowrap text-ellipsis"
          >
            <p className="text text-[0.7rem] md:text-base text-white-10 hover:text-slate-300/85 md:text-ellipsis ">
              {item.kegiatan}
            </p>
          </div>
        ));
      }
    }
    return null;
  };

  const getEventsForDate = (date: Date) => {
    // Atur komponen waktu dari tanggal saat ini ke 0
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);
    
    //filter event untuk membatasi 
    return event.filter((e) => {
      const eventStartDate = new Date(e.tgl_mulai);
      eventStartDate.setHours(0, 0, 0, 0);

      const eventEndDate = e.tgl_akhir ? new Date(e.tgl_akhir) : null;

      if (eventEndDate !== null) {
        eventEndDate.setHours(0, 0, 0, 0);
      }
      if (eventEndDate === null) {
        return normalizedDate.getTime() === eventStartDate.getTime();
      } else {
        return (
          normalizedDate.getTime() >= eventStartDate.getTime() &&
          normalizedDate.getTime() <= eventEndDate.getTime()
        );
      }
    });
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const eventsForDate = getEventsForDate(date);
    if (eventsForDate.length > 0) {
      setShowModal(!showModal);
    }
  };


  return (
    <section id="Timetable" className="justify-center items-center mx-10 lg:mx-[6rem] my-5 lg:my-20  ">
      <h1 className=" font-bold text-3xl ml-4 text-blue-40 ">
        Jadwal
      </h1>
      <p className="py-2 md:text-2xl text-xl  ml-4 text-blue-20">
        Lihat jadwal pada calender dibawah
      </p>
      <div className="border-4 border-blue-30 rounded-xl">
      <div className="nav-months p-2 bg-slate-400 flex justify-between rounded-t-lg">
        <p className=" font-light">{format(activeStartDate, "MMMM yyyy")}</p>
        <p className=" font-light text-base">
          {format(new Date(), "d MMMM yyyy")}
        </p>
        <div className="flex">
          <button
            className=" bg-blue-40 text-white-10 px-3 lg:px-6 py-2 text-xl font-extrabold hover:bg-blue-30"
            onClick={() =>
              setActiveStartDate(sub(activeStartDate, { months: 1 }))
            }
          >
            <BsCaretLeftFill />
          </button>
          <button
            className=" bg-blue-40 text-white-10 px-3 lg:px-6 py-2 text-xl font-extrabold hover:bg-blue-30"
            onClick={() =>
              setActiveStartDate(add(activeStartDate, { months: 1 }))
            }
          >
            <BsCaretRightFill />
          </button>
        </div>
      </div>
      <Calendar
        activeStartDate={activeStartDate}
        value={selectedDate}
        onClickDay={handleDateClick}
        tileContent={tileContent}
        calendarType="gregory"
        minDetail="year"
        showNavigation={false}
        className="text-[1rem] lg:text-2xl bg-blue-20  text-white-10/65 text-center lg:px-20 lg:py-10 px-2"
      />
      <div className="py-5 px-5">
        <h5 className="text-sm md:text-xl text-amber-400 flex items-center">
          <span className="w-5 h-5 md:w-6 md:h-6 bg-red-500 mr-6"></span>Sudah
          di pesan
        </h5>
      </div>
      {/* Checkbox and Modal */}
      <CustomModal isOpen={showModal} className="md:py-[6rem] py-10 my-[15rem] md:my-[10rem] md:mx-[13rem] bg-slate-500">
        {showModal && selectedDate && (
          <div className="modal-overlay duration-1000 flex justify-center bg-slate-500 mx-4">
            <div className="modal-content">
              <table className="table md:text-lg text-xs">
                <thead className="">
                  <tr className="m-1 text-center  text-white-10/90">
                    <th className="border border-white-20/70 px-[0.1rem] md:px-5 py-3 ">
                      {" "}
                      kegiatan
                    </th>
                    <th className="border border-white-20/70 px-[0.1rem] md:px-5">
                      lama sewa
                    </th>
                    <th className="border border-white-20/70 px-[0.1rem] md:px-6">
                      tanggal mulai
                    </th>
                    <th className="border border-white-20/70 px-[0.2rem] md:px-6">
                      tanggal akhir
                    </th>
                    <th className="border border-white-20/70 px-[0.1rem] md:px-5">
                      waktu sewa
                    </th>
                    <th className="border border-white-20/70 px-[0.1rem] md:px-5">
                      kegiatan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getEventsForDate(selectedDate).map((item, index) => (
                    <tr className="static text-center text-white-10/85" key={index}>
                      <td className="border border-white-20/70 px-2 ">
                        {item.kegiatan}
                      </td>
                      <td className="border border-white-20/70 px-2 ">
                        {item.lama_sewa} hari
                      </td>
                      <td className="border border-white-20/70 px-2">
                        {format(new Date(item.tgl_mulai), "MM/dd/yyyy")}
                      </td>
                      <td className="border border-white-20/70 px-2">
                        {format(new Date(item.tgl_akhir), "MM/dd/yyyy")}
                      </td>
                      <td className="border border-white-20/70 px-2">{item.waktu}</td>
                      <td className="border border-white-20/70 px-2">
                        {item.status_kegiatan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                className="close absolute right-6 top-[15rem] md:top-[10rem] md:right-[16rem] md:m-5 font-medium text-3xl m-1 hover:bg-black-10/15 bg-slate-400 rounded-full"
                onClick={()=>setShowModal(false)}
              >
                <BsX />
              </button>
            </div>
          </div>
        )}
      </CustomModal>
      </div>
    </section>
  );
};

export default EventCalendar;
