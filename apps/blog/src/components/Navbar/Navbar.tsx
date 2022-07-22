import React, { RefObject } from 'react';
import style from './Navbar.module.scss';

const { navbar: navbarClassName } = style;

type NavbarProps = {
  navbarRef?: RefObject<HTMLElement> | null;
};

const Navbar = ({ navbarRef }: NavbarProps) => (
  <nav className={navbarClassName} data-testid={'primary-navbar'} ref={navbarRef}>
    <div>Brand</div>
  </nav>
);

Navbar.defaultProps = {
  navbarRef: null,
};

export default Navbar;
