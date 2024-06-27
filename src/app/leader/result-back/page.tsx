"use client";
import { getBackVoteResult } from "@/api/leader";
import PageTemplate from "@/components/common/PageTemplate";
import ResultPageTemplate from "@/components/common/ResultPageTemplate";
import { useQuery } from "@tanstack/react-query";

function ResultBackPage() {
  const { data: resultData } = useQuery({
    queryKey: ["backResults"],
    queryFn: () => getBackVoteResult(),
  });

  const backData = resultData?.slice(0, 10);

  return (
    <PageTemplate voteTitle="BE 파트장 투표 결과">
      <ResultPageTemplate data={backData ?? []} variant="leader" />
    </PageTemplate>
  );
}

export default ResultBackPage;
