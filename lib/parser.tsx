import { Country } from './country_types';
export function stringifyLanguagesObj(languages: Country['languages']): string {
  let output = '';
  if (typeof languages === 'undefined') return output;
  
  for (let language of Object.values(languages as Object)) {
    output += language;
    output += ', ';
  }
  return output.slice(0, output.length - 2);
}

export function stringifyCurrency(currencies: Country['currencies']): string {
  if (typeof currencies === 'undefined') return '';
  
  for (let currency of Object.values(currencies as Object)) {
    return currency.name;
  }
  return '';
}
