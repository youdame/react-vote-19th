import PageTemplate from "@/components/common/PageTemplate";
import ResultPageTemplate from "@/components/common/ResultPageTemplate";

const tempData = [
  {
    name: "이나현1",
    voteCount: 10,
  },
  {
    name: "이나현3",
    voteCount: 9,
  },
  {
    name: "이나현2",
    voteCount: 7,
  },
  {
    name: "이나현4",
    voteCount: 5,
  },
  {
    name: "이나현5",
    voteCount: 4,
  },
  {
    name: "이나현6",
    voteCount: 3,
  },
  {
    name: "이나현7",
    voteCount: 2,
  },
  {
    name: "이나현8",
    voteCount: 1,
  },
  {
    name: "이나현9",
    voteCount: 0,
  },
  {
    name: "이나현10",
    voteCount: 0,
  },
];

function ResultFrontPage() {
  return (
    <PageTemplate voteTitle="FE 파트장 투표 결과">
      <ResultPageTemplate data={tempData} variant="leader" />
    </PageTemplate>
  );
}

export default ResultFrontPage;
