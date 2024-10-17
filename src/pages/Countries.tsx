import { json, useLoaderData } from "react-router-dom";
import CountriesTable from "../components/CountriesTable";
import RegionsFilter from "../components/RegionsFilter";
import SearchInput from "../components/SearchInput";
import SortControl from "../components/SortControl";
import StatusFilter from "../components/StatusFilter";
import { filterHandler } from "../helper/filters";
import { sortHandler } from "../helper/sortHandler";
import { useRegionsParam } from "../hooks/useRegionsParam";
import { useSearchTermParam } from "../hooks/useSearchTermParam";
import { useSortByParam } from "../hooks/useSortByParam";
import { useStatusParam } from "../hooks/useStatusParam";
import { Country } from "../types";

let cachedCountries: null | Country[] = null;

async function fetchCountries(): Promise<Country[]> {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,area,population,independent,unMember,region,subregion,cca2"
  );

  return await res.json();
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  if (cachedCountries) return cachedCountries;

  cachedCountries = await fetchCountries();

  return json(cachedCountries);
}

export default function Countries() {
  let countries = useLoaderData() as Country[];

  const search = useSearchTermParam();
  const status = useStatusParam();
  const regions = useRegionsParam();
  const sortBy = useSortByParam();

  countries = countries
    .filter(filterHandler(search, status, regions))
    .sort(sortHandler(sortBy));

  return (
    <div className="mx-10 py-6 px-8">
      <div className="flex items-center justify-between">
        <div className="text-lg font-medium">
          Found {countries.length} countries
        </div>
        <SearchInput />
      </div>
      <div className="mt-10 grid md:grid-cols-[300px_1fr] gap-10">
        <div className="space-y-8">
          <SortControl />
          <RegionsFilter />
          <StatusFilter />
        </div>
        <div className="overflow-x-auto">
          <CountriesTable data={countries} />
        </div>
      </div>
    </div>
  );
}
