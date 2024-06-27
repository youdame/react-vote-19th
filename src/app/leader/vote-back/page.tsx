"use client";
import { useAtom } from "jotai";
import { backAtom } from "@/store/store";

import Link from "next/link";

import PageTemplate from "@/components/common/PageTemplate";
import VoteLeaderTemplate from "@/components/leader/VoteLeaderTemplate";
import GenSelectBtn from "@/components/common/GenSelectBtn";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUsers, postLeaderVote } from "@/api/leader";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

function VoteBackPage() {
  const [backValue, setBackValue] = useAtom(backAtom);

  const router = useRouter();

  const { data: userData } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  const backData = userData
    ?.slice(0, 20)
    .filter((item) => item.part === "백엔드")
    .map((item) => {
      return { id: item.id, team: item.teamName, name: item.name, username: item.username };
    });

  const backVoteMutation = useMutation({
    mutationFn: (partLeaderUsername: string) => postLeaderVote(partLeaderUsername),
    onSuccess: () => {
      toast.success("투표 완료!");
      router.push("/leader/vote-back");
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
    if (!backValue) return;
    backVoteMutation.mutate(backValue);
  };

  return (
    <PageTemplate voteTitle="BE 파트장 투표">
      <VoteLeaderTemplate data={backData ?? []} />
      <div className="flex gap-10pxr pt-40pxr">
        <GenSelectBtn onClick={handleVoteClick} variant={backValue ? undefined : "disabled"}>
          투표하기
        </GenSelectBtn>
        <Link href="/leader/result-back">
          <GenSelectBtn>결과보기</GenSelectBtn>
        </Link>
      </div>
    </PageTemplate>
  );
}

export default VoteBackPage;
