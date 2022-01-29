import Icon from './Icons';

type NavItem = {
  id: string | number;
  icon?: Icon;
  url: string;
  display: string;
};

export default NavItem;
