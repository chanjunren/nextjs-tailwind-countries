// Inspired by https://itnext.io/react-virtual-rendering-448f0f1b81ad

import CountryCard from './country_card';
import { Country } from '../../lib/country_types';
import { useEffect, useState } from 'react';

interface VirtualRenderProps {
  searchFilter: string;
  regionFilter: string;
  countries: Country[];
}

function scrollEventListener () {

}

export default function VirtualRenderer({
  searchFilter,
  regionFilter,
  countries,
}: VirtualRenderProps) {
  // https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render

  return (
    <div
      id="viewport"
      className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-10 gap-y-28 p-10 w-5/6 m-auto justify-center align-center"
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
  );
}
