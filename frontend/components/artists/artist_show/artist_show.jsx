import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ArtistBar from '../artist_bar';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
  }



  render() {
    return (
      <div className="background">
        <ArtistBar
          artist={this.props.artist}
           />
        <div className="foreground">
          <div className="">
            <h1 className="show-section-label">{this.props.artist.name}</h1>
            <ul className="song-show-list-container">
              <p>songList goes here</p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArtistShow);
