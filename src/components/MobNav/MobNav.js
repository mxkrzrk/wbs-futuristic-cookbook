import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';

const MobNav = () => {
  return (
    <div className="container-sm d-block d-lg-none">
      <Navbar className="mob-nav" fixed="bottom">
        <ul className="navbar-nav mob-nav-box d-flex justify-content-between align-items-center">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="navmob-selected"
              to="/"
              exact
            >
              Articles
            </NavLink>
          </li>
          <FontAwesomeIcon icon={faUserAstronaut} className="navmob-icon" />
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="navmob-selected"
              to="/categories"
              exact
            >
              Categories
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
};

export default MobNav;
