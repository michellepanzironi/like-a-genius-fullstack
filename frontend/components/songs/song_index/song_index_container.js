import { connect } from 'react-redux';
import SongIndex from './song_index';
import { fetchSongs } from '../../../actions/song_actions';

const msp = state => {
  return ({
    songs: Object.values(state.entities.songs)
  });
};

const mdp = dispatch => {
  return ({
    fetchSongs: () => dispatch(fetchSongs())
  });
};

export default connect(msp, mdp)(SongIndex);
