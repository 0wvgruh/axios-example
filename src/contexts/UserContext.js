import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState("title");
  const [filteredUsersCount, setFilteredUsersCount] = useState(0);

  return (
    <UserContext.Provider
      value={{
        selectedUserId, setSelectedUserId,
        selectedIds, setSelectedIds,
        searchTerm, setSearchTerm,
        currentPage, setCurrentPage,
        sortKey, setSortKey,
        filteredUsersCount, setFilteredUsersCount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
