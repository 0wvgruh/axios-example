import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import SortSelector from './components/SortSelector';

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState("title");
  const [filteredUsersCount, setFilteredUsersCount] = useState(0);
  const itemsPerPage = 10;

  const handlePageChange = (page) => setCurrentPage(page);
  const handleSortChange = (key) => setSortKey(key);
  const handleSearchChange = (term) => setSearchTerm(term);

  // 검색어가 변경될 때 페이지를 첫 페이지로 이동
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>User Management</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <SortSelector sortKey={sortKey} onSortChange={handleSortChange} />
      <UserList
        searchTerm={searchTerm}
        onUserClick={setSelectedUserId}
        selectedUserId={selectedUserId}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        sortKey={sortKey}
        onFilterCountChange={setFilteredUsersCount} // 필터링된 사용자 수 업데이트
      />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredUsersCount} // 필터링된 사용자 수에 따라 페이지네이션 조정
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
