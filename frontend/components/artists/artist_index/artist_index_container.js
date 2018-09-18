import { connect } from 'react-redux';
import ArtistIndex from './artist_index';
import { fetchArtists } from '../../../actions/artist_actions';

const msp = state => {
  return ({
    artists: Object.values(state.entities.artists)
  });
};

const mdp = dispatch => {
  return ({
    fetchArtists: () => dispatch(fetchArtists())
  });
};

export default connect(msp, mdp)(ArtistIndex);
