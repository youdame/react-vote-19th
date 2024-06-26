import { cva } from "class-variance-authority";

interface CandBtnTemplateProps {
  variant: "leader" | "team";
  children: React.ReactNode;
}

const CandBtnTemplate = ({ variant, children }: CandBtnTemplateProps) => {
  return <button className={SizeVariants({ variant })}>{children}</button>;
};

export default CandBtnTemplate;

const SizeVariants = cva(
  `flex-column flex-center gap-5pxr rounded-15pxr border-2 border-blue-base bg-white text-blue-base hover:bg-blue-base hover:text-white px-7pxr`,
  {
    variants: {
      variant: {
        leader: "h-70pxr w-117pxr",
        team: "h-70pxr w-200pxr",
      },
    },
  },
);
