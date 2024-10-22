export type Country = {
  name: { common: string; official: string };
  flags: { png: string; svg: string; alt: string };
  area: number;
  population: number;
  region: string;
  subregion: string;
  independent: boolean;
  unMember: boolean;
  cca2: string;
};

export type Status = { independent?: boolean; unMember?: boolean };

export type Countries = Country[];

export type DetailedCountry = Omit<
  Country,
  "region" | "independent" | "unMember"
> & {
  capital: string;
  currencies: Record<string, { name: string }>;
  languages: Record<string, string>;
  continents: string[];
  borders: string[];
};

export type Border = Pick<Country, "name" | "flags" | "cca2">;
