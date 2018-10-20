import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-background">
      <div className="footer-container">
        <div className="footer-left">
          <Link to="/songs" className="footer-index-link">ALL SONGS</Link>
          <Link to="/artists" className="footer-index-link">ALL ARTISTS</Link>
        </div>
        <div className="footer-right">
          <div className="footer-blurb">
            <span>A React app
              inspired by <a href="https://www.genius.com">Genius.com</a></span>
            <br />
            <span>by <a href="">Michelle Panzironi</a></span>
          </div>
          <div className="social-links">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
