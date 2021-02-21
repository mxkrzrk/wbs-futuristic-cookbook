import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
  return (
    <div>
      <Navbar.Brand
        className="inline-flex main-nav d-none d-lg-block"
        fixed="bottom"
      >
        
        <ul className="navbar-nav d-flex justify-content-between align-items-center">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="nav-selected"
              to="/"
              exact
            >
              Articles
            </NavLink>
          </li>
          <FontAwesomeIcon icon={faUserAstronaut} className="main-nav-icon"/>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="nav-selected"
              to="/categories"
              exact
            >
              Categories
            </NavLink>
          </li>
        </ul>
      </Navbar.Brand>
    </div>
  );
};

export default Nav;
