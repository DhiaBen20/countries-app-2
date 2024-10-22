import {
  json,
  Link,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";
import { getFlagUrl } from "../helper/getFlagUrl";
import { Border, DetailedCountry } from "../types";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }: LoaderFunctionArgs) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${params.country}?fields=name,flags,area,population,subregion,cca2,capital,currencies,languages,continents,borders`
  );

  if (!res.ok) throw new Error(`country ${params.country} does not exist.`);

  const countries: DetailedCountry[] = (await res.json()).filter(
    (c: DetailedCountry) => c.name.common === params.country
  );

  if (countries.length === 0)
    throw new Error(`country ${params.country} does not exist.`);

  const borders = await Promise.all(
    countries[0].borders.map((b) =>
      fetch(
        `https://restcountries.com/v3.1/alpha/${b}?fields=name,flags,cca2`
      ).then((res) => res.json())
    )
  );

  return json({ country: countries[0], borders });
}

export default function Country() {
  const { country, borders } = useLoaderData() as {
    country: DetailedCountry;
    borders: Border[];
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <CountrySummary {...country} />
      <CountryDetails {...country} />
      <Borders borders={borders} />
    </div>
  );
}

function Borders({ borders }: { borders: Border[] }) {
  return (
    <div>
      <div className="my-6">Neighbouring Countries</div>
      <div className="grid grid-cols-8 gap-x-6 gap-y-4">
        {borders.map((border) => (
          <div key={border.cca2} className="relative">
            <img
              src={getFlagUrl(border.cca2)}
              alt={border.flags.alt}
              className="rounded-md"
            />
            <Link
              to={`/countries/${border.name.common}`}
              className="mt-1 text-sm line-clamp-1"
            >
              {border.name.common}
              <span className="absolute inset-0"></span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function CountryDetails(country: DetailedCountry) {
  return (
    <dl className="mt-14 -mx-6 [&_>_div]:flex [&_>_div]:items-center [&_>_div]:justify-between [&_>_div]:px-6 [&_>_div]:py-6 [&_>_div]:border-t [&_>_div:last-child]:border-b [&_>_div]:border-[#282B30] [&_dd]:text-[#D2D5DA]">
      <div>
        <dt>Captial</dt>
        <dd>{country.capital}</dd>
      </div>
      <div>
        <dt>Subregion</dt>
        <dd>{country.subregion}</dd>
      </div>
      <div>
        <dt>Language</dt>
        <dd>{Object.values(country.languages).join(", ")}</dd>
      </div>
      <div>
        <dt>Currencies</dt>
        <dd>
          {Object.values(country.currencies)
            .map((c) => c.name)
            .join(", ")}
        </dd>
      </div>
      <div>
        <dt>Continents</dt>
        <dd>{country.continents.join(", ")}</dd>
      </div>
    </dl>
  );
}

function CountrySummary(country: DetailedCountry) {
  const populationAndArea = [
    { name: "population", value: country.population },
    {
      name: (
        <>
          area(km<sup>2</sup>)
        </>
      ),
      value: country.area,
    },
  ];

  return (
    <div>
      <img
        src={getFlagUrl(country.cca2)}
        alt={country.flags.alt}
        className="max-w-xs mx-auto -mt-14 rounded-xl"
      />
      <div className="mt-8 text-center text-3xl font-medium text-[#D2D5DA]">
        {country.name.common}
      </div>
      <div className="text-center text-[#D2D5DA]">{country.name.official}</div>
      <div className="flex justify-center gap-x-10 mt-8 flex-wrap gap-y-4">
        {populationAndArea.map((data, i) => (
          <div
            key={i}
            className="bg-[#282B30] rounded-xl px-4 py-2 text-[#D2D5DA] inline-flex items-center gap-4"
          >
            <span>{data.name}</span>
            <span className="w-0.5 h-9 bg-[#1B1D1F] " />
            <span>{data.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
