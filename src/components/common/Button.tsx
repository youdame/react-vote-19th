import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

export default function Button({ disabled = false, ...attribute }: ButtonProps) {
  return (
    <button
      {...attribute}
      className={`h-60pxr w-180pxr rounded-xl text-20pxr text-white ${disabled ? "bg-gray-400" : "bg-blue-base"}`}
    ></button>
  );
}
