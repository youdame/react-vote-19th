import {
  EMAIL_STANDARD,
  ERROR_EMAIL_CHECK,
  ERROR_EMAIL_EMPTY,
  ERROR_PASSWORD_EMPTY,
  ERROR_PASSWORD_VALIDATION,
  ERROR_USERNAME_EMPTY,
  ERROR_USERNAME_VALIDATION,
  PASSWORD_STANDARD,
  USERNAME_STANDARD,
} from "@/constants/validation";

import { ERROR_NAME_EMPTY, ERROR_NAME_VALIDATION, NAME_STANDARD } from "@/constants/validation";
import { Control, FieldPath, FieldValues, RegisterOptions, useController } from "react-hook-form";

interface InputProps {
  type: "text" | "email" | "password";
  placeholder: string;
  label: string;
  control: Control<FieldValues>;
  name: FieldPath<FieldValues>;
  rules?: RegisterOptions;
}

export default function Input({ label, type, placeholder, control, name, rules }: InputProps) {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name, rules: rules ? rules : inputRules[name] });

  return (
    <div className="flex-column gap-15pxr">
      <label htmlFor={name} className="text-20pxr text-black">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        // onChange={field.onChange}
        // onBlur={field.onBlur}
        // value={field.value}
        // name={field.name}
        // ref={field.ref}
        {...field}
        className="h-60pxr w-660pxr rounded-12pxr border border-gray-400 px-15pxr py-18pxr focus:border-blue-700"
      />

      {error && <p className="text-red-600">{error.message}</p>}
    </div>
  );
}

export const inputRules: Record<FieldPath<FieldValues>, RegisterOptions> = {
  name: {
    required: ERROR_NAME_EMPTY,
    pattern: { value: NAME_STANDARD, message: ERROR_NAME_VALIDATION },
  },
  email: {
    required: ERROR_EMAIL_EMPTY,
    pattern: { value: EMAIL_STANDARD, message: ERROR_EMAIL_CHECK },
  },
  username: {
    required: ERROR_USERNAME_EMPTY,
    pattern: { value: USERNAME_STANDARD, message: ERROR_USERNAME_VALIDATION },
  },
  password: {
    required: ERROR_PASSWORD_EMPTY,
    pattern: { value: PASSWORD_STANDARD, message: ERROR_PASSWORD_VALIDATION },
  },
};
