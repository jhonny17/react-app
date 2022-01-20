import { Icon } from '@primer/octicons-react';

type NavItem = {
  id: string | number;
  icon?: Icon;
  url: string;
  display: string;
};

export default NavItem;
