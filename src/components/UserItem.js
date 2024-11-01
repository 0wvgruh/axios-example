import React from 'react';
import styles from '../css/UserItem.module.css';

function UserItem({ user, isExpanded, onClick }) {
  return (
    <li onClick={onClick} className={styles.listItem}>
      {isExpanded ? (
        <div className={styles.details}> {/* 상세 정보가 클릭될 때 title로 돌아가도록 설정 */}
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
