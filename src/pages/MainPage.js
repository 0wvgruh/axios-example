import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import SortSelector from '../components/SortSelector';

// 메인 페이지 컴포넌트: 검색, 정렬, 사용자 목록 및 페이징을 포함한 메인 화면
function MainPage({ selectedIds, setSelectedIds }) {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState("title");
  const [filteredUsersCount, setFilteredUsersCount] = useState(0);
  const itemsPerPage = 10;

  const handlePageChange = (page) => setCurrentPage(page);
  const handleSortChange = (key) => setSortKey(key);
  const handleSearchChange = (term) => setSearchTerm(term);

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  // 검색어 변경 시 페이지를 첫 페이지로 이동
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
        onFilterCountChange={setFilteredUsersCount}
        onCheckboxChange={handleCheckboxChange}
        selectedIds={selectedIds}
      />
      <Link to="/selected-users">
        <button>선택된 사용자 보기</button>
      </Link>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredUsersCount}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default MainPage;
