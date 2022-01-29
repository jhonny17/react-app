import { useEffect, useState } from 'react';

const themeMediaQuery = (theme: string) =>
  window.matchMedia?.(`(prefers-color-scheme: ${theme})`);

const darkThemeMediaQuery = themeMediaQuery('dark');

const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    const setCurrentTheme = () => {
      setIsDarkTheme(darkThemeMediaQuery?.matches === true);
      setIsLightTheme(darkThemeMediaQuery?.matches !== true);
    };

    const addListener =
      darkThemeMediaQuery?.addEventListener ?? darkThemeMediaQuery?.addListener;

    addListener('change', setCurrentTheme);

    return () => {
      const removeListener =
        darkThemeMediaQuery?.removeEventListener ?? darkThemeMediaQuery?.removeListener;

      removeListener('change', setCurrentTheme);
    };
  }, []);

  return { isLightTheme, isDarkTheme };
};

export default useTheme;
