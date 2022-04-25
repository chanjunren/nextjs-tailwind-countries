import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import ControlPanel from '../components/home/control_panel';
import CountryCard from '../components/home/country_card';
import { fetchCountriesData } from '../lib/fetch_data';
import { Country, Region } from '../lib/country_types';

const Home: NextPage<{ countries: Country[], regions:Region[] }> = ({ countries, regions }) => {
  const [dropDownActive, setDropDown] = useState(false);
  const [filter, setFilter] = useState('');

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
      <div className="container p-10 flex items-center w-5/6 m-auto">
        <ControlPanel
          regions={regions}
          dropdownActive={dropDownActive}
          toggleDropDown={toggleDropDown}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-10 gap-y-28 p-10 w-5/6 m-auto">
        {countries.map((country) => {
          return (
            <CountryCard
              key={country.name.common + '_country_card'}
              {...country}
            />
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {countries, regionsArray} = await fetchCountriesData();
  console.log(regionsArray);
  return {
    props: {
      countries: countries,
      regions: regionsArray
    },
  };
};

export default Home;
