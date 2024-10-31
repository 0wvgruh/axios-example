import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import styles from '../css/UserList.module.css';

function UserList({ searchTerm, onUserClick }) {
  const [users, setUsers] = useState([]); // 모든 사용자 목록
  const [clickedUser, setClickedUser] = useState(null); // 클릭된 사용자 ID

  // 컴포넌트가 처음 렌더링될 때 전체 사용자 목록 불러오기
  useEffect(() => {
    axiosInstance.get('/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // 검색어로 title 필터링
  const filteredUsers = users.filter(user =>
    user.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 제목 클릭 시 ID 저장 및 title 숨김 설정
  const handleUserClick = (user) => {
    setClickedUser(user.id);
    onUserClick(user.id); // 선택된 ID를 App에 전달
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User List</h2>
      <ul>
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            onClick={() => handleUserClick(user)}
            className={styles.listItem}
          >
            {clickedUser === user.id ? (
              <a href={user.url} target="_blank" rel="noopener noreferrer">{user.url}</a>
            ) : (
              user.title
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
