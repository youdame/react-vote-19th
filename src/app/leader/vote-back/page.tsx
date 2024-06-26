"use client";
import { useAtom } from "jotai";
import { backAtom } from "@/store/store";

import Link from "next/link";
import backData from "@/data/backData.json";

import PageTemplate from "@/components/common/PageTemplate";
import VoteLeaderTemplate from "@/components/leader/VoteLeaderTemplate";
import GenSelectBtn from "@/components/common/GenSelectBtn";

/* TODO : API 연결
1. backData
2. handleVoteClick
*/

function VoteBackPage() {
  const [backValue, setBackValue] = useAtom(backAtom);

  const handleVoteClick = () => {
    // API 연결
    console.log(backValue);
  };

  return (
    <PageTemplate voteTitle="BE 파트장 투표">
      <VoteLeaderTemplate data={backData} />
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
