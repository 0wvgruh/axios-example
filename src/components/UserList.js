import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import UserItem from './UserItem';
import styles from '../css/UserList.module.css';

function UserList({ searchTerm, currentPage, itemsPerPage, sortKey, onFilterCountChange, onCheckboxChange, selectedIds }) {
  const [users, setUsers] = useState([]); // 서버에서 가져온 사용자 데이터 저장
  const [expandedUserId, setExpandedUserId] = useState(null); // 현재 상세 정보가 확장된 사용자의 ID 저장

  useEffect(() => { // 데이터 가져오기 및 정렬 설정
    axiosInstance.get('/users') // 데이터 가져옴
      .then((response) => {
        console.log("Fetched users:", response.data);
        const sortedData = sortData(response.data, sortKey); // 불러온 데이터 sortKey에 따라 정렬
        setUsers(sortedData);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, [sortKey]);

  const sortData = (data, key) => { // 데이터 정렬
    return data.sort((a, b) => {
      if (typeof a[key] === "string") { // 알파벳 순서대로 정렬 , 숫자일 경우 단순 숫자 비교 정렬
        return a[key].localeCompare(b[key], undefined, { numeric: true });
      }
      return a[key] - b[key]; // 숫자형 필드는 숫자 비교 사용
    });
  };

  const filteredUsers = users.filter(user => // 검색어로 데이터 필터링
    user.title.toLowerCase().includes(searchTerm.toLowerCase()) // 검색어가 포함된 사용자만 필터링
  );

  //  페이지네이션 처리
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem); // filteredUsers를 slice하여 현재 페이지에 해당하는 사용자 항목만 추출하여 currentItems 배열 저장

  useEffect(() => { // 필터링된 사용자 수 업데이트
    onFilterCountChange(filteredUsers.length); // 부모 컴포넌트에 전달하여 필터링된 사용자 수를 업데이트
  }, [filteredUsers, onFilterCountChange]); // filteredUsers가 변경될 때마다 실행

  return ( //  렌더링 부분 - 사용자 목록과 체크박스, 확장 기능
    <ul className={styles.container}>
      {currentItems.length > 0 ? ( 
        currentItems.map((user) => ( // currentItems 배열의 각 user 항목을 <li>로 반복하여 렌더링
          <li key={user.id} className={styles.listItem}>
            <input
              type="checkbox" // 체크 여부에 따라 selectedIds 상태를 업데이트
              checked={selectedIds.includes(user.id)}
              onChange={() => onCheckboxChange(user.id)}
            />
            <UserItem // 개별 사용자의 세부 정보를 렌더링
              user={user}
              isExpanded={expandedUserId === user.id} // isExpanded 속성을 통해, 현재 확장된 사용자(expandedUserId)와 비교 후 확장 여부 판단
              onClick={() => setExpandedUserId(expandedUserId === user.id ? null : user.id)} // 클릭 시 expandedUserId 상태를 업데이트하여 클릭한 사용자 항목을 확장 or 닫음
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
