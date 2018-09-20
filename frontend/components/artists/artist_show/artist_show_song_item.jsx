import React from 'react';
import { Link } from 'react-router-dom';

const ArtistShowSongItem = props => {
  return (
    <Link to={`songs/${props.song.id}`}>
      <li className="index-item">
        <img
          src={`${props.song.album_cover}`}
          className="index-item-thumb" />
        <div className="index-item-left">
          <span className="index-item-main">{props.song.title}</span>
        </div>
      </li>
    </Link>
  );
};

export default ArtistShowSongItem;
