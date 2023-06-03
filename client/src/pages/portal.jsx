import React from "react";
import { HiChevronRight, HiSquare3Stack3D } from "react-icons/hi2";
import {
  HiViewGrid,
  HiOutlineDotsVertical,
  HiTrendingUp,
  HiChartBar,
  HiPlusSm
} from "react-icons/hi";

function Portal() {
  return (
    <div className="w-full py-2 mt-10 px-3 md:px-10 pb-20">
      <h1 className="text-[18px] font-semibold text-darkTextPrimary">
        Thursday,
      </h1>
      <p className="text-3xl font-bold text-white">My activity portal</p>

      <div className="w-full flex flex-row mt-[55px] sticky top-[57px] bg-darkPrimary">
        <h2 className="w-1/2 flex gap-3 px-3 items-center text-darkTextPrimary font-semibold text-[20px]">
          <span>Link activities</span> <HiChevronRight />
        </h2>
        <div className="w-1/2 flex justify-end">
          <button className="py-2 px-4 bg-pinkPrimary rounded-md font-bold text-white flex flex-row gap-1 items-center">
            <span className="text-3xl">
              <HiPlusSm />
            </span>
            <span>Add new link</span>
          </button>
        </div>
      </div>

      
      <div className="w-full py-2 mt-10 flex justify-start gap-5 flex-wrap">
        <div className="w-[20rem] h-[15rem] md:w-[25rem] rounded-2xl bg-darkSecondary px-3">
          <div className="w-full py-2 grid grid-cols-12 gap-3">
            <div className="h-[3rem] w-[3rem] bg-darkTertiary rounded-2xl flex justify-center items-center text-3xl text-pinkPrimary col-span-2">
              <HiChartBar />
            </div>
            <div className=" rounded-2xl flex justify-start items-center text-[20px] text-darkTextPrimary col-span-9 font-semibold">
              Analytics
            </div>

            <div className="rounded-2xl flex justify-center items-center text-[20px] text-darkTextPrimary col-span-1 cursor-pointer hover:bg-darkTertiary">
              <HiOutlineDotsVertical />
            </div>
          </div>

          <div className="w-full bg-darkPrimary rounded-full h-3 mt-10">
            <div
              className=" bg-pinkPrimary h-3 rounded-full"
              style={{ width: "100%" }}
            ></div>
          </div>

          <div className="w-full mt-5 flex flex-row justify-between">
            <h4 className=" text-darkTextPrimary font-semibold">
              0 links remaining
            </h4>
            <h4 className="text-darkTextPrimary font-semibold">1 / 1</h4>
          </div>

          <h4 className=" text-darkTextPrimary font-semibold mt-10 flex flex-row gap-4">
            <span className=" text-pinkPrimary hidden md:block">Status:</span>
            <span>Level 0 (Upgrade for more space) </span>
          </h4>
        </div>
      </div>

      <h2 className="mt-[55px] flex gap-3 px-3 items-center text-darkTextPrimary font-semibold text-[20px]">
          <span>All my youtube links</span> <HiChevronRight />
        </h2>

<div className="w-full flex flex-col gap-5 py-3 mt-10">
  <div className="grid grid-cols-10 bg-darkSecondary rounded-xl w-full md:w-[40rem] items-center gap-2 px-2 py-2">
     <span className="col-span-1 w-[2rem] h-[2rem] rounded-full bg-pinkPrimary text-white flex justify-center items-center font-bold">1</span>
     <h4 className=" col-span-7 text-white font-semibold">The magic chrome book of the death</h4>
     <h4 className="col-span-2 text-[12px] font-bold text-darkTextPrimary">2 days ago</h4>
  </div>
</div>

    </div>
  );
}

export default Portal;
