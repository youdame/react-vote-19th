import Link from "next/link";
import PageTemplate from "@/components/common/PageTemplate";
import GenSelectBtn from "@/components/common/GenSelectBtn";

/* TODO : API 연결
1. 임시 변수
*/
const isVoteDone = false; // 임시 변수

function DemoDayPage() {
  return (
    <PageTemplate voteTitle="데모데이 투표">
      <div className="flex-column gap-25pxr pt-100pxr">
        {isVoteDone ? (
          <GenSelectBtn variant="disabled">투표하기</GenSelectBtn>
        ) : (
          <Link href="/demo-day/vote">
            <GenSelectBtn>투표하기</GenSelectBtn>
          </Link>
        )}
        <Link href="/demo-day/result">
          <GenSelectBtn>결과보기</GenSelectBtn>
        </Link>
      </div>
    </PageTemplate>
  );
}

export default DemoDayPage;
