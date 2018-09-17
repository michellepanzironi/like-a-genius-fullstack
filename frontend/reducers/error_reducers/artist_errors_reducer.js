import { merge } from 'lodash';
import {
  RECEIVE_ARTIST_ERRORS,
  RECEIVE_ARTIST,
  RECEIVE_ALL_ARTISTS
} from '../../actions/artist_actions';

const _nullErrors = [];

const artistErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST_ERRORS:
      return merge([], state, action.errors);
    case RECEIVE_ARTIST:
    case RECEIVE_ALL_ARTISTS:
      return _nullErrors; //clears errors
    default:
      return state;
  }
};

export default artistErrorsReducer;
