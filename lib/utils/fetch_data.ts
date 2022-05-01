import { Country, Region } from './country_types';

export async function fetchCountry(countryName: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`,
    {
      headers: {
        'Cache-Control': 's-maxage=31536000, stale-while-revalidate',
      },
    }
  );
  const country: Country[] = await res.json();
  return country[0];
}