"use client";
import Input from "@/components/common/Input";
import { FieldValues, useForm } from "react-hook-form";

function SignupPage() {
  const method = useForm<FieldValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  const { control } = method;
  return (
    <div className="flex-center w-full bg-blue-base">
      <div className="h-850pxr w-800pxr rounded-3xl bg-white px-60pxr py-30pxr">
        <Input control={control} name="name" label="이름" placeholder="이름을 입력하세요." type="text" />
      </div>
    </div>
  );
}

export default SignupPage;
