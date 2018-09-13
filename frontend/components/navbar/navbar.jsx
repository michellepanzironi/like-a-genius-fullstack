import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
// add <Greeting /> here to include
// currentUser.username & logout button if signed in
// OR signup/login modals if logged out

const Navbar = props => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <section className="nav-logo">
          <Link to="/">LIKE A GENIUS</Link>
        </section>
        <section className="nav-greeting">
          <GreetingContainer />
        </section>
      </div>
      <div className="navbar-bottom">
        <Link className="nav-link" to="#/artists/">ARTISTS</Link>
        <Link className="nav-link" to="#/songs/">SONGS</Link>
        <span> | </span>
        <Link className="nav-link" to="#/songs/new">ADD SONG</Link>
        <Link className="nav-link" to="#/artists/new">ADD ARTIST</Link>
      </div>
    </nav>
  );
};

export default Navbar;
