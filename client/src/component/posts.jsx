import React from "react";
import SubscribeCard from "./subscribeCard";

const Posts = ({ posts, loading, pageNumber, handleSubscribe}) => {
  if (loading) {
    return (
     <h1>Loading..</h1>

    )
  }

  console.log()

  return (
    <div className="paginationCard w-full flex flex-wrap justify-center gap-x-3 py-2 mt-10">
      {posts.map((post, index) => (
        <SubscribeCard key={post.id} index={`${((pageNumber -1) * 12) + (index + 1)}`} handleSubscribe={handleSubscribe} cardContent={post} />
      ))}
    </div>
  );
};

export default Posts;
