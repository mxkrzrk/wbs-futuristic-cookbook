import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../../Images/logo.png';
import Nav from '../Nav/Nav';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <header className="header">
      {isDesktop ? (
        <div className="col-12 d-flex justify-content-around align-items-center">
          <div className="hero">
            <img src={Logo} alt="cookbook" />
            <h1> Futuristic Cookbook</h1>
          </div>
          <Nav />
        </div>
      ) : (
        <div className="hero col-12">
          <img src={Logo} alt="cookbook" />
          <h1> Futuristic Cookbook</h1>
        </div>
      )}
    </header>
  );
};

export default Header;