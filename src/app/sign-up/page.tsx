"use client";
import Button from "@/components/common/Button";
import CheckBox from "@/components/common/CheckBox";
import Input from "@/components/common/Input";
import SelectInput from "@/components/common/SelectInput";
import { ERROR_PASSWORD_SECOND_EMPTY } from "@/constants/validation";
import Link from "next/link";

import { useEffect } from "react";
import { FieldValues, useForm, useWatch } from "react-hook-form";

export const teamOptions = [
  { value: "AZITO" },
  { value: "BEATBUDDY" },
  { value: "PETPLATE" },
  { value: "COUPLELOG" },
  { value: "TIG" },
];

export const partOptions = [{ value: "FRONTEND" }, { value: "BACKEND" }];

function SignupPage() {
  const method = useForm<FieldValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const {
    control,
    setError,
    clearErrors,
    getValues,
    formState: { isValid },
  } = method;

  const watchPassword = useWatch({ name: "password", control });
  const watchPasswordCheck = useWatch({ name: "passwordCheck", control });
  const watchPasswordVisibleCheckBox = useWatch({ name: "passwordVisibleCheckBox", control });

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
      <div className="flex-column min-h-800pxr w-800pxr gap-20pxr rounded-3xl bg-white px-60pxr py-30pxr">
        <Input control={control} name="name" label="이름" placeholder="이름을 입력하세요." type="text" />
        <Input control={control} name="email" label="이메일" placeholder="이메일을 입력하세요." type="text" />
        <Input control={control} name="username" label="아이디" placeholder="아이디를 입력하세요." type="text" />
        <Input
          control={control}
          name="password"
          label="비밀번호"
          placeholder="영문자와 숫자 포함 8자 이상 입력하세요."
          type={watchPasswordVisibleCheckBox ? "text" : "password"}
        />
        <Input
          control={control}
          name="passwordCheck"
          label="비밀번호 확인"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          type={watchPasswordVisibleCheckBox ? "text" : "password"}
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
        <CheckBox control={control} name="passwordVisibleCheckBox" text="비밀번호 표시" />
        <div className="flex-column items-center justify-center gap-20pxr">
          <label className="flex self-start text-20pxr">팀 이름 / 파트 </label>
          <div className="flex w-600pxr justify-between">
            {/* <select>
              <option className="text-white" value="" selected hidden>
                팀 선택하기
              </option>
              <option className="bg-white">AZITO</option>
              <option>BEATBUDDY</option>
              <option>PETPLATE</option>
              <option>COUPLELOG</option>
              <option>TIG</option>
            </select> */}
            <SelectInput control={control} name="teamName" options={teamOptions} placeholder="팀 선택하기" />
            {/* <select>
              <option className="text-white" value="" selected hidden>
                파트 선택하기
              </option>
              <option>FRONTEND</option>
              <option>BACKEND</option>
            </select> */}
            <SelectInput control={control} name="part" options={partOptions} placeholder="파트 선택하기" />
          </div>
        </div>
        <div className="flex-center mt-10pxr">
          <Button disabled={!isValid}>회원가입</Button>
        </div>
        <div className="flex justify-center gap-7pxr">
          <p>이미 회원이신가요?</p>
          <Link href="/login" className="text-blue-base underline underline-offset-2">
            로그인 하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
