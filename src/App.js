import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Main from './Components/Main';



export default function App() {

  return (
    <Router>
      <aside>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="activeRoute" exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeRoute" to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>

        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

 

function About() {
  return (
    <div style={{ width: "70vw" }}>
      <h2>About</h2>;
    </div>

  )
}


