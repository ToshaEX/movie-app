import React, { lazy } from 'react';

const NavBar = lazy(() => import('../components/NavBar'));

const Layout = ({ children, isLoading }) => {
  console.log(isLoading);
  return (
    <main className="main-outer">
      <NavBar />
      {
        //TODO: Add loading animation
        isLoading ? <div>Loading</div> : children
      }
    </main>
  );
};

export default Layout;