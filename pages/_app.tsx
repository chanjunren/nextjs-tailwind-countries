import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import NavBar from '../components/shared/nav_bar';
import DataContext from '../lib/context/data_context';
import useCountriesData from '../lib/hooks/data_hook';
import useTheme from '../lib/hooks/theme_hook';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleThemeHandler } = useTheme();

  const { countries, regions, borderCountriesMap } = useCountriesData();

  return (
    <>
      <DataContext.Provider
        value={{
          countries: countries,
          regions: regions,
          borderCountriesMap: borderCountriesMap,
        }}
      >
        <NavBar toggleThemeHandler={toggleThemeHandler} theme={theme} />
        <Component {...pageProps} />
      </DataContext.Provider>
    </>
  );
}

export default MyApp;
