import { Country } from "../types";

function sortByPopulation(a: Country, b: Country) {
  if (a.population > b.population) return -1;
  if (a.population < b.population) return 1;
  return 0;
}
function sortByName(a: Country, b: Country) {
  if (a.name.common > b.name.common) return 1;
  if (a.name.common < b.name.common) return -1;
  return 0;
}
function sortByArea(a: Country, b: Country) {
  if (a.area > b.area) return -1;
  if (a.area < b.area) return 1;
  return 0;
}

export function sortHandler(sortBy: string) {
  return function (a: Country, b: Country) {
    if (sortBy === "population") return sortByPopulation(a, b);
    if (sortBy === "name") return sortByName(a, b);
    if (sortBy === "area") return sortByArea(a, b);

    return 0;
  };
}
