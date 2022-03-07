import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import navbarStyle from './Navbar.module.scss';

import { ROOT_PAGE } from 'navigation/app/navigation-link';

import NavItem from 'components/NavItem';
import LogoIcon from 'icons/LogoIcon';

import useNavbarItems from 'hooks/useNavbarItems';
import useWindowSizes from 'hooks/useWindowSizes';
import { useAuthContext } from 'contexts/AuthContext';

const {
  navbar,
  logo: logoClassName,
  'navbar-logo-container': navbarLogoContainerClassName,
  'navbar-main-container': navbarMainContainerClassName,
} = navbarStyle;

const Navbar = () => {
  const { logOut } = useAuthContext();
  const { isMonitor } = useWindowSizes();
  const navbarRef = useRef<HTMLElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const { unavailableWidth, setUnavailableWidth, visibleNavbarItems } = useNavbarItems();

  const beforeSetUnavailableWidth = () => {
    const newUnavailableWidth = logoContainerRef.current?.clientWidth ?? 0;
    if (unavailableWidth === newUnavailableWidth) return;
    setUnavailableWidth(newUnavailableWidth);
  };

  const setBodyPadding = () => {
    const bodyTag = document.getElementsByTagName('body')[0];

    const newNavbarHeight = `${(navbarRef.current?.clientHeight ?? 0) + 10}px`;

    if (isMonitor && bodyTag.style.paddingTop === newNavbarHeight) return;
    if (!isMonitor && bodyTag.style.paddingBottom === newNavbarHeight) return;

    bodyTag.style.paddingTop = isMonitor ? newNavbarHeight : '';
    bodyTag.style.paddingBottom = !isMonitor ? newNavbarHeight : '';
  };

  useEffect(() => {
    beforeSetUnavailableWidth();
  }, []);

  useEffect(() => {
    setBodyPadding();
  });

  return (
    <nav className={navbar} ref={navbarRef}>
      <div className={navbarLogoContainerClassName} ref={logoContainerRef}>
        <Link to={ROOT_PAGE}>
          <LogoIcon size={35} className={logoClassName} />
        </Link>
      </div>
      <div className={navbarMainContainerClassName}>
        <ul>
          {visibleNavbarItems.map((navItemProps) => (
            <NavItem key={navItemProps.id} {...navItemProps} />
          ))}
          <NavItem id={'logout'} display={'Log out'} onClick={logOut} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
