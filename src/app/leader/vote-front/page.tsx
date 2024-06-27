"use client";
import { useAtom } from "jotai";
import { frontAtom } from "@/store/store";

import Link from "next/link";

import PageTemplate from "@/components/common/PageTemplate";
import VoteLeaderTemplate from "@/components/leader/VoteLeaderTemplate";
import GenSelectBtn from "@/components/common/GenSelectBtn";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUsers, postLeaderVote } from "@/api/leader";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

function VoteFrontPage() {
  const [frontValue, setFrontValue] = useAtom(frontAtom);

  const router = useRouter();

  const { data: userData } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  const frontData = userData
    ?.slice(0, 20)
    .filter((item) => item.part === "프론트엔드")
    .map((item) => {
      return { id: item.id, team: item.teamName, name: item.name, username: item.username };
    });

  const frontVoteMutation = useMutation({
    mutationFn: (partLeaderUsername: string) => postLeaderVote(partLeaderUsername),
    onSuccess: () => {
      toast.success("투표 완료!");
      router.push("/leader/vote-front");
    },
    onError: (e) => {
      if (e instanceof AxiosError) {
        if (e.response?.status == 400) {
          toast.error(e.response?.data.message);
        }
        if (e.response?.status == 401) {
          toast.error("로그인이 필요합니다.");
          router.push("/login");
        }
      }
    },
  });

  const handleVoteClick = () => {
    if (!frontValue) return;
    frontVoteMutation.mutate(frontValue);
  };

  return (
    <PageTemplate voteTitle="FE 파트장 투표">
      <VoteLeaderTemplate data={frontData ?? []} />
      <div className="flex gap-10pxr pt-40pxr">
        <GenSelectBtn onClick={handleVoteClick} variant={frontValue ? undefined : "disabled"}>
          투표하기
        </GenSelectBtn>
        <Link href="/leader/result-front">
          <GenSelectBtn>결과보기</GenSelectBtn>
        </Link>
      </div>
    </PageTemplate>
  );
}

export default VoteFrontPage;
