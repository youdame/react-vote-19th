import { instance } from "@/api/axiosInstance";

export interface PostSignUpReq {
  username: string;
  password: string;
  email: string;
  name: string;
  part: string;
  teamName: string;
}
export const postSignUp = async (userData: PostSignUpReq) => {
  await instance.post("api/v1/users", userData);
};

export interface PostSignInReq {
  username: string;
  password: string;
}

export const postSignIn = async (userData: PostSignInReq) => {
  await instance.post("/login", userData);
};
