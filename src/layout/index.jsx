import React, { Suspense, lazy } from 'react';
import './index.scss';

const Loading = lazy(() => import('../components/Loading'));
const NavBar = lazy(() => import('../components/NavBar'));

const Layout = ({ children, isLoading }) => {
  console.log(isLoading);
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
