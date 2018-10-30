import React from 'react';
import { Route, Link } from 'react-router-dom';
import FrontPageItem from './front_page_item';
import { isEmpty } from 'lodash';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    if(isEmpty(this.props.newestSongs)) this.props.fetchNewestSongs();
    if(isEmpty(this.props.randomSongs)) this.props.fetchRandomSongs();
    if(isEmpty(this.props.newestArtists)) this.props.fetchNewestArtists();
  }

  componentDidMount() {
    this.props.fetchNewestSongs();
    this.props.fetchRandomSongs();
    this.props.fetchNewestArtists();
  }

  render() {
    const randomSongFeature = this.props.randomSongs.map((song, idx) => {
      return (
        <div className="front-page random-song-feature"
          key={`${idx}`}>
          <Link to={`/songs/${song.id}`}>
            <img className="front-page random-song-image" src={ song.album_cover } />
            <div className="random-song feature-text">
                <h2 className="random-song-title">{song.title}</h2>
                <h3 className="random-song-artist">{song.artist_name}</h3>
            </div>
          </Link>
        </div>
      );
    });

    const newArtistFeatures = this.props.newestArtists.map((artist, idx) => {
      return (
        <div className="front-page new-artist-item" key={`${idx}`}>
          <Link to={`/artists/${artist.id}`}>
            <img className="front-page feature-image" src={ artist.photo } />
            <div className="front-page feature-text">
              <h2>{artist.name}</h2>
            </div>
          </Link>
        </div>
      )
    })

    const newSongsList = this.props.newestSongs.map((song, idx) => {
      return (
        <FrontPageItem
          key={idx}
          song = { this.props.newestSongs[idx] } />
      );
    });

    return (
      <div>
        <div className="front-page-container">

          <section className="front-page-section">

            <div className="front-page above-thumbnails">
              <h2 className="random-song-header section-header">HERE'S A RANDOM SONG</h2>
              <h2 className="new-artists-header section-header">NEW ARTISTS</h2>
            </div>

            <div className="front-page-above-fold">
              {randomSongFeature}
              <div className="front-page new-artists-section">
                {newArtistFeatures}
              </div>
            </div>
          </section>

          <div className="front-page new-songs">
            <h2 className="new-songs section-header">NEWEST SONGS</h2>
            <ul className="front-page index-list">
              {newSongsList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
