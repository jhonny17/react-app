import React, { useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import LogoIcon from '../icons/LogoIcon';

import navbarCss from '../styles/components/Navbar.module.scss';

import { ROOT_PAGE } from '../navigation/app/navigation-link';

import useNavbarItems from '../hooks/useNavbarItems';
import useWindowSizes from '../hooks/useWindowSizes';

const {
  navbar,
  logo: logoClassName,
  'nav-item': navItemClassName,
  'nav-link': navLinkClassName,
  active: activeNavItemClassName,
  'navbar-logo-container': navbarLogoContainerClassName,
  'navbar-main-container': navbarMainContainerClassName,
} = navbarCss;

const Navbar = () => {
  const { pathname } = useLocation();
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

    const newNavbarHeight = isMonitor
      ? `${(navbarRef.current?.clientHeight ?? 0) + 10}px`
      : '';

    if (bodyTag.style.paddingTop === newNavbarHeight) return;
    bodyTag.style.paddingTop = newNavbarHeight;
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
          {visibleNavbarItems.map(({ id, url, display, icon: Icon }) => {
            const className =
              url === pathname
                ? `${navItemClassName} ${activeNavItemClassName}`
                : navItemClassName;

            return (
              <li key={id} className={className} title={display}>
                <Link to={url} className={navLinkClassName}>
                  {Icon ? isMonitor ? display : <Icon size={35} /> : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
