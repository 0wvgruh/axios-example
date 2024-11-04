import React from 'react';
import styles from '../css/UserItem.module.css';

// 개별 사용자 아이템 컴포넌트: 사용자 정보와 상세 정보를 클릭 시 표시
function UserItem({ user, isExpanded, onClick }) {
  return (
    <li onClick={onClick} className={styles.listItem}>
      {isExpanded ? (
        <div className={styles.details}>
          <p><strong>URL:</strong> <a href={user.url} target="_blank" rel="noopener noreferrer">{user.url}</a></p>
          <p><strong>Thumbnail URL:</strong> <a href={user.thumbnailUrl} target="_blank" rel="noopener noreferrer">{user.thumbnailUrl}</a></p>
          <p><strong>Album ID:</strong> {user.albumId}</p>
          <p><strong>ID:</strong> {user.id}</p>
        </div>
      ) : (
        <span>{user.title}</span>
      )}
    </li>
  );
}

export default UserItem;
