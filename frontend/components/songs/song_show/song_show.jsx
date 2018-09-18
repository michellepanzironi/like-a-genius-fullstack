import React from 'React';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
// import { isEmpty } from 'lodash';
//import ArtistBar from '../../artists/artist_bar';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.song;
  }

  componentWillMount() {
    this.props.fetchSong(this.props.match.params.songId);
  }

  getLyrics() {
    return this.state.lyrics;
  }

  render() {

    return (
      <div className="background">
        <div className="foreground">
          <div className="show-lyrics">
            <h1 className="show-lyrics-title">{this.state.title}</h1>
            <div className="lyrics-container">
              <p>{this.state.lyrics}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SongShow);
