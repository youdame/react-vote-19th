import PageTemplate from "@/components/common/PageTemplate";
import ResultPageTemplate from "@/components/common/ResultPageTemplate";

const tempData = [
  {
    name: "Azito",
    voteCount: 10,
  },
  {
    name: "BeatBuddy",
    voteCount: 9,
  },
  {
    name: "CoupleLog",
    voteCount: 7,
  },
  {
    name: "PetPlate",
    voteCount: 5,
  },
  {
    name: "TIG",
    voteCount: 4,
  },
];

function DemoDayResultPage() {
  return (
    <PageTemplate voteTitle="데모데이 투표 결과">
      <ResultPageTemplate data={tempData} variant="team" />
    </PageTemplate>
  );
}

export default DemoDayResultPage;
