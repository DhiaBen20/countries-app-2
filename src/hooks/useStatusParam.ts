import { useSearchParams } from "react-router-dom";
import { Status } from "../types";

export function useStatusParam(): Status {
  const [searchParams] = useSearchParams();

  const status = searchParams.get("status");

  if (!status) return {};

  const statusObj = JSON.parse(status);

  const keys = ["unMember", "independent"];

  const object: Record<string, boolean> = {};

  keys.forEach((k) => {
    if (statusObj[k] === false) object[k] = false;
    if (statusObj[k]) object[k] = true;
  });

  return object;
}
