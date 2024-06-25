import axios from "axios";

// 회원가입 요청을 위한 인스턴스
export const instance = axios.create({
  baseURL: "/api/v1", // 프록시된 경로
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// 로그인 요청을 위한 인스턴스
export const loginInstance = axios.create({
  baseURL: "/", // 프록시된 경로
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// 항상 패칭 요청을 보내면 response.data가 값이 리턴되게
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  // 에러 일괄 처리
  async (error) => {
    console.log(error.message);
    return Promise.reject(error);
  },
);
