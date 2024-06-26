import { cva } from "class-variance-authority";

interface BigSelectBtnProps {
  btnTexts: string[];
  variant?: "default" | "disabled";
}

const BigSelectBtn = ({ btnTexts, variant }: BigSelectBtnProps) => {
  return (
    <button className={`${BackVariants({ variant })} ${BorderVariants({ variant })}`}>
      <div className={TextVariants({ variant })}>
        {btnTexts.map((btnText, index) => (
          <h3 key={index}>{btnText}</h3>
        ))}
      </div>
    </button>
  );
};

export default BigSelectBtn;

const BackVariants = cva(`h-215pxr w-200pxr`, {
  variants: {
    variant: {
      default: "bg-white hover:bg-blue-base",
      disabled: "bg-gray-400 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const BorderVariants = cva(`border-2 rounded-20pxr`, {
  variants: {
    variant: {
      default: "border-blue-base",
      disabled: "border-none",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const TextVariants = cva(`flex-center flex-column h-full gap-10pxr text-25pxr font-semibold`, {
  variants: {
    variant: {
      default: "text-blue-base hover:text-white",
      disabled: "text-gray-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
