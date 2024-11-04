import React from 'react';

function Pagination({ currentPage, onPageChange, totalPages }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      {/* 첫 페이지로 이동 */}
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        &laquo;
      </button>
      {/* 이전 페이지로 이동 */}
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        &lt;
      </button>

      {/* 페이지 번호 */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          style={{ fontWeight: currentPage === number ? 'bold' : 'normal' }}
        >
          {number}
        </button>
      ))}

      {/* 다음 페이지로 이동 */}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        &gt;
      </button>
      {/* 마지막 페이지로 이동 */}
      <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
        &raquo;
      </button>
    </div>
  );
}

export default Pagination;
