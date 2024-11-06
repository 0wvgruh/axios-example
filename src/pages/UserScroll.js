import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import UserItem from '../components/UserItem';
import styles from '../css/UserList.module.css';
import { Link } from 'react-router-dom';

function UserScroll({ searchTerm, sortKey, onCheckboxChange, selectedIds = [] }) {
  const [users, setUsers] = useState([]);
  const [expandedUserId, setExpandedUserId] = useState(null);
  const scrollRef = useRef(null);
  const location = useLocation();

  // 데이터 가져오기 및 정렬 설정
  useEffect(() => {
    axiosInstance.get('/users')
      .then((response) => {
        const sortedData = sortData(response.data, sortKey);
        setUsers(sortedData);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, [sortKey]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userId = params.get('userId');
    
    if (userId) {
      const userElement = document.getElementById(`user-${userId}`);
      if (userElement) {
        userElement.scrollIntoView({  block: 'center' });
      }
    }
  }, [users, location.search]);

  const sortData = (data, key) => {
    return data.sort((a, b) => {
      if (typeof a[key] === "string") {
        return a[key].localeCompare(b[key], undefined, { numeric: true });
      }
      return a[key] - b[key];
    });
  };

  const filteredUsers = users.filter(user =>
    searchTerm ? user.title.toLowerCase().includes(searchTerm.toLowerCase()) : true
  );

  return (
    <ul className={styles.container} ref={scrollRef}>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <li key={user.id} className={styles.listItem} id={`user-${user.id}`}>
            <input
              type="checkbox"
              checked={selectedIds.includes(user.id)}
              onChange={() => onCheckboxChange(user.id)}
            />
            <Link to={`/user/${user.id}`}>
              <UserItem
                user={user}
                isExpanded={expandedUserId === user.id}
                onClick={() => setExpandedUserId(expandedUserId === user.id ? null : user.id)}
              />
            </Link>
          </li>
        ))
      ) : (
        <p>사용자가 없습니다.</p>
      )}
    </ul>
  );
}

export default UserScroll;
