"use client";
import { getTeamVoteResult } from "@/api/demo-day";
import PageTemplate from "@/components/common/PageTemplate";
import ResultPageTemplate from "@/components/common/ResultPageTemplate";
import { useQuery } from "@tanstack/react-query";

function DemoDayResultPage() {
  const { data: resultData } = useQuery({
    queryKey: ["results"],
    queryFn: () => getTeamVoteResult(),
  });

  return (
    <PageTemplate voteTitle="데모데이 투표 결과">
      <ResultPageTemplate data={resultData ?? []} variant="team" />
    </PageTemplate>
  );
}

export default DemoDayResultPage;
