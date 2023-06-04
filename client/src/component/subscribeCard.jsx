import React from 'react'
import YoutubeLogo from "../assets/images/Youtube_logo.png";
import { HiCheckBadge } from "react-icons/hi2";


function SubscribeCard({index}) {
  return (
    <div className="w-full max-w-[17rem] bg-darkSecondary border-4 border-darkPrimary rounded-2xl shadow relative">
          <div className="absolute top-1 left-1 w-10 h-10 bg-pinkPrimary rounded-[13px] font-semibold text-[22px] flex justify-center items-center text-white">
            {index}
          </div>
          <div className="flex flex-col items-center pb-10 py-5">
            <img className="w-[5rem]" src={YoutubeLogo} alt="youtube logo" />
            <h5 className=" px-4 text-center w-full text-darkTextPrimary font-bold text-[20px] capitalize mt-3">
              Bonnie Green Gradd of money monkey
            </h5>
            <span className="font-semibold text-emerald-400">3 days ago</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="https://sdsa"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  console.log("Work");
                }}
                disabled={true}
                className="inline-flex items-center px-4 py-2 text-sm text-center text-white  font-semibold bg-pinkPrimary rounded-2xl  "
              >
                Subscribe to this channel
              </a>

              {/* <p
              disabled={true}
              className="inline-flex items-center text-pinkPrimary font-bold gap-2 text-xl"
            >
              <span><HiCheckBadge /></span>
              <span>Subscribed</span>
            </p> */}
            </div>
            <p className="px-4 mt-3 font-semibold text-red-600">
              * You've not subscribed to this channel
            </p>
            <p className="px-4 mt-3 font-semibold text-emerald-600">
              * You've already subscribed to this channel
            </p>
          </div>
        </div>
  )
}

export default SubscribeCard