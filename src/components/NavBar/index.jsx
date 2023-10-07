import React from 'react';
import { Link } from 'react-router-dom';
import { navItem } from '../../constants';
import './index.scss';

const NavBar = () => {
  return (
    <div className="navbar-outer">
      {navItem.map((item, i) => (
        <Link className="navbar-item" key={`nav-item-${i}`} to={item.path}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
