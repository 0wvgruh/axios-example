import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SelectedUsersPage from './pages/SelectedUsersPage';
import { UserContextProvider } from './contexts/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/selected-users" element={<SelectedUsersPage />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
