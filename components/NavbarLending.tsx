import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./Button";
import { useRouter } from "next/router";
import NavLink from "./NavLink";
import Cookies from "js-cookie";
import Navdown from "./Navdown";

const navitem = [
  {
    titel: "Home",
    url: "/",
  },
  {
    titel: "Step",
    url: "/#alur",
  },
  {
    titel: "About",
    url: "/#about",
  },
  {
    titel: "Package",
    url: "/#Package",
  },
  {
    titel: "Timetable",
    url: "/",
  },
];
type useState = {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
};
const NavbarLending = ({ clicked, setClicked }: useState) => {
  const handleClick = () => {
    if(!isOpen){
      setClicked(!clicked);
    }
   
  };
  const [token, setToken] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const hendelDropdown = () => {
    if(clicked){
      setIsOpen(!isOpen);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    return setToken(Cookies.get("token") || ""); //nilai null atau undefined
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    setToken(Cookies.get("token") || "");
    router.replace("/");
  };
  const router = useRouter();

  return (
    <nav className="w-full md:py-2">
      <div className="padding-container flexBetween mb-20 md:mb-0 ">
        <img className=" absolute left-28  md:static " src="/logo2.png" alt="logo" width={140} height={100} />
        <div className="static md:hidden">
        {router.pathname !== "/signin" && (
            <>
              {token ? (
                <Navdown hendelDropdown={hendelDropdown} isOpen={isOpen} handleLogout={handleLogout}/>
              ) : (
                <NavLink
                  className={` btn_blue font-semibold rounded-full text-base border-0 
              ${
                router.pathname !== "/signin" && router.pathname !== "/signup"
                  ? "text-blue-10"
                  : "hidden"
              } 
            `}
                  href={"/signin"}
                >
                  Sign In
                </NavLink>
              )}
            </>
          )}
        </div>
        <div
          className={`lg:gap-2  lg:flex ms:flex px-3 absolute lg:static w-full  left-0 top-14 md:w-auto translate-all ease-in-out duration-700
             ${clicked ? "left-[-100rem]" : ""} ${
            router.pathname !== "/Singnin" ? "" : "mx-auto"
          }`}
        >
          {navitem.map((item, index) => (
            <li className=" list-none lg:my-auto md:mr-5 my-5" key={index}>
              <NavLink
                className=" text-xl font-medium mx-5 text-gray-10 hover:text-white-20/90"
                href={item.url}
              >
                {item.titel}
              </NavLink>
            </li>
          ))}
          <div className="lg:static">
          {router.pathname !== "/signin" && (
            <div className=" hidden md:block">
              {token ? (
                <Navdown hendelDropdown={hendelDropdown} isOpen={isOpen} handleLogout={handleLogout}/>
              ) : (
                <NavLink
                  className={` btn_blue font-semibold rounded-full text-base border-0 
              ${
                router.pathname !== "/signin" && router.pathname !== "/signup"
                  ? "text-blue-10"
                  : "hidden"
              } 
            `}
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
            <FiMenu className="text-3xl text-gray-10 active:text-white-10" />
          ) : (
            <FiX className="text-3xl  text-gray-10 active:text-white-10" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarLending;
