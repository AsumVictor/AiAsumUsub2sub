import React from "react";
import SubscribeCard from "./subscribeCard";

const Posts = ({ posts, loading, pageNumber}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="paginationCard w-full flex flex-wrap justify-center gap-x-3 py-2 mt-10">
      {posts.map((post, index) => (
        <SubscribeCard key={post.id} index={`${((pageNumber -1) * 12) + (index + 1)}`} />
      ))}
    </div>
  );
};

export default Posts;
