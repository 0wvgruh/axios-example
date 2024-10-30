// 사용자 상세 정보를 보여주는 컴포넌트
// 선택된 사용자 ID에 따라 UserDetail.js에서 상세 정보를 보여줍니다.
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../css/UserDetail.module.css'; // css 폴더 내의 CSS 모듈 import

function UserDetail({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId) return;
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => setUser(response.data))
      .catch(error => console.error("Error fetching user details:", error));
  }, [userId]);

  if (!userId) return <div>Select a user to see details</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Detail</h2>
      {user ? (
        <div className={styles.detail}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserDetail;

// userId가 없을 때는 안내 메시지를 보여줍니다.
// userId가 있을 경우, axios를 통해 사용자의 상세 데이터를 가져와 화면에 출력합니다.

// userId Prop: userId는 부모 컴포넌트에서 선택된 사용자 ID를 전달받는 prop입니다.
// useEffect: userId가 바뀔 때마다 실행되어, axios로 해당 사용자의 상세 정보를 요청합니다.
// user 상태: 데이터를 성공적으로 불러오면 user 상태에 저장되며, user 값이 null이 아닐 경우 상세 정보를 표시합니다.
// 로딩 메시지: user 값이 null일 경우에는 "Loading..." 메시지가 출력됩니다.
