import React from 'react';
import { Link } from 'react-router-dom';

const FrontPageItem = ({ song }) => {
  return (
      <Link to={`/songs/${song.id}`}>
        <li className="front-page index-item">
          <img
            src={`${song.album_cover}`}
            className="index-item-thumb" />
          <div className="index-item-left">
            <span className="index-item-main">{song.title}</span>
            <br />
            <span className="index-item-sub">
              Artist | Album
            </span>
          </div>
        </li>
      </Link>
  );
};

export default FrontPageItem;
