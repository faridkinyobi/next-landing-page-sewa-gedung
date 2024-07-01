import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/router";
import NavLink from "./NavLink";
import Cookies from "js-cookie";
import Navdown from "./Navdown";
import NavData from "./itemsData";
import Image from "next/image";
import logoNav from "../public/Image/logo5coklat.svg";
type useState = {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
};
const NavbarLending = () => {
  const [token, setToken] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    if (!isOpen) {
      setClicked(!clicked);
    }
  };

  const hendelDropdown = () => {
    if (!clicked) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    return setToken(Cookies.get("token") || ""); //nilai null atau undefined
  }, []);

  const handleLogout = () => {
    setClicked(false);
    setIsOpen(false);
    Cookies.remove("token");
    Cookies.remove("firstName");
    Cookies.remove("lastName");
    setToken(Cookies.get("token") || "");
    router.replace("/");
  };
  const router = useRouter();

  return (
    <nav className="w-full md:py-2 ">
      <div className="padding-container flexBetween">
        <Image
          className={` left-28 md:left-96 lg:static top-6 w-44 h-auto ${
            token ? "absolute" : "static "
          }`}
          src={logoNav}
          alt="Picture"
          width={250}
          height={150}
          priority={true}
        />
        <div className="static lg:hidden">
          {router.pathname !== "/signin" && (
            <>
              {token ? (
                <Navdown
                  hendelDropdown={hendelDropdown}
                  isOpen={isOpen}
                  handleLogout={handleLogout}
                />
              ) : (
                ""
              )}
            </>
          )}
        </div>
        <div
          className={` bg-slate-600 pb-8 lg:pb-0 lg:bg-transparent lg:gap-2  lg:flex px-3 absolute lg:static w-full  left-0 top-14 lg:w-auto translate-all ease-in-out duration-700
             ${clicked ? " top-20 " : "left-[-100rem]"} ${
            router.pathname !== "/Singnin" ? "" : "mx-auto"
          }`}
        >
          {NavData.NavbarItem.map((item, index) => (
            <li
              className="  list-none lg:my-auto md:mr-4 lg:mx-0 my-5"
              key={index}
            >
              <NavLink
                className=" text-xl font-medium mx-2 text-gray-10 hover:text-white-20/90"
                href={item.url}
              >
                {item.titel}
              </NavLink>
            </li>
          ))}
          <div className="lg:static mx-auto">
            {router.pathname !== "/signin" && (
              <div className={`lg:block ${token ? "hidden" : ""}`}>
                {token ? (
                  <Navdown
                    hendelDropdown={hendelDropdown}
                    isOpen={isOpen}
                    handleLogout={handleLogout}
                  />
                ) : (
                  <NavLink
                    className={` btn_blue font-semibold rounded-full text-base border-0 ${
                      router.pathname !== "/signin" &&
                      router.pathname !== "/signup"
                        ? "text-blue-10"
                        : "hidden"
                    } `}
                    href={"/signin"}
                  >
                    Sign In
                  </NavLink>
                )}
              </div>
            )}
          </div>
        </div>
        <div
          className="absolute top-0 md:top-1 right-0 m-5 p-1 rounded-xl border-2 border-gray-10 lg:hidden ms:hidden active:border-white-10 mr-7"
          onClick={handleClick}
        >
          {clicked ? (
            <FiX className="text-3xl  text-gray-10 active:text-white-10" />
          ) : (
            <FiMenu className="text-3xl text-gray-10 active:text-white-10" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarLending;
