import React, { useState } from 'react';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null); // 선택된 사용자 ID
  const [searchTerm, setSearchTerm] = useState(""); // 검색어

  return (
    <div className="App">
      <h1>User Management</h1>

      {/* 검색어 입력 필드 */}
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 검색어와 선택된 사용자 핸들러를 UserList에 전달 */}
      <UserList searchTerm={searchTerm} onUserClick={setSelectedUserId} />

      {/* 선택된 사용자 ID에 해당하는 URL을 UserDetail에서 보여줌 */}
      <UserDetail userId={selectedUserId} />
    </div>
  );
}

export default App;
