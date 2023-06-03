import React from "react";
import { NavLink } from "react-router-dom";
import "./component.css";
import LogoWhite369 from "../assets/images/369logoWhite.png";
import { HiChartPie, HiTemplate } from "react-icons/hi";
import {
  HiClipboardDocumentList,
  HiSquare3Stack3D,
  HiShieldCheck,
  HiArrowLeftOnRectangle,
} from "react-icons/hi2";

function SideNav() {
  const normalNavLinkStyle =
    "w-[4rem] h-[3rem] md:w-[10rem] md:border md:border-transparent md:rounded-[10px] grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-3 md:p-2 px-1 md:px-2 md:items-center text-darkTextPrimary hover:text-pinkPrimary md:hover:border-pinkPrimary md:hover:text-darkTextPrimary transition-all";

  return (
    <div
      className={`sidebar bg-darkPrimary border-darkSecondary overflow-y-auto z-[99]`}
    >
      <div className="w-[8rem] h-[10rem] hidden md:flex md:flex-col md:items-center justify-center">
        <img src={LogoWhite369} alt="369" className="w-[3rem] h-[5.1rem]" />
        <h4 className="text-4xl font-bold">
          <span className=" text-pinkPrimary">I</span>
          <span className="text-darkTextPrimary">Asum</span>
        </h4>
      </div>
      <div className="flex flex-row justify-around md:justify-start md:flex-col md:gap-y-3 md:gap-x-0 gap-x-2 md:mt-10">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? `${normalNavLinkStyle} md:bg-pinkPrimary md:text-white text-pinkPrimary`
              : `${normalNavLinkStyle}`
          }
        >
          <span className="md:col-span-1 flex justify-center md:text-[17px] text-[25px]">
            <HiChartPie />
          </span>
          <span className="md:col-span-2 font-semibold md:text-[17px] text-[11px] flex items-end  justify-center md:justify-start">
            Dashboard
          </span>
        </NavLink>

        <NavLink
          to="/portal"
          className={({ isActive }) =>
            isActive
              ? `${normalNavLinkStyle} md:bg-pinkPrimary md:text-white text-pinkPrimary`
              : `${normalNavLinkStyle}`
          }
        >
          <span className="md:col-span-1 flex justify-center md:text-[17px] text-[25px]">
            <HiTemplate />
          </span>
          <span className="md:col-span-2 font-semibold md:text-[17px] text-[11px] flex items-end  justify-center md:justify-start whitespace-nowrap">
            My portal
          </span>
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            isActive
              ? `${normalNavLinkStyle} md:bg-pinkPrimary md:text-white text-pinkPrimary`
              : `${normalNavLinkStyle}`
          }
        >
          <span className="md:col-span-1 flex justify-center md:text-[17px] text-[25px]">
            <HiClipboardDocumentList />
          </span>
          <span className="md:col-span-2 font-semibold md:text-[17px] text-[11px] flex items-end  justify-center md:justify-start">
            Tasks
          </span>
        </NavLink>

        <NavLink
          to="/subscription"
          className={({ isActive }) =>
            isActive
              ? `${normalNavLinkStyle} md:bg-pinkPrimary md:text-white text-pinkPrimary`
              : `${normalNavLinkStyle}`
          }
        >
          <span className="md:col-span-1 flex justify-center md:text-[17px] text-[25px]">
            <HiSquare3Stack3D />
          </span>
          <span className="md:col-span-2 font-semibold md:text-[17px] text-[11px] flex items-end  justify-center md:justify-start">
            Subscriptions
          </span>
        </NavLink>

        <NavLink
          to="/premium"
          className={({ isActive }) =>
            isActive
              ? `${normalNavLinkStyle} md:bg-pinkPrimary md:text-white text-pinkPrimary`
              : `${normalNavLinkStyle}`
          }
        >
          <span className="md:col-span-1 flex justify-center md:text-[17px] text-[25px]">
            <HiShieldCheck />
          </span>
          <span className="md:col-span-2 font-semibold md:text-[17px] text-[11px] flex items-end  justify-center md:justify-start">
            Premium
          </span>
        </NavLink>
      </div>
      <button
        className={`hidden md:grid text-white bg-pinkPrimary  ${normalNavLinkStyle} absolute bottom-3 `}
      >
        <span className="md:col-span-1 flex justify-center md:text-[17px] text-[25px]">
          <HiArrowLeftOnRectangle />
        </span>
        <span className="md:col-span-2 font-semibold md:text-[17px] text-[11px] flex items-end  justify-center md:justify-start">
          Logout
        </span>
      </button>
    </div>
  );
}

export default SideNav;
