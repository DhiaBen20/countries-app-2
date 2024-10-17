import { Check } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

export default function Checkbox({
  checked,
  ...props
}: ComponentPropsWithoutRef<"input">) {
  return (
    <div className="relative group">
      <input
        {...props}
        type="checkbox"
        checked={checked}
        className="opacity-0 absolute"
      />
      <div className="size-6 bg-[#1B1D1F] rounded border-2 border-[#6C727F] group-has-[:checked]:bg-[#4E80EE] group-has-[:checked]:border-[#4E80EE] group-focus-within:ring-2 ring-offset-2 ring-offset-[#1B1D1F] flex items-center justify-center">
        {checked && <Check className="size-5" stroke="white" />}
      </div>
    </div>
  );
}
