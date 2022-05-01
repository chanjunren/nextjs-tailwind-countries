import { Country } from './country_types';
export function stringifyLanguagesObj(languages: Country['languages']): string {
  let output = '';
  if (typeof languages === 'undefined') return output;

  for (const language of Object.values(languages)) {
    output += language;
    output += ', ';
  }
  return output.slice(0, output.length - 2);
}

export function stringifyCurrency(currencies: Country['currencies']): string {
  if (typeof currencies === 'undefined') return '';

  for (const currency of Object.values(currencies)) {
    return currency.name;
  }
  return '';
}
