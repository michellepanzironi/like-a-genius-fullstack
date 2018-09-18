import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({ artist }) => {
  return (
    <Link to={`/artists/${artist.id}`}>
      <li className="artist-index-item">
        {artist.name}
      </li>
    </Link>
  );
};

export default ArtistIndexItem;
