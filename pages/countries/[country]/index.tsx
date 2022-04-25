import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Image from 'next/image';
import { GetStaticPaths } from 'next/types';
import { Country } from '../../../lib/country_types';
import { fetchCountriesData, fetchCountry } from '../../../lib/fetch_data';
import InfoField from '../../../components/shared/info_field';
import { stringify } from 'querystring';

interface BorderTileProps {
  country: string;
}

function BorderTile({ country }: BorderTileProps) {
  return <div>{country}</div>;
}

function stringifyArr(languages: Country['languages']): string {
  let output = '';
  for (let language of Object.values(languages as Object)) {
    output += language;
    output += ', ';
  }
  return output.slice(0, output.length - 2);
}

function stringifyCurrency(currencies: Country['currencies']): string {
  for (let currency of Object.values(currencies as Object)) {
    return currency.name;
  }
}

const CountryPage: NextPage<{ country: Country }> = ({ country }) => {
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country;
  console.log(stringifyCurrency(currencies));

  return (
    <div>
      <button>Back</button>
      <div className="grid grid-cols-2 p-10 h-full">
        <img src={flags.png ?? ''} alt={name.common + '_flag'} />
        <div>
          <h1>{name.common}</h1>
          <div className="grid grid-cols-2">
            <div>
              <InfoField field="Native Name" value={name.common} />
              <InfoField field="Population" value={String(population)} />
              <InfoField field="Region" value={region} />
              <InfoField field="Sub Region" value={subregion ?? ''} />
              <InfoField field="Capital" value={capital ? capital[0] : ''} />
            </div>
            <div>
              <InfoField field="Top Level Domain" value={tld ? tld[0] : ''} />
              <InfoField
                field="Currency"
                value={stringifyCurrency(currencies)}
              />
              <InfoField
                field="Languages"
                value={languages ? stringifyArr(languages) : ''}
              />
            </div>
          </div>
          <div className="mt-10">
            <InfoField field="Border Countries" value="" />
            {borders?.map((border) => {
              return (
                <BorderTile key={`${border}-bordertile`} country={border} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { countries } = await fetchCountriesData();
  return {
    paths: countries.map((country) => {
      return {
        params: {
          country: country.name.common.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { country: string };
}) => {
  const country: Country = await fetchCountry(params.country);
  return { props: { country: country } };
};

export default CountryPage;
