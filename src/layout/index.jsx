import React, { Suspense, lazy } from 'react';
import Loading from '../components/Loading';
import './index.scss';

const NavBar = lazy(() => import('../components/NavBar'));

const Layout = ({ children, isLoading }) => {
  return (
    <main className="main-outer">
      <NavBar />
      {isLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>{children}</Suspense>
      )}
    </main>
  );
};

export default Layout;
