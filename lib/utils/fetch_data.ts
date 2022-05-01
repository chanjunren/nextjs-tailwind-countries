import { Country } from './country_types';

export async function fetchCountries() {
  const res = await fetch('https://restcountries.com/v3.1/all', {
    headers: {
      'Cache-Control': 's-maxage=31536000, stale-while-revalidate',
    },
  });
  const countries: Country[] = await res.json();

  return { countries };
}

export async function fetchCountryPage(countryName: string) {
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