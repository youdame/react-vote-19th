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
  await instance.post("/users", userData);
};
