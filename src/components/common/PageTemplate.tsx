import VoteTitle from "@/components/common/VoteTitle";

interface PageTemplateProps {
  voteTitle: string;
  children: React.ReactNode;
}

const PageTemplate = ({ voteTitle, children }: PageTemplateProps) => {
  return (
    <main className="flex-center flex-column">
      <VoteTitle>{voteTitle}</VoteTitle>
      {children}
    </main>
  );
};

export default PageTemplate;
