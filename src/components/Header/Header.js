import React from 'react';
import './Header.css';
import Logo from './images/logo.png';

function Header() {
  return (
    <div className="App">
      <header>
        <div class="hero">
          <img src={Logo} alt="cookbook" />
          <h1> Futuristic Cookbook</h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
