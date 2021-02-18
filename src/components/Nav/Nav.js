import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
  return (
    <div>
      <Navbar.Brand
        className="inline-flex main-nav d-none d-lg-block"
        fixed="bottom"
      >
        <ul className="navbar-nav">
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
