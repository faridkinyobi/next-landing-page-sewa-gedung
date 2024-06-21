import React, { useRef } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { BsFillCaretLeftFill, BsFillCaretDownFill } from "react-icons/bs";
import Cookies from "js-cookie";
import Link from "next/link";
type NavdownProp = {
  hendelDropdown: () => void;
  isOpen: boolean;
  handleLogout: () => void;
};

export default function Navdown({
  hendelDropdown,
  isOpen,
  handleLogout,
}: NavdownProp) {
  const lastName = Cookies.get("lastName");
  const firstName = Cookies.get("firstName");


  return (
    <div className="navbar-nav  mx-5">
      <div className="nav-item dropdown flex flex-row items-center gap-3">
        <a className="text-xl text-orange-400 hidden md:block w-40 overflow-hidden whitespace-nowrap text-ellipsis">
          Hello,
          <span className=" text-white-10 text-ellipsis ">
            {firstName} {lastName}
          </span>
        </a>

        <a
          className="nav-link flex items-center"
          onClick={hendelDropdown}
          
        >
          <Image
            className=" absolute top-5 left-8 md:static border-2 hover:border-blue-40 rounded-full cursor-pointer active:border-white-10"
            src="/img/avatar.png"
            alt="semina"
            width={45}
            height={45}
          />
          {isOpen ? (
            <BsFillCaretDownFill className="text-white-10 font-bold text-3xl ml-8 md:ml-2 mt-2 " />
          ) : (
            <BsFillCaretLeftFill className="text-white-10 font-bold text-3xl ml-8 md:ml-2 mt-2 " />
          )}
        </a>
        {isOpen && (
          <ul className="dropdown-menu  transition-transform delay-700  absolute lg:left-[65rem] md:left-10 left-8 md:mt-[15rem] mt-[17rem] text-xl w-36   bg-white-10 rounded-md px-3 py-2">
            <li className="my-1 py-1 pl-2 hover:bg-gray-10 hover:rounded-lg ">
              <NavLink href={"/dash/dashboard"} className="my-1">
                Dashboard
              </NavLink>
            </li>
            <li className="my-1 py-1 pl-2 hover:bg-gray-10 hover:rounded-lg">
              <Link className="dropdown-item" href="/settings">
                Settings
              </Link>
            </li>
            <li
              className="my-1 py-2 text-center text-gray-10 bg-blue-20 rounded-2xl hover:bg-blue-30"
              onClick={() => handleLogout()}
            >
              <a className="dropdown-item cursor-pointer">Sign Out</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
