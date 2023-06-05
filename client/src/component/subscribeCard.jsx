import React from "react";
import YoutubeLogo from "../assets/images/Youtube_logo.png";
import { HiCheckBadge } from "react-icons/hi2";
import {format } from 'timeago.js'

function SubscribeCard({ index, cardContent, handleSubscribe }) {
  return (
    <div className="w-full max-w-[17rem] bg-darkSecondary border-4 border-darkPrimary rounded-2xl shadow relative">
      <div className="absolute top-1 left-1 w-10 h-10 bg-pinkPrimary rounded-[13px] font-semibold text-[22px] flex justify-center items-center text-white">
        {index}
      </div>
      <div className="flex flex-col items-center pb-10 py-5">
        <img className="w-[5rem]" src={YoutubeLogo} alt="youtube logo" />
        <h5 className=" px-4 text-center w-full text-darkTextPrimary font-bold text-[20px] capitalize mt-3">
          {cardContent.youtubeName}
        </h5>
        <span className="font-semibold text-emerald-400">{format(cardContent.time)}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          {cardContent.isSubscriber ? (
            <p
              disabled={true}
              className="inline-flex items-center text-pinkPrimary font-bold gap-2 text-xl"
            >
              <span>
                <HiCheckBadge />
              </span>
              <span>Subscribed</span>
            </p>
          ) : (
            <a
              href={`${cardContent.youtubeURL}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                handleSubscribe((index-1), cardContent.id, '647a7816d64dc3426f846ec6')
              }}
              disabled={true}
              className="inline-flex items-center px-4 py-2 text-sm text-center text-white  font-semibold bg-pinkPrimary rounded-2xl  "
            >
              Subscribe to this channel
            </a>
          )}
        </div>
        {cardContent.isSubscriber ? (
          <p className="px-4 mt-3 font-semibold text-emerald-600">
            You've already subscribed to this channel
          </p>
        ) : (
          <p className="px-4 mt-3 font-semibold text-red-600">
            * You've not subscribed to this channel
          </p>
        )}
      </div>
    </div>
  );
}

export default SubscribeCard;
