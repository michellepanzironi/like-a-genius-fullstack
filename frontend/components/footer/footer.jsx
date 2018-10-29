import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="footer-background">
      <div className="footer-container">
        <div className="footer-left">
          <Link to="/songs" className="footer-index-link">
            ADD NEW SONG</Link>
        </div>
        <div className="footer-middle">
          <a href="https://linkedin.com/in/michellepanzironi"
            className="footer-middle-item">LinkedIn</a>
          <a href="https://github.com/michellepanzironi"
            className="footer-middle-item">Github</a>
           <a href="https://michellepanzironi.com"
             className="footer-middle-item">Portfolio</a>
        </div>
        <div className="footer-right">
          <div className="footer-blurb">
            <span>Built with React</span>
            <br />
            <span>By <a href="">Michelle Panzironi</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
