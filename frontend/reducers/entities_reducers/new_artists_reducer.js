import { merge } from 'lodash';
import { RECEIVE_NEWEST_ARTISTS } from '../../actions/artist_actions';

const NewArtistsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEWEST_ARTISTS:
      return action.artists;
    default:
      return state;
  }
};

export default NewArtistsReducer;
