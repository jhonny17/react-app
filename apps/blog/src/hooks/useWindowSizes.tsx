import { useEffect, useState } from 'react';

const MIN_PHONE_WIDTH = 0;
const MIN_TABLET_WIDTH = 768;
const MIN_MONITOR_WIDTH = 1280;
const MIN_ULTRA_WIDE_WIDTH = 1921;

const DEFAULT_MIN_VALUE = 0;

const useWindowSizes = () => {
  const [windowWidth, setWindowWidth] = useState<number>(DEFAULT_MIN_VALUE);
  const [windowHeight, setWindowHeight] = useState<number>(DEFAULT_MIN_VALUE);

  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isMonitor, setIsMonitor] = useState<boolean>(false);
  const [isUltraWide, setIsUltraWide] = useState<boolean>(false);

  const loadWindowSizes = () => {
    const width = window.innerWidth;

    setWindowWidth(width);
    setWindowHeight(window.innerHeight);

    setIsPhone(MIN_PHONE_WIDTH <= width && width < MIN_TABLET_WIDTH);
    setIsTablet(MIN_TABLET_WIDTH <= width && width < MIN_MONITOR_WIDTH);
    setIsMonitor(MIN_MONITOR_WIDTH <= width);
    setIsUltraWide(MIN_ULTRA_WIDE_WIDTH <= width);
  };

  useEffect(() => {
    loadWindowSizes();
    window.addEventListener('resize', loadWindowSizes);
    return () => {
      window.removeEventListener('resize', loadWindowSizes);
    };
  }, []);

  return {
    isMonitor,
    isPhone,
    isTablet,
    isUltraWide,
    windowHeight,
    windowWidth,
  };
};

export default useWindowSizes;
