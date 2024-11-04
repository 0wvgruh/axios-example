import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SelectedUsersPage from './pages/SelectedUsersPage';

// 최상위 App 컴포넌트: 라우터와 상태 관리
function App() {
  const [selectedIds, setSelectedIds] = useState([]); // 선택된 사용자 ID 관리

  return (
    <Router>
      <Routes>
        {/* MainPage에 selectedIds와 setSelectedIds 전달 */}
        <Route path="/" element={<MainPage setSelectedIds={setSelectedIds} selectedIds={selectedIds} />} />
        {/* SelectedUsersPage에 selectedIds 전달 */}
        <Route path="/selected-users" element={<SelectedUsersPage selectedIds={selectedIds} />} />
      </Routes>
    </Router>
  );
}

export default App;
