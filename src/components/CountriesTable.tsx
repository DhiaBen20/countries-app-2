import { Link } from "react-router-dom";
import { getFlagUrl } from "../helper/getFlagUrl";
import { Country } from "../types";

export default function CountriesTable({ data }: { data: Country[] }) {
  return (
    <table className="w-full">
      <thead className="border-b-2 border-[#282B30]">
        <tr className="text-left [&_th]:p-4 [&_th]:px-4 [&_th:first-child]:pl-0 [&_th:last-child]:pr-0">
          <th className="font-medium text-sm w-16">Flag</th>
          <th className="font-medium text-sm w-[calc((100%-theme(spacing.16))/2)]x w-40">Name</th>
          <th className="font-medium text-sm w-[calc((100%-theme(spacing.16))/2)]x w-40">Population</th>
          <th className="font-medium text-sm w-[calc((100%-theme(spacing.16))/2)]x w-40">
            Area(km<sup>2</sup>)
          </th>
          <th className="font-medium text-sm w-[calc((100%-theme(spacing.16))/2)]x w-40">Region</th>
        </tr>
      </thead>
      <tbody className="text-[#D2D5DA]">
        {data.map((c) => (
          <tr
            key={c.name.common}
            className="[&_td]:px-4 [&_td:first-child]:pl-0 [&_td:last-child]:pr-0 [&:first-child_td]:pt-4"
          >
            <td className="py-2">
              <img
                src={getFlagUrl(c.cca2)}
                alt={c.flags.alt}
                className="w-14 object-cover rounded-md"
              />
            </td>
            <td className="py-2">
              <Link to={`/countries/${c.name.common}`}>{c.name.common}</Link>
            </td>
            <td className="py-2">{c.population.toLocaleString()}</td>
            <td className="py-2">{c.area.toLocaleString()}</td>
            <td className="py-2">{c.region}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
