import React from "react";
import NavLink from "./NavLink";

type NavdownProp = {
  hendelDropdown: () => void;
  isOpen: boolean;
  handleLogout:()=> void;
};
export default function Navdown({ hendelDropdown, isOpen,handleLogout }: NavdownProp) {
  return (
    <div className="navbar-nav  mx-5">
      <div className="nav-item dropdown flex flex-row items-center gap-3">
        <a className="text-xl text-orange-400 hidden md:block">
          Hello,<span className=" text-white-10"> Shayna M</span>
        </a>

        <a className="nav-link " onClick={hendelDropdown}>
          <img
            className=" absolute top-5 left-8 md:static"
            src="/avatar.png"
            alt="semina"
            width="45"
          />
        </a>
        {isOpen && (
          <ul className="dropdown-menu  transition-transform delay-700 origin-top-right absolute lg:left-[65rem] md:left-10 left-0 md:mt-[15rem] mt-[22rem] text-xl w-36   bg-white-10 rounded-md px-3 py-2">
            <li className="my-1 py-1 pl-2 hover:bg-gray-10 hover:rounded-lg ">
              <NavLink href={"/dashboard"} className="my-1">
                Dashboard
              </NavLink>
            </li>
            <li className="my-1 py-1 pl-2 hover:bg-gray-10 hover:rounded-lg">
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li className="my-1 py-1 pl-2 hover:bg-gray-10 hover:rounded-lg ">
              <a className="dropdown-item" href="#">
                Rewards
              </a>
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
