import React from 'react';
import { Link } from 'react-router-dom';

const SongIndexItem = ({ song }) => {
  return (
    <Link to={`/songs/${song.id}`}>
      <li className="song-index-item">
        {song.title} by {song.artist.name} on {song.album}
      </li>
    </Link>
  );
};

export default SongIndexItem;
