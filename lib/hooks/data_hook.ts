import { useEffect, useState } from 'react';
import { Country, Region } from '../utils/country_types';

const useCountriesData = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [regions, setRegions] = useState<Set<Region>>(new Set());
  const [borderCountriesMap, setBorderCountriesMap] = useState<
    Map<string, string>
  >(new Map());

  async function fetchCountriesData() {
    const res = await fetch('https://restcountries.com/v3.1/all', {
      headers: {
        'Cache-Control': 's-maxage=31536000, stale-while-revalidate',
      },
    });
    const countriesArr: Country[] = await res.json();
    setCountries(countriesArr);
    const regionSet: Set<Region> = new Set();
    for (const country of countriesArr) {
      if (!regionSet.has(country.region)) {
        regionSet.add(country.region);
      }
      setRegions(regionSet);
    }
    const map = new Map();
    for (const country of countriesArr) {
      map.set(country.name.official, country.cioc);
    }
    setBorderCountriesMap(map);
  }

  useEffect(() => {
    console.log('fetching data...');
    const fetchAppData = async () => await fetchCountriesData();
    fetchAppData();
  }, []);

  return { countries, regions, borderCountriesMap, fetchCountriesData };
};

export default useCountriesData;
