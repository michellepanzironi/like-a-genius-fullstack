import React from 'react';
import { Route, Link } from 'react-router-dom';
import FrontPageItemContainer from './front_page_item/front_page_item_container';
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
          key={`random-song-item-${idx}`}>
          <Link to={`/songs/${song.id}`}>
            <p className="feature-song-text">
              <span className="feature-song-title">
                {song.title}
              </span>
            </p>
            <br/>
            <p className="feature-song-text">
              <span className="feature-song-artist">
                {song.artist_name}
              </span>
            </p>
            <img className="feature-song-image" src={ song.album_cover } />
          </Link>
        </div>
      );
    });

    const newSongList = this.props.newestSongs.map((song, idx) => {
      return (
        <li
          className="front-page-featured-item"
          key={`front-page-featured-item-${idx}`}>
          <FrontPageItemContainer
            key={`new-song-item-${idx}`}
            index={parseInt(idx)+1}
            songInfo = { this.props.newestSongs[idx] } />
          <hr
            className="new-song-list-line"
            key={`front-page-line-${idx}`} />
        </li>
      );
    });

    return (
      <div>
        <div>
          <section>

            <div className="front-page-above-fold">
              {randomSongFeatures}
            </div>

            <div className="front-page-below-fold">
              <h2 className="front-page-header">LATEST</h2>
              <hr className="new-song-header-line" />
              <ul className="front-page-list-container">
                {newSongList}
              </ul>
            </div>

          </section>
        </div>
      </div>
    );
  }
}

export default FrontPage;
