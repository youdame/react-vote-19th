import { cva } from "class-variance-authority";

interface GenSelectBtnProps {
  children: string;
  variant?: "default" | "disabled";
}

const GenSelectBtn = ({ children, variant }: GenSelectBtnProps) => {
  return (
    <button className={BackVariants({ variant })}>
      <h3>{children}</h3>
    </button>
  );
};

export default GenSelectBtn;

const BackVariants = cva(`h-45pxr w-150pxr text-white rounded-15pxr`, {
  variants: {
    variant: {
      default: "bg-blue-base",
      disabled: "bg-blue-disabled cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
