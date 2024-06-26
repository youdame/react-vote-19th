"use client";
import { getBackVoteResult } from "@/api/leader";
import PageTemplate from "@/components/common/PageTemplate";
import ResultPageTemplate from "@/components/common/ResultPageTemplate";
import { useQuery } from "@tanstack/react-query";

function ResultBackPage() {
  const { data: resultData } = useQuery({
    queryKey: ["results"],
    queryFn: () => getBackVoteResult(),
  });

  return (
    <PageTemplate voteTitle="BE 파트장 투표 결과">
      <ResultPageTemplate data={resultData ?? []} variant="leader" />
    </PageTemplate>
  );
}

export default ResultBackPage;
