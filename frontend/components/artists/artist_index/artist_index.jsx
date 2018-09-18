import React from 'react';
import { Link } from 'react-router-dom';
import ArtistIndexItem from './artist_index_item';
import { isEmpty } from 'lodash';


class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    const artistList = this.props.artists.map((artist, idx) => {
      return (
        <ArtistIndexItem
          key={idx}
          artist={artist} />
      );
    });

    return (
      <div className="background">
        <section className="foreground">
          <div className="artist-index-container">
            <h1>ALL ARTISTS</h1>
            <hr />
            <ul className="artist-index-list">
              {artistList}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default ArtistIndex;
