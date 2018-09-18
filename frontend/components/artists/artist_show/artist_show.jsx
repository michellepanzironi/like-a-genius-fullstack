import React from 'React';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
// import { isEmpty } from 'lodash';
//import ArtistBar from '../../artists/artist_bar';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
  }

  render() {
    return (
      <div className="background">
        <div className="foreground">
          <div className="">
            <h1 className="">{this.props.artist.name}</h1>
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
