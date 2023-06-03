import React, { useState, useEffect } from "react";
import Posts from "../component/posts";
import Pagination from "../component/pagination";
import axios from "axios";
import { Helmet } from "react-helmet";
import YoutubeLogo from '../assets/images/Youtube_logo.png'
import {HiCheckBadge} from 'react-icons/hi2'
const Task = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-ful">
      <Helmet>
        <title>CoderGuides | Home</title>
      </Helmet>

      <h1 className="text-[18px] font-semibold text-darkTextPrimary">
        Thursday,
      </h1>
      <p className="text-3xl font-bold text-white">My activity portal</p>

      <div className="w-full max-w-[17rem] bg-darkSecondary border-4 border-darkPrimary rounded-2xl shadow relative">
        <div className="absolute top-1 left-1 w-10 h-10 bg-pinkPrimary rounded-[13px] font-semibold text-[22px] flex justify-center items-center text-white">1</div>
        <div className="flex flex-col items-center pb-10 py-5">
          <img
            className="w-[5rem]"
            src={YoutubeLogo}
            alt="youtube logo"
          />
          <h5 className=" px-4 text-center w-full text-darkTextPrimary font-bold text-[20px] capitalize mt-3">
            Bonnie Green Gradd of money monkey
          </h5>
          <span className="font-semibold text-emerald-400">
            3 days ago
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href="https://sdsa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={()=>{console.log('Work')}}
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
          <p className="px-4 mt-3 font-semibold text-red-600">* You've not subscribed to this channel</p>
          <p className="px-4 mt-3 font-semibold text-emerald-600">* You've already subscribed to this channel</p>

        </div>
      </div>

      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Task;
