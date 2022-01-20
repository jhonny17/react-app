import React, { createRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import navbarCss from '../assets/styles/components/Navbar.module.scss';

import logo from '../assets/images/icon.svg';
import useNavbarItems from '../hooks/useNavbarItems';
import { ROOT_PAGE } from '../configs/navigation-link';

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
  const logoContainerRef = createRef<HTMLDivElement>();
  const { unavailableWidth, setUnavailableWidth, visibleNavbarItems } = useNavbarItems();

  useEffect(() => {
    const newUnavailableWidth = logoContainerRef.current?.clientWidth ?? 0;
    if (unavailableWidth === newUnavailableWidth) return;
    setUnavailableWidth(newUnavailableWidth);
  }, []);

  return (
    <nav className={navbar}>
      <div className={navbarLogoContainerClassName} ref={logoContainerRef}>
        <Link to={ROOT_PAGE}>
          <img src={logo} className={logoClassName} alt="React App Logo" />
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
                  {Icon ? <Icon size={35} /> : null}
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
