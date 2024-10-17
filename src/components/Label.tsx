import { ComponentPropsWithoutRef } from "react";

export const labelStyles = "text-sm font-medium text-[#6C727F]";

export default function Label(props: ComponentPropsWithoutRef<"label">) {
  return <label {...props} className={labelStyles} />;
}
