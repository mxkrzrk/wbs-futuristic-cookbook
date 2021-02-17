import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobNav.css';
import Navbar from 'react-bootstrap/Navbar';

const MobNav = () => {
  return (
    <div className="container-sm d-block d-lg-none">
      <Navbar id="mob-nav" fixed="bottom">
        <ul className="navbar-nav">
          <li className="nav-item col-6">
            <NavLink className="nav-link" activeClassName="navmob-selected" to="/" exact>
              Articles
            </NavLink>
          </li>
          <li className="nav-item col-6">
            <NavLink className="nav-link" activeClassName="navmob-selected" to="/categories">
              Categories
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
};

export default MobNav;
