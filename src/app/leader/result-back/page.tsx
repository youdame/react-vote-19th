import PageTemplate from "@/components/common/PageTemplate";
import ResultPageTemplate from "@/components/common/ResultPageTemplate";

const tempData = [
  {
    name: "이도현1",
    voteCount: 10,
  },
  {
    name: "이도현3",
    voteCount: 9,
  },
  {
    name: "이도현2",
    voteCount: 7,
  },
  {
    name: "이도현4",
    voteCount: 5,
  },
  {
    name: "이도현5",
    voteCount: 4,
  },
  {
    name: "이도현6",
    voteCount: 3,
  },
  {
    name: "이도현7",
    voteCount: 2,
  },
  {
    name: "이도현8",
    voteCount: 1,
  },
  {
    name: "이도현9",
    voteCount: 0,
  },
  {
    name: "이도현10",
    voteCount: 0,
  },
];
function ResultBackPage() {
  return (
    <PageTemplate voteTitle="BE 파트장 투표 결과">
      <ResultPageTemplate data={tempData} variant="leader" />
    </PageTemplate>
  );
}

export default ResultBackPage;
