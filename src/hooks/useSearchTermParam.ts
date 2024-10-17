import { useSearchParams } from "react-router-dom";

export function useSearchTermParam() {
  const [searchParams] = useSearchParams();

  const term = searchParams.get("search");

  return term ? term : "";
}
