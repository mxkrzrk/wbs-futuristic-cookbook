import React from 'react';
import './App.css';
import Logo from './Images/logo.png'


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