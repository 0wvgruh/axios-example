import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate 훅
import { useRecoilValue } from 'recoil';
import { selectedIdsState } from '../atoms/atoms';

const SelectedUsersPage = () => {
  const selectedIds = useRecoilValue(selectedIdsState); // 읽기 전용 상태
  const navigate = useNavigate();

  // selectedUser 객체를 useMemo로 생성하여 selectedIds 변경 시에만 새로 계산되도록 최적화
  const selectedUser = useMemo(() => ({
    ids: selectedIds,
    details: selectedIds.map((id) => ({
      id: id,
      name: `User ${id}`, // 예시 이름
      email: `user${id}@example.com` // 예시 이메일
    })),
  }), [selectedIds]);

  // MainPage로 이동하는 함수
  const goToMainPage = () => {
    navigate('/'); // '/' 경로로 이동
  };

  return (
    <div>
      <h2>선택된 사용자 목록</h2>
      {selectedUser.ids.length > 0 ? (
        <ul>
          {selectedUser.details.map((user) => (
            <li key={user.id}>
              <p>사용자 ID: {user.id}</p>
              <p>이름: {user.name}</p>
              <p>이메일: {user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>선택된 사용자가 없습니다.</p>
      )}
      {/* 목록으로 버튼 */}
      <button onClick={goToMainPage}>목록으로</button>
    </div>
  );
};

export default SelectedUsersPage;
