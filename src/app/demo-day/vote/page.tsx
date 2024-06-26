"use client";
import { useAtom } from "jotai";
import { teamAtom } from "@/store/store";

import Link from "next/link";
import temaData from "@/data/teamData.json";
import teamNameDB from "@/constants/teamNameDB";

import PageTemplate from "@/components/common/PageTemplate";
import TeamBtn from "@/components/demo-day/TeamBtn";
import GenSelectBtn from "@/components/common/GenSelectBtn";

function DemoDayVotePage() {
  const [teamValue, setTeamValue] = useAtom(teamAtom);

  const handleVoteClick = () => {
    // API 연결
    console.log(teamNameDB[teamValue]);
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
