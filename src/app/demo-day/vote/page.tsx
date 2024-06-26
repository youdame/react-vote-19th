import temaData from "@/data/teamData.json";

import PageTemplate from "@/components/common/PageTemplate";
import TeamBtn from "@/components/demo-day/TeamBtn";

function DemoDayVotePage() {
  return (
    <PageTemplate voteTitle="데모데이 투표">
      <div className="grid grid-cols-3 gap-30pxr py-30pxr">
        {temaData.map((element) => (
          <TeamBtn key={element.id} team={element.team} description={element.description} />
        ))}
      </div>
    </PageTemplate>
  );
}

export default DemoDayVotePage;
