import React from 'react';

// 검색바 컴포넌트: 검색어 입력을 받아 검색어 상태 업데이트
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="검색어를 입력하세요"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default SearchBar;
