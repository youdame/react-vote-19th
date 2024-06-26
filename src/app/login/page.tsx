"use client";
import Button from "@/components/common/Button";
import CheckBox from "@/components/common/CheckBox";

import { FieldValues, useForm, useWatch } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { postSignIn, PostSignInReq } from "@/api/auth";
import { DevTool } from "@hookform/devtools";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import Input from "@/components/common/Input";

function LoginPage() {
  const method = useForm<FieldValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const {
    control,
    formState: { isValid },
    handleSubmit,
    setError,
  } = method;

  const watchPasswordVisibleCheckBox = useWatch({ name: "passwordVisibleCheckBox", control });

  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: (data: PostSignInReq) => postSignIn(data),
    onSuccess: () => {
      toast.success("로그인이 완료되었습니다.");
      router.push("/");
    },
    onError: (e) => {
      if (e instanceof AxiosError) {
        if (e.response?.status === 401) {
          setError("password", {
            type: "validate",
            message: "비밀번호가 틀렸습니다.",
          });
        }
      }
    },
  });

  const handleOnSubmit = async (data: FieldValues) => {
    const userData: PostSignInReq = {
      username: data.username,
      password: data.password,
    };

    loginMutation.mutate(userData);
  };

  return (
    <main className="flex min-h-screen justify-center">
      <form onSubmit={handleSubmit(handleOnSubmit)} className="flex-center w-full bg-blue-base">
        <div className="flex-center flex-column min-h-520pxr w-800pxr gap-20pxr rounded-24pxr bg-white">
          <Input control={control} name="username" label="아이디" placeholder="아이디를 입력하세요." type="text" />
          <Input
            control={control}
            name="password"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요."
            type={watchPasswordVisibleCheckBox ? "text" : "password"}
          />
          <div className="ml-70pxr flex self-start">
            <CheckBox control={control} name="passwordVisibleCheckBox" text="비밀번호 표시" />
          </div>
          <div className="mt-10pxr">
            <Button disabled={!isValid || loginMutation.isPending}>
              {loginMutation.isPending ? "로그인 중..." : "로그인"}
            </Button>
          </div>
          <div className="flex gap-7pxr">
            <p>회원이 아니신가요?</p>
            <Link href="/sign-up" className="text-blue-base underline underline-offset-2">
              회원가입 하기
            </Link>
          </div>
        </div>
      </form>
      <DevTool control={control} />
    </main>
  );
}

export default LoginPage;
