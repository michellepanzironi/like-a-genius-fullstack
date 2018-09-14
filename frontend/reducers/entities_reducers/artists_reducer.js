import { merge } from 'lodash';
import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from '../../actions/artist_actions';

const ArtistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ARTISTS:
      return merge({}, state, action.artists);
    case RECEIVE_ARTIST:
      return merge({}, state, { [action.artist.id]: action.artist });
    default:
      return state;
  }
};

export default ArtistsReducer;
