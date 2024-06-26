"use client";
import { getFrontVoteResult } from "@/api/leader";
import PageTemplate from "@/components/common/PageTemplate";
import ResultPageTemplate from "@/components/common/ResultPageTemplate";
import { useQuery } from "@tanstack/react-query";

function ResultFrontPage() {
  const { data: resultData } = useQuery({
    queryKey: ["results"],
    queryFn: () => getFrontVoteResult(),
  });

  return (
    <PageTemplate voteTitle="FE 파트장 투표 결과">
      <ResultPageTemplate data={resultData ?? []} variant="leader" />
    </PageTemplate>
  );
}

export default ResultFrontPage;
