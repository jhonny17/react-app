import React, { useMemo } from 'react';
import Navbar from '@mono-repo/blog/components/Navbar';
import style from './Layout.module.scss';
import useRefAttribute from '@mono-repo/blog/hooks/useRefAttribute';

const { layout: layoutClassName } = style;

const DEFAULT_HEIGHT = 0;

const DefaultLayout = () => {
  const [headerRef, headerHeight] = useRefAttribute<number>(
    'clientHeight',
    DEFAULT_HEIGHT
  );

  const [navbarRef, navbarHeight] = useRefAttribute<number>(
    'clientHeight',
    DEFAULT_HEIGHT
  );

  const headerUsedSpace = useMemo<number>(
    () => (headerHeight ?? DEFAULT_HEIGHT) + (navbarHeight ?? DEFAULT_HEIGHT),
    [headerHeight, navbarHeight]
  );

  return (
    <div className={layoutClassName}>
      <header ref={headerRef}>
        <Navbar navbarRef={navbarRef} />
      </header>
      <main style={{ paddingTop: `${headerUsedSpace}px` }}>App</main>
    </div>
  );
};

export default DefaultLayout;
