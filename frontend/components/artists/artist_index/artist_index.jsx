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
          <div className="index-container">
            <h1 className="index-section-label">ALL ARTISTS</h1>
            <ul className="index-list">
              {artistList}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default ArtistIndex;
