import { instance, loginInstance } from "@/api/axiosInstance";

export interface PostSignUpReq {
  username: string;
  password: string;
  email: string;
  name: string;
  part: string;
  teamName: string;
}

export const postSignUp = async (userData: PostSignUpReq) => {
  return await instance.post("/users", userData);
};

export interface PostSignInReq {
  username: string;
  password: string;
}

export const postSignIn = async (userData: PostSignInReq) => {
  // 전체 응답 객체를 반환하도록 설정
  const response = await loginInstance.post("/login", userData);

  const accessToken = response.headers["authorization"].split(" ")[1];
  localStorage.setItem("accessToken", accessToken);

  return response;
};

interface UserInfoRes {
  id: number;
  username: string;
  email: string;
  name: string;
  part: string;
  teamName: string;
}

export const getUserInfo = async (): Promise<UserInfoRes> => {
  return await instance.get("/auth");
};
