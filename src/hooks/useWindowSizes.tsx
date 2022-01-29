import { useState, useEffect } from 'react';

const MIN_PHONE_WIDTH = 0;
const MIN_TABLET_WIDTH = 768;
const MIN_MONITOR_WIDTH = 1280;
const MIN_ULTRA_WIDE_WIDTH = 2560;

const useWindowSizes = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

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
    windowWidth,
    windowHeight,
    isPhone,
    isTablet,
    isMonitor,
    isUltraWide,
  };
};

export default useWindowSizes;
