import Link from 'next/link';
import { Country } from '../../utils/country_types';

interface InfoFieldProps {
  field: string;
  value: string;
}

function InfoField({ field, value }: InfoFieldProps) {
  return (
    <div className="container flex w-full">
      <h2 className="font-semibold">{field}: </h2>
      <p className="ml-1">{value}</p>
    </div>
  );
}

export default function CountryCard(country: Country) {
  return (
    <Link href={`/countries/${country.name}`}>
      <div className="grid grid-col-1 shadow-lg rounded-md min-w-fit pb-20">
        <img
          className="rounded-md min-w-full lg:h-40 xl:h-52"
          src={country.flags.png}
          alt={country.name.common + '_flag'}
        />
        <div className="p-5">
          <h1 className="font-bold mt-5 mb-5">{country.name.common}</h1>
          <InfoField field="Population" value={country.population.toString()} />
          <InfoField field="Region" value={country.region} />
          <InfoField
            field="Capital"
            value={
              country.capital
                ? country.capital[0]
                  ? country.capital[0]
                  : ''
                : ''
            }
          />
        </div>
      </div>
    </Link>
  );
}
