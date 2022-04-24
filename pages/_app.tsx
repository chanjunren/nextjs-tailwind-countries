import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import NavBar from '../components/shared/nav_bar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
