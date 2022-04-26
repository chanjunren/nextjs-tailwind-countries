import Link from 'next/link';
import { Country } from '../../lib/country_types';
import InfoField from '../shared/info_field';

export default function CountryCard(country: Country) {
  return (
    <Link href={`/countries/${country.name.common}`}>
      <div className="grid grid-col-1 shadow-lg rounded-md min-w-fit pb-20 cursor-pointer hover:scale-[1.02] duration-100 dark:bg-control-dark">
        <img
          className="rounded-md min-w-full lg:h-36 xl:h-52"
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
