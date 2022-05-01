import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState('');

  const toggleThemeHandler = () => {
    if (localStorage.theme == 'light') {
      localStorage.theme = 'dark';
      setTheme('dark');
    } else {
      localStorage.theme = 'light';
      setTheme('light');
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);
  
  return { theme, toggleThemeHandler };
}
