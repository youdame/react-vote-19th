import backData from "@/data/backData.json";

import PageTemplate from "@/components/common/PageTemplate";
import VoteLeaderTemplate from "@/components/leader/VoteLeaderTemplate";

function VoteBackPage() {
  return (
    <PageTemplate voteTitle="BE 파트장 투표">
      <VoteLeaderTemplate data={backData} />
    </PageTemplate>
  );
}

export default VoteBackPage;
