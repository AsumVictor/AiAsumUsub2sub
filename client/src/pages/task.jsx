import React, { useState, useEffect, useRef } from "react";
import Posts from "../component/posts";
import Pagination from "../component/pagination";
import axios from "axios";
import { Helmet } from "react-helmet";
import { HiChevronRight } from "react-icons/hi2";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../hooks/useAuthHooks";
import NoContent from "../component/NoContent";

const Task = () => {
  const { user } = useAuthContext();
  let [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(searchParams.get("page") | 1);
  const [postsPerPage] = useState(12);
  const scrollTop = useOutletContext();
  let content;
  
  if(loading){
    content = (
      <p className="text-white text-2xl">LOADING...</p>
    )
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://api-aiasum-u-sub2sub.onrender.com/subscriptions/sub", {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        });
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

    if (user) {
      fetchPosts();
    }
  }, []);

  const subscribeToChannel = async (index, youtubeId) => {
    const subscription = {
      youtubeID: youtubeId,
    };

    let allLinks = [...posts];

    try {
      setLoading(true);
      const res = await axios(
        {
          method: "post",
          url: "https://api-aiasum-u-sub2sub.onrender.com/subscriptions",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
          data: {
            ...subscription,
          },
        }
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

        allLinks[index] = {
          ...allLinks[index],
          isSubscriber: true,
        };
        setPosts(allLinks);
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

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //search param page
  const handlePageParams = (number) => {
    setSearchParams({ page: number });
    scrollTop();
  };



  if (posts?.length > 0) {
    content = (
      <>
        <Posts
          posts={currentPosts}
          loading={loading}
          pageNumber={currentPage}
          handleSubscribe={subscribeToChannel}
        />

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          handleScroll={handlePageParams}
          currentPage={currentPage}
        />
      </>
    );
  }
  
   if(!loading && posts?.length === 0)  {
     content = (
       <NoContent customClass={"w-[15rem]"} message={"Oops! there is no submitted links"} />
     );
   }

  return (
    <div className=" w-full py-2 mt-10 px-3 md:px-10 pb-20">
      <Helmet>
        <title>SubScribe to Channel</title>
      </Helmet>

      <h1 className="text-[18px] font-semibold text-darkTextPrimary">
        Thursday,
      </h1>
      <p className="text-3xl font-bold text-white">Task to perform</p>

      <h2 className="flex gap-3 px-3 items-center text-darkTextPrimary font-semibold text-[20px] mt-10">
        <span>All submitted links</span> <HiChevronRight />
      </h2>

      {content}

      {/* Notification */}
      <ToastContainer />
    </div>
  );
};

export default Task;
