"use client";
import Input from "@/components/common/Input";
import { ERROR_PASSWORD_SECOND_EMPTY } from "@/constants/validation";

import { useEffect } from "react";
import { FieldValues, useForm, useWatch } from "react-hook-form";

function SignupPage() {
  const method = useForm<FieldValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const { control, setError, clearErrors, getValues } = method;

  const watchPassword = useWatch({ name: "password", control });
  const watchPasswordCheck = useWatch({ name: "passwordCheck", control });

  useEffect(() => {
    if (watchPassword !== watchPasswordCheck && watchPasswordCheck) {
      setError("passwordCheck", {
        type: "password-mismatch",
        message: "비밀번호가 일치하지 않습니다",
      });
    } else {
      clearErrors("passwordCheck");
    }
  }, [watchPassword, watchPasswordCheck, setError, clearErrors]);

  return (
    <div className="flex-center w-full bg-blue-base">
      <div className="flex-column h-850pxr w-800pxr gap-20pxr rounded-3xl bg-white px-60pxr py-30pxr">
        <Input control={control} name="name" label="이름" placeholder="이름을 입력하세요." type="text" />
        <Input control={control} name="email" label="이메일" placeholder="이메일을 입력하세요." type="text" />
        <Input control={control} name="username" label="아이디" placeholder="아이디를 입력하세요." type="text" />
        <Input
          control={control}
          name="password"
          label="비밀번호"
          placeholder="영문자와 숫자 포함 8자 이상 입력하세요."
          type="text"
        />
        <Input
          control={control}
          name="passwordCheck"
          label="비밀번호 확인"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          type="text"
          rules={{
            required: ERROR_PASSWORD_SECOND_EMPTY,
            validate: {
              matchPassword: (value) => {
                const { password } = getValues();
                return password === value || "비밀번호가 일치하지 않습니다";
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default SignupPage;
