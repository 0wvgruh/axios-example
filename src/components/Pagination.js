import React from 'react';

// 페이지네이션 컴포넌트: 페이지 번호 버튼을 렌더링하여 페이지 이동을 처리
function Pagination({ currentPage, itemsPerPage, totalItems, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
