import React from 'react';

// 정렬 선택 컴포넌트: 정렬 기준을 선택하여 정렬 상태 업데이트
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
