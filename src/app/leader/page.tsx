import Link from "next/link";
import PageTemplate from "@/components/common/PageTemplate";
import BigSelectBtn from "@/components/common/BigSelectBtn";
import GenSelectBtn from "@/components/common/GenSelectBtn";

function LeaderPage() {
  return (
    <PageTemplate voteTitle="파트장 투표">
      <div className="flex gap-100pxr pt-70pxr">
        <div className="flex-column flex-center gap-20pxr">
          <Link href="/leader/vote-front">
            <BigSelectBtn btnTexts={["FRONT-END", "파트장 투표"]} />
          </Link>
          <Link href="/leader/result-front">
            <GenSelectBtn>결과보기</GenSelectBtn>
          </Link>
        </div>
        <div className="flex-column flex-center gap-20pxr">
          <Link href="/leader/vote-back">
            <BigSelectBtn btnTexts={["BACK-END", "파트장 투표"]} />
          </Link>
          <Link href="/leader/result-back">
            <GenSelectBtn>결과보기</GenSelectBtn>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
}

export default LeaderPage;
