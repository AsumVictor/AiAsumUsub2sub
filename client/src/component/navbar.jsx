import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./component.css";
import LogoWhite369 from "../assets/images/369logoWhite.png";
import {
  HiArrowLeftOnRectangle,
  HiUserCircle,
  HiCog6Tooth,
} from "react-icons/hi2";
import useLogOut from "../hooks/useLogout";

function Navbar() {
  const normalNavLinkStyle =
    "w-[9rem] border border-transparent rounded-[10px] grid grid-rows-1 grid-cols-3 p-2 px-1 items-center text-darkTextPrimary hover:border-pinkPrimary hover:text-darkTextPrimary transition-all";

  //Show and hide user menu
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { logout } = useLogOut()

  return (
    <header
      className={`z-[99] navbar md:mt-3 mt-1 bg-darkPrimary sticky top-0 flex items-center justify-around`}
    >
      <div className="hidden md:block w-[40rem]">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              ariaHidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-darkTextPrimary border-2 border-darkSecondary rounded-lg bg-darkPrimary focus:ring-pinkPrimary focus:border-pinkPrimary outline-0"
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            className=" text-darkTextPrimary absolute right-2.5 bottom-2.5 bg-darkSecondary hover:bg-darkSecondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </div>

      <div
        className={`absolute w-[3.3rem] h-[3.3rem] rounded-full overflow-hidden right-3 border-4 cursor-pointer ${
          showProfileMenu ? " border-pinkPrimary" : null
        }`}
        onClick={() => setShowProfileMenu((prevState) => !prevState)}
      >
        <img
          src={`https://avatars.githubusercontent.com/u/105683075?v=4`}
          alt="avatar"
          className="h-full w-full"
        />
      </div>

      {showProfileMenu && (
        <div
          className={`absolute w-[10rem] h-[10rem] overflow-hidden right-3 top-14 bg-darkSecondary rounded-md flex flex-col items-center gap-y-2 pt-2`}
        >
          <Link to="/dashboard" className={`${normalNavLinkStyle}`}>
            <span className="col-span-1 flex text-[17px] justify-center">
              <HiUserCircle />
            </span>
            <span className="col-span-2 font-semibold text-[17px] justify-start">
              Profile
            </span>
          </Link>
          <Link to="/premium" className={`${normalNavLinkStyle}`}>
            <span className="col-span-1 flex text-[17px] justify-center">
              <HiCog6Tooth />
            </span>
            <span className="col-span-2 font-semibold text-[17px] justify-start">
              Settings
            </span>
          </Link>
          <button to="/premium" className={`${normalNavLinkStyle}`}>
            <span className="col-span-1 flex text-[17px] justify-center">
              <HiArrowLeftOnRectangle />
            </span>
            <span className="col-span-2 font-semibold text-[17px] flex justify-start"
            onClick={()=>logout()}
            >
              Logout
            </span>
          </button>
        </div>
      )}

      <img
        src={LogoWhite369}
        alt="logo"
        className="md:hidden w-[1.3rem] h-[2.3rem] absolute left-2"
      />
    </header>
  );
}

export default Navbar;
