import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const SelectedUsersPage = () => {
  const { selectedIds } = useContext(UserContext);

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
