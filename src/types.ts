export type Country = {
  name: { common: string; official: string };
  flags: { png: string; svg: string; alt: string };
  area: number;
  population: number;
  region: string;
  subregion: string;
  independent: boolean;
  unMember: boolean;
  cca2: string
};

export type Status = { independent?: boolean; unMember?: boolean };
