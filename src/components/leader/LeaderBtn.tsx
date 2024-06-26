"use client";
import { usePathname } from "next/navigation";
import { useAtom } from "jotai";
import { frontAtom, backAtom } from "@/store/store";
import CandBtnTemplate from "@/components/common/CandBtnTemplate";

interface LeaderBtnProps {
  team: string;
  name: string;
}

const LeaderBtn = ({ team, name }: LeaderBtnProps) => {
  // 코드 비효율 고민
  const [frontValue, setFrontValue] = useAtom(frontAtom);
  const [backValue, setBackValue] = useAtom(backAtom);

  const path = usePathname();
  const isFront = () => {
    if (path === "/leader/vote-front") {
      return true;
    } else if (path === "/leader/vote-back") {
      return false;
    }
  };

  // TODO
  const handleClick = () => {
    isFront() ? setFrontValue(name) : setBackValue(name);
  };

  return (
    <CandBtnTemplate
      sizeVariant="leader"
      clickVariant={isFront() ? frontValue === name : backValue === name}
      onClick={handleClick}
    >
      <h3 className="text-13pxr">{team}</h3>
      <h2 className="text-20pxr font-bold">{name}</h2>
    </CandBtnTemplate>
  );
};

export default LeaderBtn;
