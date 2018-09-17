import { connect } from 'react-redux';
import { fetchRandomSongs, fetchNewestSongs } from '../../actions/song_actions';
import FrontPage from './front_page';

const msp = state => {
  const newestSongs = Object.values(state.entities.newestSongs);
  const randomSongs = Object.values(state.entities.randomSongs);
  return { newestSongs, randomSongs };
};

const mdp = dispatch => {
  return ({
    fetchNewestSongs: () => dispatch(fetchNewestSongs()),
    fetchRandomSongs: () => dispatch(fetchRandomSongs()),
  });
};

export default connect(msp, mdp)(FrontPage);
