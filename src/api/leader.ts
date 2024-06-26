import { instance } from "@/api/axiosInstance";

interface GetUserRes {
  id: number;
  username: string;
  email: string;
  name: string;
  part: string;
  teamName: string;
}
export const getUsers = async (): Promise<GetUserRes[]> => {
  return await instance.get("/users");
};

export const postLeaderVote = async (partLeaderUsername: string) => {
  return await instance.post("/votes/part-leader", { partLeaderUsername });
};
