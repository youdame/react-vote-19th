import { instance } from "@/api/axiosInstance";

export const postTeamVote = async (teamName: string) => {
  return await instance.post("/votes/demoday", { teamName });
};
