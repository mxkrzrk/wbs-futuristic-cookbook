import React from 'react';
import './Main.css';

const Main = ({ children }) => {
  return (
    <div className="d-lg-flex justify-content-lg-center align-items-lg-center main-blog">
      {children}
    </div>
  );
};

export default Main;
