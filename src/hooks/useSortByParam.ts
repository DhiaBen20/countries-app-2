import { useSearchParams } from "react-router-dom";

export function useSortByParam() {
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy");

  return !sortBy
    ? "population"
    : ["name", "area", "population"].includes(sortBy)
    ? sortBy
    : "population";
}
