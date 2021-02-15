import React from 'react';
import './App.css';
import MobNav from './MobNav';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="header">
            <span className="logo">Futuristic Cookbook</span>
          </div>
        </header>
        <footer>
          <MobNav>
            {/* <Switch>
              <Route 
                path="/articles"
                render={(props) => <Articles articles={articles} {props} />}
              />
              <Route 
                path="/categories"
                render={(props) => <Categories categories={categories} {props} />}
              />
            </Switch> */}
          </MobNav>
        </footer>
      </div>
    </div>
  );
}

export default App;
