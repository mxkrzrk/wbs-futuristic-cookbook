import React from 'react';
import './Main.css';

const Main = ({ children }) => {
  return (
    <div className="d-md-flex justify-content-md-center align-items-md-center main-blog flex-wrap">
      {children}
    </div>
  );
};

export default Main;
