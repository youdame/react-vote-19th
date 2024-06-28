"use client";
import { cva } from "class-variance-authority";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "#/images/ceos-logo.svg";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@/api/auth";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { isLoggedInAtom } from "@/store/store";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  const {
    data: userData,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
    enabled: !!localStorage.getItem("accessToken"),
  });

  useEffect(() => {
    if (isSuccess) {
      setIsLoggedIn(true);
    } else if (isError) {
      setIsLoggedIn(false);
    }
  }, [isSuccess, isError]);

  const path = usePathname();
  if (path === "/login" || path === "/sign-up") return null;

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return (
    <nav className="top-0pxr inset-x-0pxr fixed z-50 flex h-100pxr w-full items-center bg-white px-40pxr pt-40pxr">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex-center ml-auto flex gap-15pxr">
        {isLoading && <span>로딩 중 ...</span>}
        {!isLoading && !isLoggedIn && (
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
        {!isLoading && isLoggedIn && (
          <>
            <div>
              {userData?.teamName} {userData?.part} {userData?.name}
            </div>
            <button onClick={handleLogout} className={`${BackVariants()} ${TextVariants()}`}>
              로그아웃
            </button>
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
