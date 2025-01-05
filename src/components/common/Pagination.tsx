"use client";
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handleClick(currentPage - 1)}>Previous</button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handleClick(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handleClick(currentPage + 1)}>Next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
