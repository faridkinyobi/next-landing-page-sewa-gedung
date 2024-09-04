import React, { memo } from "react";
import { add, sub, format } from "date-fns";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

type NavProp = {
  setActiveStartDate: (value: React.SetStateAction<Date>) => void;
  activeStartDate: Date;
};

const NavCalender = ({ setActiveStartDate, activeStartDate }: NavProp) => {
  return (
    <div className="nav-months p-2 bg-slate-400 flex justify-between rounded-t-lg">
      <p className=" font-light md:text-xl text-base ml-7">
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
  );
};

export default memo(NavCalender);
