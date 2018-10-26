import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

const Navbar = props => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div></div>
        <Link to="/">
          <h3 className="nav-logo">
            LIKE A GENIUS
          </h3>
        </Link>
        <section className="nav-greeting">
          <GreetingContainer />
        </section>
      </div>
      <div className="navbar-bottom">
        <Link className="nav-link" to="/artists">ALL ARTISTS</Link>
        <span className="nav-link"> | </span>
        <Link className="nav-link" to="/songs">ALL SONGS</Link>
        <span className="nav-link"> | </span>
        <Link className="nav-link" to="/songs/new">ADD A SONG</Link>
      </div>
    </nav>
  );
};

export default Navbar;
