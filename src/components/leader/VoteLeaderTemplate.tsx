import LeaderBtn from "@/components/leader/LeaderBtn";

interface LeaderData {
  id: number;
  team: string;
  name: string;
}

interface VoteLeaderTemplateProps {
  data: LeaderData[];
}

const VoteLeaderTemplate = ({ data }: VoteLeaderTemplateProps) => {
  return (
    <div className="grid grid-cols-4 gap-30pxr py-30pxr">
      {data.map((element) => (
        <LeaderBtn key={element.id} team={element.team} name={element.name} />
      ))}
    </div>
  );
};

export default VoteLeaderTemplate;
