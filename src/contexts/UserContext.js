import React, { createContext, useState, useEffect } from 'react';

// Context 생성
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState("title");
  const [filteredUsersCount, setFilteredUsersCount] = useState(0);

  const handlePageChange = (page) => setCurrentPage(page);
  const handleSortChange = (key) => setSortKey(key);
  const handleSearchChange = (term) => setSearchTerm(term);

  // 검색어 변경 시 페이지를 첫 페이지로 이동
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <UserContext.Provider
      value={{
        selectedUserId,
        setSelectedUserId,
        searchTerm,
        handleSearchChange,
        currentPage,
        handlePageChange,
        sortKey,
        handleSortChange,
        filteredUsersCount,
        setFilteredUsersCount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
