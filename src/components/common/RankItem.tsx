import { cva } from "class-variance-authority";

interface RankItemProps {
  rank: number;
  name: string;
  voteCount: number;
  variant: "leader" | "team";
}

const RankItem = ({ rank, name, voteCount, variant }: RankItemProps) => {
  return (
    <div className={BoxVariants({ variant })}>
      <div className="flex-center h-30pxr w-30pxr rounded-5pxr bg-blue-base text-white">{rank}</div>
      <h2 className="text-20pxr font-bold">{name}</h2>
      <h3 className="ml-auto text-20pxr font-bold text-blue-base">{voteCount}</h3>
    </div>
  );
};

export default RankItem;

const BoxVariants = cva(`flex-center flex gap-10pxr rounded-15pxr border-2 border-blue-base px-10pxr`, {
  variants: {
    variant: {
      leader: "h-50pxr w-200pxr",
      team: "h-50pxr w-250pxr",
    },
  },
});
