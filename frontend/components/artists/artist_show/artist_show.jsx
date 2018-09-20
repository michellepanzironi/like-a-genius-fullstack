import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ArtistBar from '../artist_bar';
import ArtistShowSongItem from './artist_show_song_item';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId);
  }

  render() {
    const songList = this.props.songs.map((song, idx) => {
      return <ArtistShowSongItem
        key={idx}
        song={song}/>
    });
    return (
      <div className="background">
        <ArtistBar
          artist={this.props.artist}
           />
        <div className="foreground">
          <div className="index-container">
            <h1 className="show-section-label">ALL SONGS</h1>
            <ul className="index-list">
              {songList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArtistShow);
