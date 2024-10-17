import { ChangeEvent } from "react";
import { labelStyles } from "./Label";
import { useSearchParams } from "react-router-dom";
import { regions, useRegionsParam } from "../hooks/useRegionsParam";

export default function RegionsFilter() {
  const [, setSearchParams] = useSearchParams();
  const appliedRegions = useRegionsParam();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchParams((params) => {
      params.set(
        "regions",
        e.target.checked
          ? [...appliedRegions, e.target.value].join(",")
          : appliedRegions.filter((r) => r !== e.target.value).join(",")
      );

      return params;
    });
  }
  return (
    <div>
      <div className={labelStyles}>Region</div>
      <div className="flex flex-wrap gap-3 mt-4">
        {regions.map((r) => (
          <label
            key={r}
            className={
              "relative rounded-xl font-medium text-sm has-[:checked]:text-[#D2D5DA] has-[:checked]:bg-[#282B30] py-1.5 px-2 has-[:checked]:shadow-sm focus-within:ring-2 ring-offset-2 ring-offset-[#1B1D1F]"
            }
          >
            <input
              type="checkbox"
              name="region-filter"
              value={r}
              onChange={handleChange}
              checked={appliedRegions.includes(r)}
              className="opacity-0 absolute"
            />
            <div>{r}</div>
          </label>
        ))}
      </div>
    </div>
  );
}
