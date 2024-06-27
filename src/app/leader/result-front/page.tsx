"use client";
import { getFrontVoteResult } from "@/api/leader";
import PageTemplate from "@/components/common/PageTemplate";
import ResultPageTemplate from "@/components/common/ResultPageTemplate";
import { useQuery } from "@tanstack/react-query";

function ResultFrontPage() {
  const { data: resultData } = useQuery({
    queryKey: ["frontResults"],
    queryFn: () => getFrontVoteResult(),
  });

  const frontData = resultData?.slice(0, 10);

  return (
    <PageTemplate voteTitle="FE 파트장 투표 결과">
      <ResultPageTemplate data={frontData ?? []} variant="leader" />
    </PageTemplate>
  );
}

export default ResultFrontPage;
