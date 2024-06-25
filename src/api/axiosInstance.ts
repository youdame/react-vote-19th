import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "/api/v1";

export const instance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
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

// 로그인 요청을 위한 인스턴스
export const loginInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});
