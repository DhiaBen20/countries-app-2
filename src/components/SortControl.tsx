import { ChevronDown } from "lucide-react";
import Label from "./Label";
import { useSearchParams } from "react-router-dom";

export default function SortControl() {
  const [, setSearchParams] = useSearchParams();

  return (
    <div>
      <Label htmlFor="sort-by">Sort by</Label>
      <div className="relative mt-2">
        <select
          id="sort-by"
          className="rounded-xl py-3 border-2 border-[#282B30] text-[#D2D5DA] bg-[#1B1D1F] w-full appearance-none pr-9 pl-4 font-medium text-sm focus:outline-none focus:border-[#4E80EE]"
          onChange={(e) =>
            setSearchParams((params) => {
              params.set("sortBy", e.target.value.toLowerCase());
              return params;
            })
          }
        >
          <option>Population</option>
          <option>Name</option>
          <option>Area</option>
        </select>
        <ChevronDown className="absolute top-1/2 -translate-y-1/2 right-2 size-5" />
      </div>
    </div>
  );
}
