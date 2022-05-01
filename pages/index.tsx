import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, useContext, useState } from 'react';
import ControlPanel from '../components/home/control_panel';
import VirtualRenderer from '../components/home/virtual_renderer';
import DataContext from '../lib/context/data_context';

const Home: NextPage = () => {
  const [dropDownActive, setDropDown] = useState(false);
  const [regionFilter, setRegionFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  const dataContext = useContext(DataContext);

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
            regions={dataContext.regions}
            dropdownActive={dropDownActive}
            toggleDropDown={toggleDropDown}
            filter={regionFilter}
            setFilter={setRegionFilter}
            searchInputHandler={onSearchInputHandler}
          />
        </div>
        <VirtualRenderer
          countries={dataContext.countries}
          regionFilter={regionFilter}
          searchFilter={searchFilter}
        />
      </div>
    </div>
  );
};

export default Home;
