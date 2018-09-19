import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({ artist }) => {
  return (
    <Link to={`/artists/${artist.id}`}>
      <li className="index-item">
        <img
          src={`${artist.img_url}`}
          className="index-item-thumb" />
        <div className="index-item-left">
          <span className="index-item-main">{artist.name}</span>
        </div>
      </li>
    </Link>
  );
};

export default ArtistIndexItem;
