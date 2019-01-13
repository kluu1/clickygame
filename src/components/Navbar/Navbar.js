import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <ul>
      <li class="brand">
        <p>Clicky Game</p>
      </li>
      <li id="guess" />
      <li>
        Score: {props.score} | Top Score: {props.highScore}
      </li>
    </ul>
  </nav>
);

export default Navbar;
