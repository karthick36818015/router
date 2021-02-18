import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <nav>
      <Link style={navStyle} to='/'>
      <h3><img src="data:image/jpeg;base64,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"/></h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to='/Trending'>
          <li>Trending</li>
        </Link>
        <Link style={navStyle} to='/payment'>
          <li>payment</li>
        </Link>
        <Link style={navStyle} to='/contact'>
          <li>contact</li>
        </Link>
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;