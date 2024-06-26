"use client";
import { useAtom } from "jotai";
import { teamAtom } from "@/store/store";

import Link from "next/link";
import temaData from "@/data/teamData.json";
import teamNameDB from "@/constants/teamNameDB";

import PageTemplate from "@/components/common/PageTemplate";
import TeamBtn from "@/components/demo-day/TeamBtn";
import GenSelectBtn from "@/components/common/GenSelectBtn";
import { useMutation } from "@tanstack/react-query";
import { postTeamVote } from "@/api/demo-day";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { error } from "console";

function DemoDayVotePage() {
  const [teamValue, setTeamValue] = useAtom(teamAtom);

  const router = useRouter();

  const teamVoteMutation = useMutation({
    mutationFn: (teamName: string) => postTeamVote(teamName),
    onSuccess: () => {
      toast.success("투표 완료!");
      router.push("/demo-day/result");
    },
    onError: (e) => {
      if (e instanceof AxiosError) {
        if (e.response?.status == 401) {
          toast.error("로그인이 필요합니다.");
          router.push("/login");
        }
        if (e.response?.status == 400) {
          toast.error(e.response?.data.message);
        }
      }
    },
  });

  const handleVoteClick = () => {
    if (!teamValue) return;
    teamVoteMutation.mutate(teamNameDB[teamValue]);
  };

  return (
    <PageTemplate voteTitle="데모데이 투표">
      <div className="grid grid-cols-3 gap-30pxr py-30pxr">
        {temaData.map((element) => (
          <TeamBtn key={element.id} team={element.team} description={element.description} />
        ))}
      </div>
      <div className="flex gap-10pxr pt-40pxr">
        <GenSelectBtn onClick={handleVoteClick} variant={teamValue ? undefined : "disabled"}>
          투표하기
        </GenSelectBtn>
        <Link href="/demo-day/result">
          <GenSelectBtn>결과보기</GenSelectBtn>
        </Link>
      </div>
    </PageTemplate>
  );
}

export default DemoDayVotePage;
