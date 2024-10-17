import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useSearchTermParam } from "../hooks/useSearchTermParam";

export default function SearchInput() {
  const searchTerm = useSearchTermParam();
  const [, setSearchParams] = useSearchParams();

  return (
    <div className="relative max-w-xs w-full">
      <input
        type="text"
        className="w-full bg-[#282B30] shadow rounded-xl py-3 pl-9 pr-4 text-sm font-medium text-[#D2D5DA] focus:ring-2 focus:outline-none ring-offset-2 ring-offset-[#1B1D1F]"
        placeholder="search by Name, Region, Subregion"
        value={searchTerm}
        onChange={(e) =>
          setSearchParams((params) => {
            params.set("search", e.target.value);
            return params;
          })
        }
      />
      <Search className="size-5 absolute top-1/2 -translate-y-1/2 left-2 pointer-events-none" />
    </div>
  );
}
