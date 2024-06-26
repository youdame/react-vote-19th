"use client";
import { useAtom } from "jotai";
import { frontAtom } from "@/store/store";

import Link from "next/link";
import frontData from "@/data/frontData.json";

import PageTemplate from "@/components/common/PageTemplate";
import VoteLeaderTemplate from "@/components/leader/VoteLeaderTemplate";
import GenSelectBtn from "@/components/common/GenSelectBtn";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/leader";

/* TODO : API 연결
1. frontData
*/

function VoteFrontPage() {
  const [frontValue, setFrontValue] = useAtom(frontAtom);

  const handleVoteClick = () => {
    // API 연결
    console.log(frontValue);
  };

  const {
    data: userData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  // userData?.map((user)=>{
  //   user.
  // })

  return (
    <PageTemplate voteTitle="FE 파트장 투표">
      <VoteLeaderTemplate data={frontData} />
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
