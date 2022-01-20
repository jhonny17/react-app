import { useState, useEffect } from 'react';

const useWindowSizes = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  const loadWindowSizes = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    loadWindowSizes();
    window.addEventListener('resize', loadWindowSizes);
    return () => {
      window.removeEventListener('resize', loadWindowSizes);
    };
  }, []);
  return { windowWidth, windowHeight };
};

export default useWindowSizes;
