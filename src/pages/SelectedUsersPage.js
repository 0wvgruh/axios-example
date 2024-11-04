import React from 'react';

// 선택된 사용자 페이지 컴포넌트: 선택된 사용자 목록만 표시
const SelectedUsersPage = ({ selectedIds }) => {
  return (
    <div>
      <h2>선택된 사용자 목록</h2>
      {selectedIds.length > 0 ? (
        <ul>
          {selectedIds.map((id) => (
            <li key={id}>사용자 ID: {id}</li>
          ))}
        </ul>
      ) : (
        <p>선택된 사용자가 없습니다.</p>
      )}
    </div>
  );
};

export default SelectedUsersPage;
