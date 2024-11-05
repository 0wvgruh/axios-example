import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import SortSelector from '../components/SortSelector';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  searchTermState,
  sortKeyState,
  currentPageState,
  selectedIdsState,
  filteredUsersCountState,
} from '../atoms/atoms';

function MainPage() {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);
  const [sortKey, setSortKey] = useRecoilState(sortKeyState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const selectedIds = useRecoilValue(selectedIdsState);
  const setSelectedIds = useSetRecoilState(selectedIdsState);
  const [filteredUsersCount, setFilteredUsersCount] = useRecoilState(filteredUsersCountState);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, setCurrentPage]);

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id) ? prevSelectedIds.filter(selectedId => selectedId !== id) : [...prevSelectedIds, id]
    );
  };

  const handleFilterCountChange = (count) => {
    setFilteredUsersCount(count);
  };

  const handlePageChange = (page) => {
    const totalPages = Math.ceil(filteredUsersCount / 10);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <SortSelector sortKey={sortKey} onSortChange={setSortKey} />
      <UserList
        searchTerm={searchTerm}
        currentPage={currentPage}
        itemsPerPage={10}
        sortKey={sortKey}
        selectedIds={selectedIds}
        onCheckboxChange={handleCheckboxChange}
        onFilterCountChange={handleFilterCountChange}
      />
      <Link to="/selected-users">
        <button>선택된 사용자 보기</button>
      </Link>
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={Math.ceil(filteredUsersCount / 10)}
      />
      
      {/* Scroll 버튼 추가 */}
      <Link to="/user-scroll">
        <button>Scroll</button>
      </Link>
    </div>
  );
}

export default MainPage;
