import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, useState } from 'react';
import ControlPanel from '../components/home/control_panel';
import { fetchCountriesData } from '../lib/fetch_data';
import { Country, Region } from '../lib/country_types';
import VirtualRenderer from '../components/home/virtual_renderer';

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
        <VirtualRenderer
          countries={countries}
          regionFilter={regionFilter}
          searchFilter={searchFilter}
        />
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
