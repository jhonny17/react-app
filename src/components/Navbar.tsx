import React from 'react';

import logo from '../assets/images/icon.svg';
import navbarCss from '../assets/styles/components/Navbar.module.scss';

const {
  navbar,
  logo: logoClassName,
  'navbar-logo-container': navbarLogoContainer,
  'navbar-main-container': navbarMainContainer,
} = navbarCss;

const Navbar = () => (
  <div className={navbar}>
    <div className={navbarLogoContainer}>
      <img src={logo} className={logoClassName} alt="React App Logo" />
    </div>
    <div className={navbarMainContainer}>Main</div>
  </div>
);

export default Navbar;
