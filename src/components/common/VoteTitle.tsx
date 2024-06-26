interface VoteTitleProps {
  children: React.ReactNode;
}

const VoteTitle = ({ children }: VoteTitleProps) => {
  return <h2 className="pt-180pxr text-30pxr font-bold text-blue-base">{children}</h2>;
};

export default VoteTitle;
