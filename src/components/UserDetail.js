import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import styles from '../css/UserDetail.module.css';

function UserDetail({ userId }) {
  const [user, setUser] = useState(null); // 선택된 사용자 데이터

  useEffect(() => {
    if (!userId) return;

    axiosInstance.get(`/users/${userId}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user details:", error));
  }, [userId]);

  if (!userId) return <div>사용자를 선택하세요</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Detail</h2>
      {user ? (
        <div className={styles.detail}>
          <p><strong>URL:</strong> <a href={user.url} target="_blank" rel="noopener noreferrer">{user.url}</a></p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserDetail;
