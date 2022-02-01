import React, { FC, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import navItemStyle from '../styles/components/NavItem.module.scss';

import NavItem from '../types/NavItem';

import useWindowSizes from '../hooks/useWindowSizes';

const {
  'nav-item': navItemClassName,
  'nav-link': navLinkClassName,
  active: activeNavItemClassName,
} = navItemStyle;

const NavItem: FC<NavItem> = ({ id, display, url, icon: Icon }: NavItem) => {
  const { pathname } = useLocation();
  const { isMonitor } = useWindowSizes();
  const [className, setClassName] = useState<string>(navItemClassName);

  useEffect(() => {
    const newClassName =
      pathname === url
        ? `${navItemClassName} ${activeNavItemClassName}`
        : navItemClassName;

    if (className === newClassName) return;

    setClassName(newClassName);
  }, [url, pathname]);

  return (
    <li key={id} className={className} title={display}>
      <Link to={url} className={navLinkClassName}>
        {Icon ? isMonitor ? display : <Icon size={35} /> : null}
      </Link>
    </li>
  );
};

export default NavItem;
