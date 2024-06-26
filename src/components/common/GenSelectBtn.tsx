import { cva } from "class-variance-authority";

interface GenSelectBtnProps {
  children: string;
  variant?: "default" | "disabled";
}

const GenSelectBtn = ({ children, variant }: GenSelectBtnProps) => {
  return (
    <button className={BackVariants({ variant })}>
      <h3 className={TextVariants({ variant })}>{children}</h3>
    </button>
  );
};

export default GenSelectBtn;

const BackVariants = cva(`h-45pxr w-150pxr text-white rounded-15pxr`, {
  variants: {
    variant: {
      default: "bg-blue-base",
      disabled: "bg-gray-400 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const TextVariants = cva(``, {
  variants: {
    variant: {
      default: "text-white",
      disabled: "text-gray-300",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
