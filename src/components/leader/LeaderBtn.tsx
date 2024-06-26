import CandBtnTemplate from "@/components/common/CandBtnTemplate";

interface LeaderBtnProps {
  team: string;
  name: string;
}

const LeaderBtn = ({ team, name }: LeaderBtnProps) => {
  return (
    <CandBtnTemplate variant="leader">
      <h3 className="text-13pxr">{team}</h3>
      <h2 className="text-20pxr font-bold">{name}</h2>
    </CandBtnTemplate>
  );
};

export default LeaderBtn;
