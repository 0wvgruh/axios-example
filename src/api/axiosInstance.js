import axios from 'axios';

// axios 인스턴스 설정
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // API 기본 URL
  timeout: 5000, // 요청 타임아웃 (5초)
  headers: {
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer YOUR_TOKEN', // 인증 토큰 (필요시)
  }
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request sent:", config);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response received:", response);
    return response;
  },
  (error) => {
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
