import React, { useState, useEffect } from "react";
import { HiChevronRight, HiSquare3Stack3D } from "react-icons/hi2";
import {
  HiViewGrid,
  HiOutlineDotsVertical,
  HiTrendingUp,
  HiChartBar,
  HiPlusSm,
} from "react-icons/hi";
import ModalBox, { ModalFooter } from "../component/modalBox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Helmet } from "react-helmet";
import NoContent from "../component/NoContent";
import { format } from "timeago.js";

function Portal() {
  const [showModal, setShowModal] = useState(false);
  const [url, setURL] = useState('');
  const [isValid, setValid] = useState(false);
  const [link, setLink] =useState('')
  const [youtubeName, setYoutubeName] =useState('')
  const [links, setLinks] = useState(null)
  const [loading, setLoading] = useState(false);
let content;
  const handleLinkChange = (event) => {
    const enteredURL = event.target.value;
    setLink(enteredURL)
    const pattern = /https:\/\/www\.youtube\.com\/channel\/[A-Za-z0-9_-]+/;
    const isValidURL = pattern.test(enteredURL);
    setURL(enteredURL);
    setValid(isValidURL);
  };


  if(links?.length > 0){
    content = (
      <div className="w-full flex flex-col gap-5 py-3 mt-10">
        {links.map((link,index)=>(

      <div key={link._id} className="grid grid-cols-10 bg-darkSecondary rounded-xl w-full md:w-[40rem] items-center gap-2 px-2 py-2">
        <span className="col-span-1 w-[2rem] h-[2rem] rounded-full bg-pinkPrimary text-white flex justify-center items-center font-bold">
          {index + 1}
        </span>
        <h4 className=" col-span-7 text-white font-semibold">
          {link.youtubeName}
        </h4>
        <h4 className="col-span-2 text-[12px] font-bold text-darkTextPrimary">
          {format(link.createdAt)}
        </h4>
      </div>
        ))}
    </div>
    )
  }else {
    content =(
     < NoContent customClass={'w-[15rem]'}message={'Oops! you have no link'} />
    )
  }
 
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:4000/links/user/647a7816d64dc3426f846ec6"
      );
      if (res.status === 200) {
        setLinks(res?.data?.data);
        setLoading(false);
       
      } else {
        toast.error(`${res.response.data.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      let errorMessage;
      if (error?.response) {
        errorMessage = error?.response?.data?.message;
      } else {
        errorMessage = error?.message;
      }
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };


  const AddLink = async () => {
    const YouTubelink = {
      youtubeURL: link,
      youtubeName,
      user: "647a7816d64dc3426f846ec6",
    };

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:4000/links",
        YouTubelink
      );
      if (res.status === 200) {
        toast.success(`${res?.data?.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setLoading(false);
        setShowModal(false)
        setLink('')
        setYoutubeName('')
        fetchPosts()

      } else {
        toast.error(`${res.response.data.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      let errorMessage;
      if (error?.response) {
        errorMessage = error?.response?.data?.message;
      } else {
        errorMessage = error?.message;
      }
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  
  useEffect(() => {

    fetchPosts();
  }, []);

  return (
    <div className="w-full py-2 mt-10 px-3 md:px-10 pb-20">
        <Helmet>
        <title>My portal</title>
      </Helmet>
      <h1 className="text-[18px] font-semibold text-darkTextPrimary">
        Thursday,
      </h1>
      <p className="text-3xl font-bold text-white">My activity portal</p>

      <div className="w-full flex flex-row mt-[55px] sticky top-[57px] bg-darkPrimary">
        <h2 className="w-1/2 flex gap-3 px-3 items-center text-darkTextPrimary font-semibold text-[20px]">
          <span>Link activities</span> <HiChevronRight />
        </h2>
        <div className="w-1/2 flex justify-end">
          <button className="py-2 px-4 bg-pinkPrimary rounded-md font-bold text-white flex flex-row gap-1 items-center"  
          onClick={() => {
            if(links && links?.length > 0){
              toast.error(`Sorry you can only submit one link at level 0. 😃😃`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }else{
              setShowModal(true)
            }
            }}>
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
              style={{ width: `${(links?.length/1) * 100}%` }}
            ></div>
          </div>

          <div className="w-full mt-5 flex flex-row justify-between">
            <h4 className=" text-darkTextPrimary font-semibold">
             { `${links? `${(1 - links?.length)} links remaining` : '.......'} `}
            </h4>
            <h4 className="text-darkTextPrimary font-semibold">{`${links?.length | 0} / 1`}</h4>
          </div>

          <h4 className=" text-darkTextPrimary font-semibold mt-10 flex flex-row gap-4">
            <span>Level 0 (Upgrade for more space) </span>
          </h4>
        </div>
      </div>

      <h2 className="mt-[55px] flex gap-3 px-3 items-center text-darkTextPrimary font-semibold text-[20px]">
        <span>All my youtube links</span> <HiChevronRight />
      </h2>

     {content}

      {showModal && (
        <ModalBox
          title={"Add your youtube link"}
          footer={
            <ModalFooter>
              <button
                className="py-1 text-pinkPrimary font-bold px-2"
                onClick={() => setShowModal(false)}
              >
                CANCEL
              </button>
              <button className="py-1 bg-emerald-600 font-bold px-3 rounded-md text-white  disabled:bg-slate-400 disabled:cursor-not-allowed" onClick={()=>AddLink()} disabled={link.trim().length ===0 || youtubeName.trim().length ===0 || !isValid}>
                {loading? 'Adding...': 'Add link'}
              </button>
            </ModalFooter>
          }
        >
          <div className="w-full mt-1 ">
            <p className="font-semibold text-darkTextPrimary">
              * Youtube Channel name
            </p>
            <input
              type="text"
              name="youtubeName"
              placeholder="AiAsum Sub2Sub"
              onChange={(e)=>setYoutubeName(e.target.value)}
              className="w-full mt-1 h-[2rem] rounded-md outline-0 border-2 bg-darkSecondary border-darkTextPrimary text-darkTextPrimary px-2 font-semibold placeholder-darkTertiary"
            />
             <p className="font-semibold text-darkTextPrimary mt-4">
              * Link to youtube channel
            </p>
            <input
              type="text"
              name="youtubeLink"
              onChange={(event)=>handleLinkChange(event)}
              placeholder="https://www.youtube.com/channel/UCiUNFyQ6F-6XfleCjnXJanA"
              className="w-full mt-1 h-[2rem] rounded-md outline-0 border-2 bg-darkSecondary border-darkTextPrimary text-darkTextPrimary px-2 font-semibold placeholder-darkTertiary placeholder:text-[14px]"
            />
             {(!isValid && link ) ? <p className="text-red-600 font-semibold">* URL is invalid.</p> : ''}
          </div>
        </ModalBox>
      )}
      <ToastContainer />
    </div>
  );
}

export default Portal;
