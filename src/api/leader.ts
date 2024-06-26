import { instance } from "@/api/axiosInstance";

interface GetUserRes {
  id: number;
  username: string;
  email: string;
  name: string;
  part: string;
  teamName: string;
}

interface GetLeaderVoteResultRes {
  name: string;
  voteCount: number;
}

export const getUsers = async (): Promise<GetUserRes[]> => {
  return await instance.get("/users");
};

export const postLeaderVote = async (partLeaderUsername: string) => {
  return await instance.post("/votes/part-leader", { partLeaderUsername });
};

export const getFrontVoteResult = async (): Promise<GetLeaderVoteResultRes[]> => {
  return await instance.get("/votes/part-leader/result?part=FRONT_END ");
};

export const getBackVoteResult = async (): Promise<GetLeaderVoteResultRes[]> => {
  return await instance.get("/votes/part-leader/result?part=BACK_END ");
};
