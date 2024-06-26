import CandBtnTemplate from "@/components/common/CandBtnTemplate";

interface TeamBtnProps {
  team: string;
  description: string;
}
const TeamBtn = ({ team, description }: TeamBtnProps) => {
  return (
    <CandBtnTemplate variant="team">
      <h2 className="text-20pxr font-bold">{team}</h2>
      <h3 className="text-11pxr">{description}</h3>
    </CandBtnTemplate>
  );
};

export default TeamBtn;
