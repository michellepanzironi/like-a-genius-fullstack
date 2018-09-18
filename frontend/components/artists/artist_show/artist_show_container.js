import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import {
  fetchArtist,
  fetchArtists } from '../../../actions/artist_actions';


const msp = (state, ownProps) => {
  return ({
    id: ownProps.match.params.artistId,
    artist: state.entities.artists[ownProps.match.params.artistId]
  });
};

const mdp = dispatch => {
  return ({
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    fetchArtists: () => dispatch(fetchArtists()),
  });
};

export default connect(msp, mdp)(ArtistShow);
