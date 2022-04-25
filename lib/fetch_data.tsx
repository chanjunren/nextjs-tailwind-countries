import { Country, Region } from './country_types';

export async function fetchCountriesData() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const countries: Country[] = await res.json();
  const regions = new Set<Region>();

  for (let country of countries) {
    if (!regions.has(country.region)) {
      regions.add(country.region);
    }
  }
  const regionsArray = Array.from(regions);
  return { countries, regionsArray };
}

export async function fetchCountry(countryName: string) {
  console.log(
    `trying to fetch from https://restcountries.com/v3.1/name/${countryName}`
  );
  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  const country: Country[] = await res.json();
  return country[0];
}
