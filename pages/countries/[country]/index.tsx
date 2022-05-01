import { NextPage } from 'next';
import { GetStaticPaths } from 'next/types';
import { Country } from '../../../lib/utils/country_types';
import {
  fetchCountries,
  fetchCountryPage,
} from '../../../lib/utils/fetch_data';
import InfoField from '../../../components/shared/info_field';
import {
  stringifyCurrency,
  stringifyLanguagesObj,
} from '../../../lib/utils/parser';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useContext } from 'react';
import DataContext from '../../../lib/context/data_context';

interface BorderTileProps {
  country: string;
}

function BorderTile({ country }: BorderTileProps) {
  return (
    <div className="min-w-100 text-xs justify-center text-center pl-3 pr-3 pt-1 pb-1 shadow-md hover:scale-[1.08] duration-100 dark:bg-control-dark cursor-default">
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

  const dataContext = useContext(DataContext);
  const borderCountriesMap = dataContext.borderCountriesMap;

  return (
    <div className="dark:bg-main-dark dark:text-white min-h-screen lg:overflow-hidden">
      <div className="w-11/12 m-auto grid-cols-1 grid items-center mt-16">
        <div className="pt-10 pb-10">
          <Link href={'/'} passHref>
            <div className="container pl-5 pr-5 pt-1 pb-1 text-xs shadow-xl h-8 w-fit flex items-center rounded-md hover:scale-[1.05] duration-100 dark:bg-control-dark">
              <FaArrowLeft />
              <button className="pl-1 pr-2">Back</button>
            </div>
          </Link>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 min-w-full m-auto">
          <div className="flex align-middle justify-center min-h-full w-auto">
            <img
              className="min-h-full object-scale-down"
              src={flags.png ?? ''}
              alt={name.common + '_flag'}
            />
          </div>
          <div className="p-10 md:pt-2 dark:bg-main-dark">
            <h1 className="text-left font-bold text-2xl pt-6 pb-6">
              {name.common}
            </h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
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
            <div className="flex container mt-10 lg:flex-row flex-col gap-y-3">
              <h2 className="font-semibold flex items-center text-sm pr-2">
                Border Countries:
              </h2>
              <div className="grid grid-cols-4 gap-x-3">
                {borders?.map((border) => {
                  return (
                    <BorderTile
                      key={`${border}-bordertile`}
                      country={
                        borderCountriesMap.has(border)
                          ? borderCountriesMap.get(border)!
                          : border
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { countries } = await fetchCountries();
  return {
    paths: countries.map((country) => {
      return {
        params: {
          country: country.name.official.toString(),
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
  const country: Country = await fetchCountryPage(params.country);
  return { props: { country: country } };
};

export default CountryPage;
