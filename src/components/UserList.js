// 사용자 목록을 보여주는 컴포넌트
// UserList.js에서 사용자 목록을 axios로 불러옵니다.
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../css/UserList.module.css'; // css 폴더 내의 CSS 모듈 import

function UserList({ onUserClick }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User List</h2>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            onClick={() => onUserClick(user.id)}
            className={styles.listItem}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;


// 이 컴포넌트는 useEffect를 사용해 API에서 사용자 데이터를 한 번만 불러옵니다.
// onUserClick 함수를 통해 클릭된 사용자의 ID를 UserDetail 컴포넌트에 전달합니다.

// useState: users 상태를 정의하여 사용자 목록 데이터를 저장합니다.
// useEffect: 컴포넌트가 처음 렌더링될 때 한 번 실행되어 axios로 
// API(https://jsonplaceholder.typicode.com/users)에서 사용자 목록을 가져옵니다. 
// axios.get()이 성공하면 response.data가 users 상태에 저장됩니다.
// onUserClick: onUserClick은 부모 컴포넌트에서 전달된 함수로, 사용자가 목록의 항목을 클릭할 때 호출됩니다. 
// 각 항목을 클릭할 때 해당 항목의 user.id를 onUserClick에 전달하여 부모 컴포넌트의 상태를 업데이트합니다.
