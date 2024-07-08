import React, { useState,useEffect } from "react";
import dynamic from "next/dynamic";
import Loading from "../loading";
import Calendar from "react-calendar";
import CardModalCalender  from "../CardModalCalender"
import NavCalender from "../NavCalender"

const CustomModal = dynamic(() => import("../modal"), {
  loading: () => <Loading />,
});
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
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const event = getEventsForDate(date);
      if (event?.length > 0) {
        return event?.map((item, index) => (
          <div
            key={index}
            onClick={() => handleEventClick(item)}
            className="bg-red-500 mx-1   rounded-md p-1 hover:bg-red-900/100 delay-100  border border-red-900 overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer"
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
    return event?.filter((e) => {
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

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setShowModal(false);
  };

  return (
    <section
      id="Timetable"
      className="justify-center items-center mx-5 lg:mx-[6rem] my-10  "
    >
      <h1 className=" font-bold text-3xl ml-4 text-blue-40 ">Jadwal</h1>
      <p className="py-2 md:text-2xl text-xl  ml-4 text-blue-20">
        Lihat jadwal pada calender dibawah
      </p>
      <div className="border-4 border-blue-30 rounded-xl">
        <NavCalender
          setActiveStartDate={setActiveStartDate}
          activeStartDate={activeStartDate}
        />
        {isClient ? (
        <Calendar
          activeStartDate={activeStartDate}
          value={selectedEvent ? new Date(selectedEvent.tgl_mulai) : null}
          onClickDay={() => {}}
          tileContent={tileContent}
          calendarType="gregory"
          minDetail="year"
          showNavigation={false}
          className="text-[1rem] lg:text-2xl bg-blue-20  text-white-10/65 text-center lg:px-20 lg:py-10 px-2"
        />
                ) : (
          ""
        )}

        <div className="py-5 px-5">
          <h5 className="text-sm md:text-xl text-amber-400 flex items-center">
            <span className="w-5 h-5 md:w-6 md:h-6 bg-red-500 mr-6"></span>Sudah
            di pesan
          </h5>
        </div>
        {/* Checkbox and Modal */}
        <CustomModal
          isOpen={showModal}
          className="md:py-[11rem] py-28 my-[13rem] md:my-[1rem] md:mx-[2rem] bg-slate-500"
        >
          {showModal && selectedEvent && (
            <CardModalCalender
              selectedEvent={selectedEvent}
              closeModal={closeModal}
            />
          )}
        </CustomModal>
      </div>
    </section>
  );
};

export default EventCalendar;
