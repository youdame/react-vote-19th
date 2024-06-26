import frontData from "@/data/frontData.json";

import PageTemplate from "@/components/common/PageTemplate";
import VoteLeaderTemplate from "@/components/leader/VoteLeaderTemplate";

function VoteFrontPage() {
  return (
    <PageTemplate voteTitle="FE 파트장 투표">
      <VoteLeaderTemplate data={frontData} />
    </PageTemplate>
  );
}

export default VoteFrontPage;
