import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { GetStaticPaths } from 'next/types';
import { Country } from '../../../lib/country_types';
import { fetchCountriesData, fetchCountry } from '../../../lib/fetch_data';

const CountryPage: NextPage<{ country: Country }> = ({ country }) => {
  console.log(country);
  return <div>Hi</div>;
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

  return { props: { country: { country } } };
};

export default CountryPage;
