import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainPage from './pages/MainPage';
import SelectedUsersPage from './pages/SelectedUsersPage';
import UserScroll from './pages/UserScroll';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/selected-users" element={<SelectedUsersPage />} />
          <Route path="/user-scroll" element={<UserScroll />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
