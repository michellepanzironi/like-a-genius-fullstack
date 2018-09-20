import { connect } from 'react-redux';
import SongIndex from './song_index';
import { fetchSongs } from '../../../actions/song_actions';

const msp = state => {
  const songs = Object.values(state.entities.songs);
  const artists = {};
  songs.forEach(song => {
    artists[song.artist_id] = state.entities.artists[song.artist_id];
  });

  return ({
    songs,
    artists
  });
};

const mdp = dispatch => {
  return ({
    fetchSongs: () => dispatch(fetchSongs())
  });
};

export default connect(msp, mdp)(SongIndex);
