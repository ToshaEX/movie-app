import React, { lazy } from 'react';
import './index.scss';

const Loading = lazy(() => import('../components/Loading'));
const NavBar = lazy(() => import('../components/NavBar'));

const Layout = ({ children, isLoading }) => {
  console.log(isLoading);
  return (
    <main className="main-outer">
      <NavBar />
      {isLoading ? <Loading /> : children}
    </main>
  );
};

export default Layout;
