import { createContext } from 'react';
import { Country, Region } from '../utils/country_types';

interface DataContextInterface {
  countries: Country[];
  regions: Set<Region>;
  borderCountriesMap: Map<string, string>;
}

const DataContext = createContext<DataContextInterface>({
  countries: [],
  regions: new Set(),
  borderCountriesMap: new Map(),
});

export default DataContext;
