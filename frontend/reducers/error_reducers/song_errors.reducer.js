import { merge } from 'lodash';
import { RECEIVE_SONG_ERRORS } from '../../actions/song_actions';

const _nullErrors = [];

const songErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONG_ERRORS:
      return merge([], state, action.errors);
    case RECEIVE_CURRENT_USER:
    case LOGOUT_CURRENT_USER:
      return _nullErrors; //clears errors
    default:
      return state;
  }
};

export default songErrorsReducer;
