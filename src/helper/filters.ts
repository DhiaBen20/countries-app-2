import { Country, Status } from "../types";

function filterBySearch(country: Country, term: string) {
  return [
    country.name.common.toLowerCase(),
    country.name.official.toLowerCase(),
    country.region.toLowerCase(),
    country.subregion.toLowerCase(),
    "",
  ].includes(term.toLowerCase());
}

function filterByStatus(country: Country, status: Status) {
  return (Object.keys(status) as (keyof Status)[]).reduce((prev, key) => {
    return prev && (status[key] ? country[key] === true : true);
  }, true);
}

function FilterByRegion(country: Country, regions: string[]) {
  return regions.length === 0 ? true : regions.includes(country.region);
}

export function filterHandler(
  search: string,
  status: Status,
  regions: string[]
) {
  return function (country: Country) {
    return (
      filterBySearch(country, search) &&
      filterByStatus(country, status) &&
      FilterByRegion(country, regions)
    );
  };
}
