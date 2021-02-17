import React from 'react';
import './Nav.css';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {

  return (
    <div>
      <Navbar.Brand id="main-nav" className="inline-flex d-none d-lg-block">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Articles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Categories
            </a>
          </li>
        </ul>
      </Navbar.Brand>
    </div>
  );
};

export default Nav;
