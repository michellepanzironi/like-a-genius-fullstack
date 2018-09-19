import React from 'react';
import { Link } from 'react-router-dom';

const SongIndexItem = ({ song }) => {
  return (
    <Link to={`/songs/${song.id}`}>
      <li className="index-item">
        <img
          src={`${song.album_cover}`}
          className="index-item-thumb" />
        <div classname="index-item-left">
          <span className="index-item-main">{song.title}</span>
          <br />
          <span className="index-item-sub">
            {song.artist.name} | {song.album}
          </span>
        </div>
      </li>
    </Link>
  );
};

export default SongIndexItem;
