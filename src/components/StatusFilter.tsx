import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { useStatusParam } from "../hooks/useStatusParam";
import Checkbox from "./Checkbox";
import { labelStyles } from "./Label";

export default function StatusFilter() {
  const [, setSearchParams] = useSearchParams();
  const status = useStatusParam();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchParams((params) => {
      params.set(
        "status",
        JSON.stringify({ ...status, [e.target.value]: e.target.checked })
      );
      return params;
    });
  }

  return (
    <div>
      <div className={labelStyles}>Status</div>
      <div className="mt-4 space-y-2">
        {(
          [
            { key: "unMember", label: "Member of the United Nations" },
            { key: "independent", label: "Independent" },
          ] as const
        ).map((c) => (
          <label key={c.key} className="flex items-center gap-4 text-[#D2D5DA]">
            <Checkbox
              name="status"
              checked={status[c.key]}
              value={c.key}
              onChange={handleChange}
              className="opacity-0 absolute"
            />
            <div>{c.label}</div>
          </label>
        ))}
      </div>
    </div>
  );
}
