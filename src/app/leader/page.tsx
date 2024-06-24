import Link from "next/link";
import BigSelectBtn from "@/components/common/BigSelectBtn";
import GenSelectBtn from "@/components/common/GenSelectBtn";
import VoteTitle from "@/components/common/VoteTitle";

/* TODO : API 연결
1. 임시 변수
*/
const isVoteFEDone = false; // 임시 변수
const isVoteBEDone = true; // 임시 변수

function LeaderPage() {
  return (
    <main className="flex-center flex-column">
      <VoteTitle>파트장 투표</VoteTitle>
      <div className="flex gap-100pxr pt-70pxr">
        <div className="flex-column flex-center gap-20pxr">
          {isVoteFEDone ? (
            <BigSelectBtn btnTexts={["FRONT-END", "파트장 투표"]} variant={"disabled"} />
          ) : (
            <Link href="/leader/vote-front">
              <BigSelectBtn btnTexts={["FRONT-END", "파트장 투표"]} />
            </Link>
          )}
          <Link href="/leader/result-front">
            <GenSelectBtn>결과보기</GenSelectBtn>
          </Link>
        </div>
        <div className="flex-column flex-center gap-20pxr">
          {isVoteBEDone ? (
            <>
              <BigSelectBtn btnTexts={["BACK-END", "파트장 투표"]} variant="disabled" />
              <Link href="/leader/result-back">
                <GenSelectBtn>결과보기</GenSelectBtn>
              </Link>
            </>
          ) : (
            <>
              <Link href="/leader/vote-back">
                <BigSelectBtn btnTexts={["BACK-END", "파트장 투표"]} />
              </Link>
              <GenSelectBtn variant="disabled">결과보기</GenSelectBtn>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default LeaderPage;
