"use client";
import { useAtom } from "jotai";
import { teamAtom } from "@/store/store";
import CandBtnTemplate from "@/components/common/CandBtnTemplate";

interface TeamBtnProps {
  team: string;
  description: string;
}
const TeamBtn = ({ team, description }: TeamBtnProps) => {
  const [teamValue, setTeamValue] = useAtom(teamAtom);

  const handleClick = () => {
    setTeamValue(team);
  };

  return (
    <CandBtnTemplate sizeVariant="team" clickVariant={teamValue === team} onClick={handleClick}>
      <h2 className="text-20pxr font-bold">{team}</h2>
      <h3 className="text-11pxr">{description}</h3>
    </CandBtnTemplate>
  );
};

export default TeamBtn;
