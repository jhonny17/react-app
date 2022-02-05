import Icon from './Icons';

type NavItem = {
  id: string | number;
  icon?: Icon;
  url?: string;
  display: string;
  onClick?: () => void | Promise<void>;
};

export default NavItem;
