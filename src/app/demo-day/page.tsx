import GenSelectBtn from "@/components/common/GenSelectBtn";
import VoteTitle from "@/components/common/VoteTitle";
import Link from "next/link";

/* TODO : API 연결
1. 임시 변수
*/
const isVoteDone = true; // 임시 변수

function DemoDayPage() {
  return (
    <main className="flex-center flex-column">
      <VoteTitle>데모데이 투표</VoteTitle>
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
    </main>
  );
}

export default DemoDayPage;
