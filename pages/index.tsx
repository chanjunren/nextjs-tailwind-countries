import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, useState } from 'react';
import ControlPanel from '../components/home/control_panel';
import CountryCard from '../components/home/country_card';
import { fetchCountriesData } from '../lib/fetch_data';
import { Country, Region } from '../lib/country_types';

const Home: NextPage<{ countries: Country[]; regions: Region[] }> = ({
  countries,
  regions,
}) => {
  const [dropDownActive, setDropDown] = useState(false);
  const [regionFilter, setRegionFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  const onSearchInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  const toggleDropDown = () => {
    setDropDown(!dropDownActive);
  };
  return (
    <div>
      <Head>
        <title>My blood sweat and tears</title>
        <meta name="description" content="Padlet Take Home Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-main-dark dark:text-white text-black min-h-screen">
        <div className={'container p-10 flex items-center w-5/6 mt-16 m-auto'}>
          <ControlPanel
            regions={regions}
            dropdownActive={dropDownActive}
            toggleDropDown={toggleDropDown}
            filter={regionFilter}
            setFilter={setRegionFilter}
            searchInputHandler={onSearchInputHandler}
          />
        </div>
        <div
          className={
            'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-10 gap-y-28 p-10 w-5/6 m-auto'
          }
        >
          {countries
            .filter((country) =>
              country.name.common
                .toLowerCase()
                .startsWith(searchFilter.toLowerCase()) && regionFilter == ''
                ? true
                : country.region == regionFilter
            )
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common + '_country_card'}
                  {...country}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { countries, regionsArray } = await fetchCountriesData();
  return {
    props: {
      countries: countries,
      regions: regionsArray,
    },
  };
};

export default Home;
