import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import NavBar from '../components/shared/nav_bar';
import useTheme from '../lib/theme_hook';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleThemeHandler } = useTheme();
  console.log('being rerendered');
  return (
    <>
      <NavBar toggleThemeHandler={toggleThemeHandler} theme={theme} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
