import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexItem from './song_index_item';
import { isEmpty } from 'lodash';


class SongIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const songList = this.props.songs.map((song, idx) => {
      return (
        <SongIndexItem
          key={idx}
          song={song}
          artist={song.artist} />
      );
    });

    return (
      <div className="background">
        <section className="foreground">
          <div className="index-container">
            <h1 className="index-section-label">ALL SONGS</h1>
            <ul className="index-list">
              {songList}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default SongIndex;
