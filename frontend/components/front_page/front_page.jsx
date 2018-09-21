import React from 'react';
import { Route, Link } from 'react-router-dom';
import FrontPageItem from './front_page_item';
import { isEmpty } from 'lodash';

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    if(isEmpty(this.props.newestSongs)) this.props.fetchNewestSongs();
    if(isEmpty(this.props.randomSongs)) this.props.fetchRandomSongs();
  }

  componentDidMount() {
    this.props.fetchNewestSongs();
    this.props.fetchRandomSongs();
  }

  render() {
    const randomSongFeatures = this.props.randomSongs.map((song, idx) => {
      return (
        <div className={`front-page-feature-${idx}`}
          key={`${idx}`}>
          <Link to={`/songs/${song.id}`}>
            <img className="feature-song-image" src={ song.album_cover } />
            <div className="feature-song-text">
                <h2 className="feature-song-title">{song.title}</h2>
                <h3 className="feature-song-artist">{song.artist_name}</h3>
            </div>
          </Link>
        </div>
      );
    });

    const newSongList = this.props.newestSongs.map((song, idx) => {
      return (
        <li
          className="front-page-featured-item"
          key={`front-page-featured-item-${idx}`}>
          <FrontPageItem
            key={`new-song-item-${idx}`}
            index={parseInt(idx)+1}
            songInfo = { this.props.newestSongs[idx] } />
          <hr
            className="new-song-list-line"
            key={`front-page-line-${idx}`} />
        </li>
      );
    });

    const tempSongList = this.props.newestSongs.map((song, idx) => {
      return (
        <div className="front-page-other-rando" key={`${idx}`}>
          <Link to={`/songs/${song.id}`}>
            <img className="feature-song-image" src={ song.album_cover } />
            <div className="feature-song-text">
              <h3 > NEW </h3>
              <h2 className="feature-song-title">{song.title}</h2>
              <h3 className="feature-song-artist">{song.artist_name}</h3>
            </div>
          </Link>
        </div>
      )
    })

    return (
      <div>
        <div className="front-page-container">
          <section className="front-page-section">

            <div className="front-page-above-fold">
              {randomSongFeatures}
              <div className="front-page-other-holder">
                {tempSongList}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default FrontPage;
