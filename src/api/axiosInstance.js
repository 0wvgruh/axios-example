import axios from 'axios';

// axios 인스턴스 설정
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // API 기본 URL
  timeout: 5000, // 요청 타임아웃 (5초)
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
