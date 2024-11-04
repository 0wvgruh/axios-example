import React, { useContext } from 'react'; //useContext 훅을 통해 전역 상태 접근을 위해 React 라이브러리 불러옴
import { Link } from 'react-router-dom'; // 페이지 간 이동
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import SortSelector from '../components/SortSelector';
import { UserContext } from '../contexts/UserContext';

function MainPage() {
  const { searchTerm, setSearchTerm, sortKey, setSortKey, currentPage, setCurrentPage, selectedIds, setSelectedIds, filteredUsersCount, setFilteredUsersCount } = useContext(UserContext);

  const handleCheckboxChange = (id) => { // 선택된 사용자 업데이트
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id) ? prevSelectedIds.filter(selectedId => selectedId !== id) : [...prevSelectedIds, id]
    ); // 현재 selectedIds 배열에 클릭된 사용자의 ID가 있는지 확인, filter 또는 spread 연산자를 통해 배열에서 ID를 제거하거나 추가
  };

  const handleFilterCountChange = (count) => { // 필터링된 사용자 수 업데이트
    setFilteredUsersCount(count); // 필터링된 사용자 수가 변경될 때마다 filteredUsersCount를 업데이트
  };

  const handlePageChange = (page) => { //  페이지 이동
    const totalPages = Math.ceil(filteredUsersCount / 10); // filteredUsersCount를 기준으로 전체 페이지 수를 계산
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return ( // 컴포넌트 렌더링
    <div className="App">
      <h1>User Management</h1>
       <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} /> {/* 현재 검색어 */}
      <SortSelector sortKey={sortKey} onSortChange={setSortKey} /> {/* 사용자 목록의 정렬 기준 선택 */}
      <UserList // 검색어, 정렬 기준, 페이지네이션에 따라 필터링된 사용자 목록 렌더링
        searchTerm={searchTerm} 
        currentPage={currentPage}
        itemsPerPage={10} // 한 페이지에 표시할 사용자 수 = 기본 값
        sortKey={sortKey}
        selectedIds={selectedIds}
        onCheckboxChange={handleCheckboxChange}
        onFilterCountChange={handleFilterCountChange}
      />
      <Link to="/selected-users">
        <button>선택된 사용자 보기</button>
      </Link>
      <Pagination // 페이지 이동을 위한 버튼 렌더링
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
        totalPages={Math.ceil(filteredUsersCount / 10)} 
      />
    </div>
  );
}

export default MainPage;
