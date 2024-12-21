import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        className="px-4 py-2 mx-2 border border-gray-300 rounded-lg"
      >
        Previous
      </button>
      <span className="px-4 py-2">{currentPage} / {totalPages}</span>
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        className="px-4 py-2 mx-2 border border-gray-300 rounded-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
