import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ArtistBar from '../../artists/artist_bar';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId);
  }

  getLyrics() {
    return this.props.song.lyrics;
  }

  render() {
    return (
      <div className="background">
        <ArtistBar
          song={this.props.song}
          artist={this.props.song.artist} />
        <div className="foreground">
          <div className="show-lyrics">
            <div className="lyrics-container">
              <p>{this.props.song.lyrics}</p>
            </div>
          </div>
          <div className="annotation-column">

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SongShow);
