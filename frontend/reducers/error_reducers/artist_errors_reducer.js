import { merge } from 'lodash';
import { RECEIVE_ARTISTS_ERRORS } from '../../actions/artist_actions';

const _nullErrors = [];

const artistErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST_ERRORS:
      return merge([], state, action.errors);
    case RECEIVE_CURRENT_USER:
    case LOGOUT_CURRENT_USER:
      return _nullErrors; //clears errors
    default:
      return state;
  }
};

export default artistErrorsReducer;
