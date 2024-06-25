import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "/api/v1";

export const instance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

// 요청 인터셉터를 사용하여 요청 시 액세스 토큰을 헤더에 추가
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 항상 패칭 요청을 보내면 response.data가 값이 리턴되게
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  // 에러 일괄 처리
  (error) => {
    console.log(error.message);
    return Promise.reject(error);
  },
);

// 로그인 요청을 위한 인스턴스
export const loginInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});
