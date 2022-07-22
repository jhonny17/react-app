/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { useEffect, useState } from 'react';

const themeMediaQuery = (theme: string) =>
  window.matchMedia(`(prefers-color-scheme: ${theme})`);

const darkThemeMediaQuery = themeMediaQuery('dark');

const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    const setCurrentTheme = () => {
      setIsDarkTheme(darkThemeMediaQuery.matches);
      setIsLightTheme(!darkThemeMediaQuery.matches);
    };

    const addAvailableListener =
      darkThemeMediaQuery.addEventListener.bind(darkThemeMediaQuery) ??
      darkThemeMediaQuery.addListener.bind(darkThemeMediaQuery);

    addAvailableListener('change', setCurrentTheme);

    return () => {
      const removeListener =
        darkThemeMediaQuery.removeEventListener.bind(darkThemeMediaQuery) ??
        darkThemeMediaQuery.removeListener.bind(darkThemeMediaQuery);

      removeListener('change', setCurrentTheme);
    };
  }, []);

  return { isDarkTheme, isLightTheme };
};

export default useTheme;
