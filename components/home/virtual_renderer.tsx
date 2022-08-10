// Inspired by https://itnext.io/react-virtual-rendering-448f0f1b81ad

import CountryCard from './country_card';

// import { useEffect, useRef, useState } from 'react';
import { Country } from '../../lib/utils/country_types';

interface VirtualRenderProps {
  searchFilter: string;
  regionFilter: string;
  countries: Country[];
}

// interface ScrollProps {
//   start: number;
//   end: number;
// }

export default function VirtualRenderer({
  searchFilter,
  regionFilter,
  countries,
}: VirtualRenderProps) {
  // https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render

  // const [scrollPort, setScrollPort] = useState<ScrollProps>({
  //   start: 0,
  //   end: 0,
  // });

  // const viewportRef = useRef<HTMLDivElement>(null);

  // const [viewportHeight, setViewportHeight] = useState<number>(0);

  // const scrollEventListener = (event: Event) => {
  //   // console.log(window.scrollY);
  //   // console.log(viewportRef.current?.clientWidth);
  // };

  // const resizeEventListener = () => {
  //   adjustViewPortSize();
  // };

  // const adjustViewPortSize = () => {
  //   const numberOfCardsPerRow = Math.min(Math.floor(
  //     viewportRef.current?.clientWidth! / 200
  //   ), 4);
  //     console.log(numberOfCardsPerRow);
  //   const height = Math.ceil(countries.length / numberOfCardsPerRow) * 475;
  //   console.log(height);
  //   setViewportHeight(height);
  // }

  // useEffect(() => {
  //   addEventListener('scroll', scrollEventListener);
  //   addEventListener('resize', resizeEventListener);
  //   adjustViewPortSize();
  //   return () => {
  //     removeEventListener('scroll', scrollEventListener);
  //     removeEventListener('resize', resizeEventListener);
  //   };
  // });

  return (
    <div
      // ref={viewportRef}
      id="viewport"
      className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-10 gap-y-28 p-10 w-5/6 m-auto justify-center align-center"
      // style={{ height: viewportHeight }}
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
