import { instance } from "@/api/axiosInstance";

interface GetTeamVoteResultRes {
  name: string;
  voteCount: number;
}

export const postTeamVote = async (teamName: string) => {
  return await instance.post("/votes/demoday", { teamName });
};

export const getTeamVoteResult = async (): Promise<GetTeamVoteResultRes[]> => {
  return await instance.get("votes/demoday/result");
};
