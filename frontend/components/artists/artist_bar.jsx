import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

const ArtistBar = ownProps => {

  const song = ownProps.song || { };
  const artist = ownProps.artist || { };

  let barInfo;
  if(isEmpty(song)) {
    barInfo = (
      <div className="song-bar-info">
        <h1 className="song-bar-artist">{artist.name}</h1>
      </div>
    )
  } else {
    barInfo = (
      <div className="song-bar-info">
        <h1 className="song-bar-title">{song.title}</h1>
        <h2 className="song-bar-artist">
          <Link to={`/artists/${artist.id}`}>
            {artist.name}
          </Link>
        </h2>
        <h2>{song.album}</h2>
      </div>
    )
  }

  return(
    <div className="artist-bar">
      <div className="artist-bar-background">
        <img src={song.album_cover} className="artist-bar-image" />
      </div>
      <div className="artist-image-container">
        <img className="artist-image" src={artist.img_url}/>
        {barInfo}
      </div>
    </div>
  );
};

export default withRouter(ArtistBar);
