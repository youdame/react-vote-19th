import { ERROR_PART_EMPTY, ERROR_TEAM_EMPTY } from "@/constants/validation";
import { Control, FieldPath, FieldValues, RegisterOptions, useController } from "react-hook-form";

interface Option {
  value: string;
}

interface SelectInputProps {
  control: Control<FieldValues>;
  name: FieldPath<FieldValues>;
  options: Option[];
  placeholder: string;
}

export default function SelectInput({ control, name, options, placeholder }: SelectInputProps) {
  const { field } = useController({ control, name, rules: selectInputRules[name] });
  return (
    <select className="flex h-45pxr w-200pxr rounded-lg bg-blue-base px-10pxr text-white" {...field}>
      <option className="text-white" value="" defaultValue={placeholder} hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
}

export const selectInputRules: Record<FieldPath<FieldValues>, RegisterOptions> = {
  teamName: {
    required: ERROR_TEAM_EMPTY,
  },
  part: {
    required: ERROR_PART_EMPTY,
  },
};
