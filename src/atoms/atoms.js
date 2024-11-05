// atoms.js
import { atom } from 'recoil';

// 선택된 사용자 ID 상태
export const selectedIdsState = atom({
  key: 'selectedIdsState',
  default: [],
});

// 검색어 상태
export const searchTermState = atom({
  key: 'searchTermState',
  default: '',
});

// 정렬 키 상태
export const sortKeyState = atom({
  key: 'sortKeyState',
  default: 'title',
});

// 현재 페이지 상태
export const currentPageState = atom({
  key: 'currentPageState',
  default: 1,
});

// 필터링된 사용자 수 상태
export const filteredUsersCountState = atom({
  key: 'filteredUsersCountState',
  default: 0,
});
