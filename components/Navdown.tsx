import React, { useRef } from "react";
import NavLink from "./NavLink";
import ImgComponent from "./ImgComponen";
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
    <div className="navbar-nav lg:ml-16">
      <div className="nav-item dropdown flex flex-row items-center gap-3">
        <a className="text-xl text-orange-400 hidden md:block w-40 overflow-hidden whitespace-nowrap text-ellipsis">
          Hello,
          <span className=" text-white-10 text-ellipsis ">
            {firstName} {lastName}
          </span>
        </a>
        <div className="relative inline-block">
          <a
            className="nav-link flex items-center"
            onClick={hendelDropdown}
          >
            <ImgComponent
              className=" border-2 hover:border-blue-40 rounded-full cursor-pointer active:border-white-10"
              src="/Image/avatar.png"
              alt="semina"
              width={45}
              height={45}
              priority={true}
            />
            {isOpen ? (
              <BsFillCaretDownFill className="text-white-10 font-bold text-3xl mx-1" />
            ) : (
              <BsFillCaretLeftFill className="text-white-10 font-bold text-3xl mx-1 " />
            )}
          </a>

          <ul
            className={`dropdown-menu  transition-transform delay-700 mt-3 ${
              isOpen ? "block" : "hidden"
            } absolute md:right-3 md:mt-1 mt-1text-xl w-36   bg-white-10 rounded-md px-3 py-2`}
          >
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
        </div>
      </div>
    </div>
  );
}
