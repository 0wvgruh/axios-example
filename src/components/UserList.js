import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import UserItem from './UserItem';
import styles from '../css/UserList.module.css';

function UserList({ searchTerm, onUserClick, selectedUserId, currentPage, itemsPerPage, sortKey, onFilterCountChange }) {
  const [users, setUsers] = useState([]);
  const [expandedUserId, setExpandedUserId] = useState(null);

  useEffect(() => {
    axiosInstance.get('/users')
      .then((response) => {
        const sortedData = sortData(response.data, sortKey);
        setUsers(sortedData);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, [sortKey]);

  // 데이터 정렬
  const sortData = (data, key) => {
    return data.sort((a, b) => {
      // 문자열과 숫자형 데이터를 모두 고려하여 정렬
      return String(a[key]).localeCompare(String(b[key]), undefined, { numeric: true });
    });
  };

  // 검색어로 사용자 필터링
  const filteredUsers = users.filter(user =>
    user.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 필터링된 사용자 수 전달
  useEffect(() => {
    onFilterCountChange(filteredUsers.length);
  }, [filteredUsers, onFilterCountChange]);

  // 페이지네이션 처리
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const handleUserClick = (userId) => {
    setExpandedUserId(prevId => (prevId === userId ? null : userId)); // 클릭 시 토글
    onUserClick(userId); // 선택된 사용자 ID 업데이트
  };

  return (
    <ul className={styles.container}>
      {currentItems.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          isExpanded={expandedUserId === user.id}
          onClick={() => handleUserClick(user.id)}
        />
      ))}
    </ul>
  );
}

export default UserList;
