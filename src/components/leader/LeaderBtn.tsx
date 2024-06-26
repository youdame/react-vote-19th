"use client";
import { usePathname } from "next/navigation";
import { useAtom } from "jotai";
import { frontAtom, backAtom } from "@/store/store";
import CandBtnTemplate from "@/components/common/CandBtnTemplate";

interface LeaderBtnProps {
  team: string;
  name: string;
  username: string;
}

const LeaderBtn = ({ team, name, username }: LeaderBtnProps) => {
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

  const handleClick = () => {
    isFront() ? setFrontValue(username) : setBackValue(username);
  };

  return (
    <CandBtnTemplate
      sizeVariant="leader"
      clickVariant={isFront() ? frontValue === username : backValue === username}
      onClick={handleClick}
    >
      <h3 className="text-13pxr">{team}</h3>
      <h2 className="text-20pxr font-bold">{name}</h2>
    </CandBtnTemplate>
  );
};

export default LeaderBtn;
