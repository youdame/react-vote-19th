import BigSelectBtn from "@/components/common/BigSelectBtn";
import VoteTitle from "@/components/common/VoteTitle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-center flex-column pt-70pxr">
      <VoteTitle>파트장 / 데모데이 투표</VoteTitle>
      <div className="flex gap-100pxr pt-70pxr">
        <Link href="/leader">
          <BigSelectBtn btnTexts={["파트장 투표", "바로가기"]} />
        </Link>
        <Link href="/demo-day">
          <BigSelectBtn btnTexts={["데모데이 투표", "바로가기"]} />
        </Link>
      </div>
    </main>
  );
}
