import React from "react";
import { HiChevronRight } from "react-icons/hi2";

function Dashboard() {
  return (
    <div className="w-full py-2 mt-10 px-3 md:px-10 pb-20">
      <h1 className="text-[18px] font-semibold text-darkTextPrimary">
        Hey, Asum!,
      </h1>
      <p className="text-3xl font-bold text-white">Dashboard</p>

      <h2 className="mt-[55px] flex gap-3 px-3 items-center text-darkTextPrimary font-semibold text-[20px]">
        <span>Overview</span> <HiChevronRight />
      </h2>

<div className="w-full  py-2 mt-10 flex justify-center gap-5 flex-wrap">
   
<div className="w-[20rem] h-[15rem] md:w-[25rem] rounded-2xl bg-darkSecondary">
  <div className="w-full py-2 grid grid-cols-12 px-2">
     <div className="h-[3.6rem] w-[3.6rem] bg-darkTertiary rounded-2xl flex justify-center items-center">
     <HiChevronRight />
     </div>
  </div>
</div>

</div>

    </div>
  );
}

export default Dashboard;
