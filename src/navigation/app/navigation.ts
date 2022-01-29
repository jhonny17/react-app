import NavItem from '../../types/NavItem';
import { ROOT_PAGE, STORE_PAGE } from './navigation-link';

import HomeIcon from '../../icons/HomeIcon';
import StoreIcon from '../../icons/StoreIcon';

export const home: NavItem = {
  id: ROOT_PAGE,
  display: 'Home',
  url: ROOT_PAGE,
  icon: HomeIcon,
};

export const store: NavItem = {
  id: STORE_PAGE,
  display: 'Store',
  url: STORE_PAGE,
  icon: StoreIcon,
};

export const navbarItems: NavItem[] = [home, store];
