import Image from 'next/image';
import Link from 'next/link';
import { Country } from '../../lib/utils/country_types';
import InfoField from '../shared/info_field';

export default function CountryCard(country: Country) {
  return (
    <Link href={`/countries/${country.name.official}`} passHref>
      <div className="flex flex-col shadow-lg rounded-md w-[200px] pb-20 cursor-pointer hover:scale-[1.02] duration-100 dark:bg-control-dark">
        <Image
          className="rounded-md"
          src={country.flags.png ? country.flags.png : ''}
          alt={country.name.common + '_flag'}
          height={120}
          width={200}
          objectFit="cover"
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
