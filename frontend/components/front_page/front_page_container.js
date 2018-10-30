import { connect } from 'react-redux';
import { fetchRandomSongs, fetchNewestSongs } from '../../actions/song_actions';
import { fetchNewestArtists } from '../../actions/artist_actions';
import FrontPage from './front_page';

const msp = state => {
  const newestSongs = Object.values(state.entities.newestSongs);
  const randomSongs = Object.values(state.entities.randomSongs);
  const newestArtists = Object.values(state.entities.newestArtists);
  return {
    newestSongs,
    randomSongs,
    newestArtists
  };
};

const mdp = dispatch => {
  return ({
    fetchNewestSongs: () => dispatch(fetchNewestSongs()),
    fetchRandomSongs: () => dispatch(fetchRandomSongs()),
    fetchNewestArtists: () => dispatch(fetchNewestArtists()),
  });
};

export default connect(msp, mdp)(FrontPage);
