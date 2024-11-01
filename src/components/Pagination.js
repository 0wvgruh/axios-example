import React from 'react';
import styles from '../css/Pagination.module.css';
// 페이지네이션을 위한 버튼을 표시
function Pagination({ currentPage, itemsPerPage, totalItems, onPageChange }) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={styles.pagination}>
      {Array.from({ length: pageCount }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={currentPage === index + 1 ? styles.activePage : ""}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
