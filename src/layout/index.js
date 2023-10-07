import React, { lazy } from 'react';

const NavBar = lazy(() => import('../components/NavBar'));

const Layout = ({ children }) => {
  return (
    <main className="main-outer">
      <NavBar />
      {children}
    </main>
  );
};

export default Layout;
