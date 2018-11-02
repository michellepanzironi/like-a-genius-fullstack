import { merge } from 'lodash';
import {
  RECEIVE_SONG_ERRORS,
  RECEIVE_ALL_SONGS,
  RECEIVE_SONG
} from '../../actions/song_actions';

const _nullErrors = [];

const songErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONG_ERRORS:
      return merge([], state, action.errors);
      case RECEIVE_SONG:
      case RECEIVE_ALL_SONGS:
      return _nullErrors;
    default:
      return state;
  }
};

export default songErrorsReducer;
