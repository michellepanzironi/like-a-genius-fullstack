import React from 'react';
import { Link } from 'react-router-dom';

const ArtistShowSongItem = () => {
  return (
    <li className="artist-song-index-item">
      <Link
        className="artist-song-index-item-link"
        to={`songs/${songId}`}>
        {this.props.song.title}
      </Link>
    </li>
  );
};

export default ArtistShowSongItem;
