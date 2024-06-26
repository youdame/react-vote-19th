import Link from "next/link";
import PageTemplate from "@/components/common/PageTemplate";
import GenSelectBtn from "@/components/common/GenSelectBtn";

function DemoDayPage() {
  return (
    <PageTemplate voteTitle="데모데이 투표">
      <div className="flex-column gap-25pxr pt-100pxr">
        <Link href="/demo-day/vote">
          <GenSelectBtn>투표하기</GenSelectBtn>
        </Link>
        <Link href="/demo-day/result">
          <GenSelectBtn>결과보기</GenSelectBtn>
        </Link>
      </div>
    </PageTemplate>
  );
}

export default DemoDayPage;
