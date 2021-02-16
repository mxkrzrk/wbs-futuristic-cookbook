import React from 'react';
import './Header.css';
import Logo from '../../Images/logo.png';

function Header() {
  return (
    <header>
      <div className="hero">
        <img src={Logo} alt="cookbook" />
        <h1> Futuristic Cookbook</h1>
      </div>
    </header>
  );
}

export default Header;
