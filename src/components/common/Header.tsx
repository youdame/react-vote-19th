"use client";
import { cva } from "class-variance-authority";
import { usePathname } from "next/navigation";
import Logo from "#/images/ceos-logo.svg";

// TODO : 임시 변수 및 로그인 시 유저명 렌더링 수정
const isUser = true; // 임시 변수 (로그인 여부)

const Header = () => {
  const path = usePathname();
  if (path === "/login" || path === "/sign-up") return null;

  return (
    <nav className="top-0pxr inset-x-0pxr fixed z-50 flex h-100pxr w-full items-center bg-white px-40pxr pt-40pxr">
      <Logo />
      <div className="flex-center ml-auto flex gap-15pxr">
        {isUser ? (
          <>
            <div>Azito FE 이나현</div>
            <button className={ButtonVariants()}>로그아웃</button>
          </>
        ) : (
          <>
            <button className={ButtonVariants()}>로그인</button>
            <button className={ButtonVariants({ bgColor: "blue", textColor: "white" })}>회원가입</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;

const ButtonVariants = cva(`border border-blue-base rounded-20pxr flex-center px-13pxr py-7pxr`, {
  variants: {
    bgColor: {
      default: "bg-white",
      blue: "bg-blue-base",
    },
    textColor: {
      default: "text-black",
      white: "text-white",
    },
  },
  defaultVariants: {
    bgColor: "default",
    textColor: "default",
  },
});
