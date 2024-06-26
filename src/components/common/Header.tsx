"use client";
import { cva } from "class-variance-authority";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "#/images/ceos-logo.svg";

/* TODO : API 연결
1. 임시 변수
2. 로그인 상태면 로그인한 유저명 렌더링
3. 로그아웃 버튼 클릭 시 로그아웃
*/
const isUser = false; // 임시 변수 (로그인 여부)

const Header = () => {
  const path = usePathname();
  if (path === "/login" || path === "/sign-up") return null;

  return (
    <nav className="top-0pxr inset-x-0pxr fixed z-50 flex h-100pxr w-full items-center bg-white px-40pxr pt-40pxr">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex-center ml-auto flex gap-15pxr">
        {isUser ? (
          <>
            <div>Azito FE 이나현</div>
            <button className={`${BackVariants()} ${TextVariants()}`}>로그아웃</button>
          </>
        ) : (
          <>
            <Link href="/login">
              <button className={`${BackVariants()} ${TextVariants()}`}>로그인</button>
            </Link>
            <Link href="/sign-up">
              <button className={`${BackVariants({ variant: "blue" })} ${TextVariants({ variant: "white" })}`}>
                회원가입
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;

const BackVariants = cva(`border border-blue-base rounded-20pxr flex-center px-13pxr py-7pxr`, {
  variants: {
    variant: {
      default: "bg-white",
      blue: "bg-blue-base",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const TextVariants = cva(``, {
  variants: {
    variant: {
      default: "text-black",
      white: "text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
