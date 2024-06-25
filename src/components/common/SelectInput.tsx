import { Control, FieldPath, FieldValues, useController } from "react-hook-form";

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
  const { field } = useController({ control, name });
  return (
    <select className="flex h-45pxr w-200pxr rounded-lg bg-blue-base px-10pxr text-white" {...field}>
      <option className="text-white" value="" selected hidden>
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
