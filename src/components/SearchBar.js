import React from 'react';
// 검색어 입력
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
