import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import UserItem from './UserItem';
import styles from '../css/UserList.module.css';

function UserList({ searchTerm, onUserClick, selectedUserId, currentPage, itemsPerPage, sortKey, onFilterCountChange, onCheckboxChange, selectedIds }) {
  const [users, setUsers] = useState([]);
  const [expandedUserId, setExpandedUserId] = useState(null);

  useEffect(() => {
    axiosInstance.get('/users')
      .then((response) => {
        console.log("Fetched users:", response.data); // API 응답 확인
        const sortedData = sortData(response.data, sortKey);
        setUsers(sortedData);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, [sortKey]);

  const sortData = (data, key) => {
    return data.sort((a, b) => {
      return String(a[key]).localeCompare(String(b[key]), undefined, { numeric: true });
    });
  };

  const filteredUsers = users.filter(user =>
    user.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    onFilterCountChange(filteredUsers.length);
  }, [filteredUsers, onFilterCountChange]);

  return (
    <ul className={styles.container}>
      {currentItems.length > 0 ? (
        currentItems.map((user) => (
          <li key={user.id} className={styles.listItem}>
            <input
              type="checkbox"
              checked={selectedIds.includes(user.id)}
              onChange={() => onCheckboxChange(user.id)}
            />
            <UserItem
              user={user}
              isExpanded={expandedUserId === user.id}
              onClick={() => setExpandedUserId(expandedUserId === user.id ? null : user.id)}
            />
          </li>
        ))
      ) : (
        <p>사용자가 없습니다.</p>
      )}
    </ul>
  );
}

export default UserList;
