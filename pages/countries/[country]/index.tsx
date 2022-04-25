import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Image from 'next/image';
import { GetStaticPaths } from 'next/types';
import { Country } from '../../../lib/country_types';
import { fetchCountriesData, fetchCountry } from '../../../lib/fetch_data';
import InfoField from '../../../components/shared/info_field';
import { stringifyCurrency, stringifyLanguagesObj } from '../../../lib/parser';
import { FaArrowLeft } from 'react-icons/fa';

interface BorderTileProps {
  country: string;
}

function BorderTile({ country }: BorderTileProps) {
  return (
    <div className="text-xs justify-center pl-3 pr-3 pt-1 pb-1 shadow-md">
      {country}
    </div>
  );
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

  return (
    <div className="w-11/12 m-auto lg:min-h-[80vh] md:h-[60vh] grid-cols-1 grid items-center">
      <div className='p-10'>
        <div className="container pl-5 pr-5 pt-1 pb-1 text-xs shadow-lg h-8 w-fit flex items-center rounded-md">
          <FaArrowLeft className="" />
          <button className="pl-1 pr-2">Back</button>
        </div>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 min-w-full m-auto">
        <div className="flex align-middle justify-center min-h-full w-auto">
          <img
            className="min-h-full"
            src={flags.png ?? ''}
            alt={name.common + '_flag'}
          />
        </div>
        <div className="p-10">
          <h1 className="text-left font-bold text-2xl pt-6 pb-6">
            {name.common}
          </h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
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
                value={languages ? stringifyLanguagesObj(languages) : ''}
              />
            </div>
          </div>
          <div className="mt-10 flex w-full md:justify-items-center">
            <h2 className="font-semibold text-sm pr-2">Border Countries:</h2>
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
