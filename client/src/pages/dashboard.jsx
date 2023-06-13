import React, {useEffect, useState} from "react";
import { HiChevronRight, HiSquare3Stack3D } from "react-icons/hi2";
import {
  HiViewGrid,
  HiOutlineDotsVertical,
  HiTrendingUp,
  HiChartBar,
} from "react-icons/hi";
import Construction from '../component/underConstruction'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {useAuthContext} from '../hooks/useAuthHooks'

function Dashboard() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const {user} = useAuthContext()
  let numberOfSubscribedLinks = 0;


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "http://localhost:4000/subscriptions/sub/647a7816d64dc3426f846ec6"
        );
        if (res.status === 200) {
          setPosts(res.data.data.links);
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
    fetchPosts();
  }, []);

if(posts){
  for (let i = 0; i < posts.length; i++) {
     if(posts[i].isSubscriber){
      numberOfSubscribedLinks += 1
     }else{
      numberOfSubscribedLinks = 0
     }
    
  }
}
  // Check number od subscribed links
  return (
    <div className="w-full py-2 mt-10 px-3 md:px-10 pb-20">
      <h1 className="text-[18px] font-semibold text-darkTextPrimary">
        {`Hey, ${user?.email}!,`}
      </h1>
      <p className="text-3xl font-bold text-white">Dashboard</p>

      <h2 className="mt-[55px] flex gap-3 px-3 items-center text-darkTextPrimary font-semibold text-[20px]">
        <span>Overview</span> <HiChevronRight />
      </h2>

      <div className="w-full py-2 mt-10 flex justify-center gap-5 flex-wrap">
        <div className="w-[20rem] h-[15rem] md:w-[25rem] rounded-2xl bg-darkSecondary px-3">
          <div className="w-full py-2 grid grid-cols-12 gap-3">
            <div className="h-[3rem] w-[3rem] bg-darkTertiary rounded-2xl flex justify-center items-center text-3xl text-pinkPrimary col-span-2">
              <HiViewGrid />
            </div>
            <div className=" rounded-2xl flex justify-start items-center text-[20px] text-darkTextPrimary col-span-9 font-semibold">
              My task progress
            </div>

            <div className="rounded-2xl flex justify-center items-center text-[20px] text-darkTextPrimary col-span-1 cursor-pointer hover:bg-darkTertiary">
              <HiOutlineDotsVertical />
            </div>
          </div>

          <div className="w-full bg-darkPrimary rounded-full h-3 mt-10">
            <div
              className=" bg-pinkPrimary h-3 rounded-full"
              style={{ width: `${(numberOfSubscribedLinks/50)* 100}%` }}
            ></div>
          </div>

          <div className="w-full mt-5 flex flex-row justify-between">
            <h4 className=" text-darkTextPrimary font-semibold">
              {`${(numberOfSubscribedLinks/50)* 100}% completed`}
            </h4>
            <h4 className="text-darkTextPrimary font-semibold">{`${numberOfSubscribedLinks} / 50`}</h4>
          </div>

          <h4 className=" text-darkTextPrimary font-semibold mt-10 flex flex-row gap-4">
            <span className=" text-pinkPrimary">Deadline:</span>
            <span>27th may 2023</span>
          </h4>
        </div>

        <div className="w-[20rem] h-[15rem] md:w-[25rem] rounded-2xl bg-darkSecondary px-3">
          <div className="w-full py-2 grid grid-cols-12 gap-3">
            <div className="h-[3rem] w-[3rem] bg-darkTertiary rounded-2xl flex justify-center items-center text-3xl text-pinkPrimary col-span-2">
              <HiSquare3Stack3D />
            </div>
            <div className=" rounded-2xl flex justify-start items-center text-[20px] text-darkTextPrimary col-span-9 font-semibold">
              My total subscriptions
            </div>

            <div className="rounded-2xl flex justify-center items-center text-[20px] text-darkTextPrimary col-span-1 cursor-pointer hover:bg-darkTertiary">
              <HiOutlineDotsVertical />
            </div>
          </div>

          <div className="w-full py-1 mt-10 grid grid-cols-5">
            <h1 className="col-span-1 flex justify-center items-center text-3xl font-bold text-white">
              {posts? numberOfSubscribedLinks : '.....'}
            </h1>
            <span className="col-span-1 flex justify-center items-center text-4xl font-bold  text-emerald-600">
              <HiTrendingUp />
            </span>
            <div className="flex flex-col gap-1 col-span-3">
              <h2 className="text-emerald-600 font-semibold">+ 12.54 % </h2>
              <h2 className=" text-darkTextPrimary font-semibold">
                From last 3 days
              </h2>
            </div>
          </div>
        </div>

        <div className="w-[20rem] h-[15rem] md:w-[25rem] rounded-2xl bg-darkSecondary px-3">
          <div className="w-full py-2 grid grid-cols-12 gap-3">
            <div className="h-[3rem] w-[3rem] bg-darkTertiary rounded-2xl flex justify-center items-center text-3xl text-pinkPrimary col-span-2">
              <HiChartBar />
            </div>
            <div className=" rounded-2xl flex justify-start items-center text-[20px] text-darkTextPrimary col-span-9 font-semibold">
              Overall progress
            </div>

            <div className="rounded-2xl flex justify-center items-center text-[20px] text-darkTextPrimary col-span-1 cursor-pointer hover:bg-darkTertiary">
              <HiOutlineDotsVertical />
            </div>
          </div>

          <div className="w-full bg-darkPrimary rounded-full h-3 mt-10">
            <div
              className=" bg-pinkPrimary h-3 rounded-full"
              style={{ width: `${(numberOfSubscribedLinks/posts?.length)* 100}%` }}
            ></div>
          </div>

          <div className="w-full mt-5 flex flex-row justify-between">
            <h4 className=" text-darkTextPrimary font-semibold">
              {`${(numberOfSubscribedLinks/posts?.length)* 100}% completed`}
            </h4>
            <h4 className="text-darkTextPrimary font-semibold">{`${numberOfSubscribedLinks} / ${posts?.length}`}</h4>
          </div>

          <h4 className=" text-darkTextPrimary font-semibold mt-10 flex flex-row gap-4">
            <span className=" text-pinkPrimary">Total links submitted:</span>
            <span>{posts?.length}</span>
          </h4>
        </div>
      </div>

      <h2 className="mt-[55px] flex gap-3 px-3 items-center text-darkTextPrimary font-semibold text-[20px]">
        <span>My activity</span> <HiChevronRight />
      </h2>

      <Construction message=' Oops! This content is under construction' />
  <ToastContainer />
    </div>
  );
}

export default Dashboard;
