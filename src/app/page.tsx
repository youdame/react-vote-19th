import Link from "next/link";
import PageTemplate from "@/components/common/PageTemplate";
import BigSelectBtn from "@/components/common/BigSelectBtn";

export default function Home() {
  return (
    <PageTemplate voteTitle="파트장 / 데모데이 투표">
      <div className="flex gap-100pxr pt-70pxr">
        <Link href="/leader">
          <BigSelectBtn btnTexts={["파트장 투표", "바로가기"]} />
        </Link>
        <Link href="/demo-day">
          <BigSelectBtn btnTexts={["데모데이 투표", "바로가기"]} />
        </Link>
      </div>
    </PageTemplate>
  );
}
