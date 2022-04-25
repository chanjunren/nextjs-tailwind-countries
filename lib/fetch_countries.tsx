import { GetCountryResults } from '../utils/country_types';

export async function fetchCountries() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const countries: GetCountryResults = await res.json();
  return countries;
}
