import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, handleScroll, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="inline-flex items-center -space-x-px mt-4">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => {
                handleScroll(number);
                paginate(number);
              }}
              className={`px-3 py-2 leading-tight ${currentPage === number? 'bg-gray-700' : 'bg-gray-800 '}   border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white `}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
