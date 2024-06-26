"use client";
import { cva } from "class-variance-authority";

import { useRouter } from "next/navigation";
import GenSelectBtn from "./GenSelectBtn";
import RankItem from "./RankItem";

interface DataType {
  name: string;
  voteCount: number;
}

interface ResultPageTemplateProps {
  data: DataType[];
  variant: "leader" | "team";
}

const ResultPageTemplate = ({ data, variant }: ResultPageTemplateProps) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="flex-column flex-center gap-50pxr pt-30pxr">
      <div className={GridVariants({ variant })}>
        {data.map((element, index) => (
          <RankItem key={index} rank={index + 1} name={element.name} voteCount={element.voteCount} variant={variant} />
        ))}
      </div>
      <GenSelectBtn onClick={goBack}>돌아가기</GenSelectBtn>
    </div>
  );
};

export default ResultPageTemplate;

const GridVariants = cva(`grid gap-y-10pxr`, {
  variants: {
    variant: {
      leader: "grid-leader-result gap-x-25pxr",
      team: "",
    },
  },
});
