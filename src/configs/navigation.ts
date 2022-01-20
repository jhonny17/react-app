import { HomeFillIcon } from '@primer/octicons-react';

import NavItem from '../types/NavItem';
import { ROOT_PAGE } from './navigation-link';

export const home: NavItem = {
  id: ROOT_PAGE,
  display: 'Home',
  url: ROOT_PAGE,
  icon: HomeFillIcon,
};

export const homes: NavItem[] = [...new Array<NavItem>(20)].map((_, index) => ({
  ...home,
  id: ROOT_PAGE + index,
  url: `${ROOT_PAGE}${index}/`,
}));

export const navbarItems: NavItem[] = [home, ...homes];
