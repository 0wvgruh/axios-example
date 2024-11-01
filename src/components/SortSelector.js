import React from 'react';
// 정렬 기준 선택
function SortSelector({ sortKey, onSortChange }) {
  return (
    <div>
      <label>정렬 기준:</label>
      <select value={sortKey} onChange={(e) => onSortChange(e.target.value)}>
        <option value="title">Title</option>
        <option value="id">ID</option>
        <option value="albumId">Album ID</option>
      </select>
    </div>
  );
}

export default SortSelector;
