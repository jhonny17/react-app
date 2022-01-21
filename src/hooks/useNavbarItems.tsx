import { useEffect, useState } from 'react';
import { navbarItems } from '../navigation/app/navigation';
import NavItem from '../types/NavItem';
import useWindowSizes from './useWindowSizes';

const useNavbarItems = () => {
  const { windowWidth } = useWindowSizes();
  const [unavailableWidth, setUnavailableWidth] = useState<number>(0);
  const [visibleNavbarItems, setVisibleNavbarItems] = useState<NavItem[]>([]);
  const [invisibleNavbarItems, setInvisibleNavbarItems] = useState<NavItem[]>([]);

  useEffect(() => {
    // 52 is number of pixels of one NavItem
    // Minus 1 because there must be an icon that displays the invisible NavItems
    let visibleNavbarItemCount = Math.floor((windowWidth - unavailableWidth) / 52) - 1;

    if (visibleNavbarItemCount > navbarItems.length) {
      visibleNavbarItemCount = navbarItems.length;
    }

    if (visibleNavbarItemCount < 0) return;
    if (visibleNavbarItems.length === visibleNavbarItemCount) return;

    const newVisibleNavItems = navbarItems.slice(0, visibleNavbarItemCount);
    const newInvisibleNavItems = navbarItems.slice(visibleNavbarItemCount);

    setVisibleNavbarItems(newVisibleNavItems);
    setInvisibleNavbarItems(newInvisibleNavItems);
  }, [windowWidth]);

  return {
    visibleNavbarItems,
    invisibleNavbarItems,
    unavailableWidth,
    setUnavailableWidth,
  };
};

export default useNavbarItems;
