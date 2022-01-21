import { HomeIcon, GiftIcon } from '@primer/octicons-react';

import NavItem from '../../types/NavItem';
import { ROOT_PAGE, STORE_PAGE } from './navigation-link';

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
  icon: GiftIcon,
};

export const navbarItems: NavItem[] = [home, store];
