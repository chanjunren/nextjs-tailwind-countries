import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import ControlPanel from '../components/home/control_panel';

import { Country, GetCountryResults } from '../utils/country_types';

const Home: NextPage<{ countries: Country[] }> = ({ countries }) => {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  const [dropDownActive, setDropDown] = useState(false);
  const [filter, setFilter] = useState("");


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
      <div className="container p-10 flex items-center m-auto">
        <ControlPanel
          regions={regions}
          dropdownActive={dropDownActive}
          toggleDropDown={toggleDropDown}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      {/* <ul>
        {countries.map((country) => {
          return <li>{country.name.common}</li>;
        })}
      </ul> */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const result: GetCountryResults = await res.json();
  return {
    props: {
      countries: result,
    },
  };
};

export default Home;
