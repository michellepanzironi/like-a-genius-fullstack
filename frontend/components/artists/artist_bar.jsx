import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

const ArtistBar = props => {

  const song = props.song || { };
  const artist = props.artist || { };

  let barBackground;
  let barImage;
  let barInfo;
  if(isEmpty(song)) {
    barBackground = (
      <div className="bar-background">
        <img src={artist.photo} className="bar-background-image" />
      </div>
    )
    barImage = (
      <div className="bar-thumb-container">
        <img className="bar-thumb" src={artist.photo}/>
      </div>
    )
    barInfo = (
      <div className="bar-info">
        <Link to={`/artists/${artist.id}`}>
          <h1 className="bar-artist-name">{artist.name}</h1>
        </Link>
      </div>
    )
  } else {
    barBackground = (
      <div className="bar-background">
        <img src={song.album_cover} className="bar-background-image" />
      </div>
    )
    barImage = (
      <div className="bar-thumb-container">
        <img className="bar-thumb" src={song.album_cover}/>
      </div>
    )
    barInfo = (
      <div className="bar-info">
        <h1 className="song-bar-title">{song.title}</h1>
        <Link
          to={`/artists/${artist.id}`}
          className="bar-info-link">
          <h2 className="bar-artist-name">
            {artist.name}
          </h2>
        </Link>
        <h2>{song.album}</h2>
      </div>
    )
  }

  return(
    <div className="bar">
      {barBackground}
      <div className="bar-foreground-container">
        {barImage}
        {barInfo}
      </div>
    </div>
  );
};

export default withRouter(ArtistBar);
