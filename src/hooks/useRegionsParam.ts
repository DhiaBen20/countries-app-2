import { useSearchParams } from "react-router-dom";

export const regions = [
  "Asia",
  "Africa",
  "Europe",
  "Americas",
  "Oceania",
  "Antarctic",
];

export function useRegionsParam() {
  const [searchParams] = useSearchParams();

  const regions = searchParams.get("regions");

  if (!regions) return [];

  return regions.split(",").filter((r) => regions.includes(r));
}
