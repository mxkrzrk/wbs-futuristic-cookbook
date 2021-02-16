import React from 'react';
import './Header.css';
import Logo from '../../Images/logo.png';
import Nav from '../Nav/Nav';

function Header() {
  return (
    <header >
      <div className="hero col-12">
        <img src={Logo} alt="cookbook"/>
        <h1> Futuristic Cookbook</h1>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
