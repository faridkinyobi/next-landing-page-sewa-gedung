import React, { useState } from "react";
import dynamic from 'next/dynamic';
const Calendar = dynamic(() => import('react-calendar'), { ssr: false });
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { add, sub, format } from "date-fns";
import CustomModal from "../modal";
interface PaketType {
  event: {
    id: number;
    kegiatan: string;
    tgl_mulai: Date;
    tgl_akhir: Date;
  }[];
}
const EventCalendar = ({ event }: PaketType) => {
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);


  const getEventForDate = () => {
    const normalizedDate = new Date();
    normalizedDate.setHours(0, 0, 0, 0);
    
    return event.filter((events) =>{
      const kegiatan = events.kegiatan
      const eventStartDate = new Date(events.tgl_mulai);
      const eventEndDate = new Date(events.tgl_akhir)
      
      return normalizedDate >= eventStartDate&& normalizedDate <= eventEndDate &&kegiatan
      }
      );
    };
    const [selectedEvent, setSelectedEvent] = useState({});


  const tileContent = ({ date,view }: { date: Date; view: string }) => {
    if (view === "month") {
      const event = getEventsForDate(date);
      if (event) {
        return event.map((item,index)=>(
          <div key={index} className="bg-white-10 w-[6rem] h-10 text-yellow-400">
            <span className="text-white">{item.kegiatan}</span>
          </div>
        ))
      }
    }
    return null;
  };
  const getEventsForDate = (date: Date) => {
   // Atur komponen waktu dari tanggal saat ini ke tengah malam
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);
  
    return event.filter((e) => {
      //  Atur kondisi komponen waktu tanggal mulai dan akhir acara menjadi tengah malam
      const eventStartDate = new Date(e.tgl_mulai);
      eventStartDate.setHours(0, 0, 0, 0);
  
      const eventEndDate = new Date(e.tgl_akhir);
      eventEndDate.setHours(0, 0, 0, 0);
  
      return normalizedDate.getTime() >= eventStartDate.getTime() && normalizedDate.getTime() <= eventEndDate.getTime();
    });
  };
  
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const eventsForDate = getEventsForDate(date);
    if(eventsForDate.length > 0){
      setShowModal(!showModal);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <section className="justify-center items-center mx-10 lg:mx-[6rem] my-5 lg:my-20">
      <div className="nav-months p-2 bg-slate-400 flex justify-between">
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
            <BsCaretLeftFill/>
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
      </div>{" "}         
      <Calendar
     activeStartDate={activeStartDate}
     value={selectedDate}
     onClickDay={handleDateClick}
     tileContent={tileContent}
     calendarType="gregory"
     minDetail="year"
     showNavigation={false}
     className="text-[1rem] lg:text-2xl bg-blue-20 text-center lg:px-20 lg:py-10 px-2"
   />
      {/* <Calendar
        activeStartDate={activeStartDate}
        // onChange={handleDateChange}
        value={selectedDate}
        onClickDay={handleDateClick}
        tileContent={tileContent}
        calendarType="gregory"
        minDetail="year"
        showNavigation={false}
        className="text-[1rem] lg:text-2xl bg-blue-20 text-center lg:px-20 lg:py-10 px-2"
      /> */}
      <div className="py-10 px-5">
        <h5 className="text-2xl text-amber-400 flex items-center">
          <span className="w-10 h-10 bg-green-10 mr-6"></span>Sudah di pesan
        </h5>
      </div>
      {/* Checkbox and Modal */}
      <span> Tampilkan Modal</span>
      <CustomModal isOpen={showModal}>
      {showModal && selectedDate && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* <h2>Events on {selectedDate.toDateString()}</h2> */}
            <ul>
              {getEventsForDate(selectedDate).map((item,index) => (
                <li key={index}>{format(new Date(item.tgl_akhir), "dd/MM/yyyy")}</li>
              ))}
            </ul>
            <button onClick={handleCloseModal}>Close Modal</button>
          </div>
        </div>
      )}
      </CustomModal>
    </section>
  );
};

export default EventCalendar;
