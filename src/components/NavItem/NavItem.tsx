import React, { useState, useEffect, MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';

import navItemStyle from './NavItem.module.scss';

import { ROOT_PAGE } from 'navigation/app/navigation-link';

import NavItem from 'types/NavItem';
import useWindowSizes from 'hooks/useWindowSizes';

const {
  'nav-item': navItemClassName,
  'nav-link': navLinkClassName,
  active: activeNavItemClassName,
} = navItemStyle;

const NavItem = ({ id, display, url, icon: Icon, onClick }: NavItem) => {
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

  const innerOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (typeof onClick !== 'function') return;
    event.preventDefault();
    event.stopPropagation();
    onClick();
  };

  return (
    <li key={id} className={className} title={display}>
      <Link to={url ?? ROOT_PAGE} onClick={innerOnClick} className={navLinkClassName}>
        {isMonitor ? display : Icon ? <Icon size={35} /> : null}
      </Link>
    </li>
  );
};

export default NavItem;
