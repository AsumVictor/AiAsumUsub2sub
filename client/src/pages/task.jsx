import React, { useState, useEffect } from "react";
import Posts from "../component/posts";
import Pagination from "../component/pagination";
import axios from "axios";
import { Helmet } from "react-helmet";
import { HiChevronRight } from "react-icons/hi2";
import { animateScroll as scroll } from 'react-scroll';


const Task = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

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


  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [currentPage]);

  return (
    <div className="w-full py-2 mt-10 px-3 md:px-10 pb-20">
      <Helmet>
        <title>CoderGuides | Home</title>
      </Helmet>

      <h1 className="text-[18px] font-semibold text-darkTextPrimary">
        Thursday,
      </h1>
      <p className="text-3xl font-bold text-white">Task to perform</p>

      <h2 className="flex gap-3 px-3 items-center text-darkTextPrimary font-semibold text-[20px] mt-10">
        <span>All submitted links</span> <HiChevronRight />
      </h2>

      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={currentPosts} loading={loading} pageNumber={currentPage} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />

    </div>
  );
};

export default Task;
