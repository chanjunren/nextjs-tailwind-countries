import { Country, Region } from './country_types';

export async function fetchCountriesData() {
  const res = await fetch('https://restcountries.com/v3.1/all', {
    headers: {
      'Cache-Control': 's-maxage=31536000, stale-while-revalidate',
    },
  });
  const countries: Country[] = await res.json();
  const regions = new Set<Region>();
  const borderCountriesMap = new Map();
  for (const country of countries) {
    if (!regions.has(country.region)) {
      regions.add(country.region);
    }
  }
  const regionsArray = Array.from(regions);
  return { countries, regionsArray };
}

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