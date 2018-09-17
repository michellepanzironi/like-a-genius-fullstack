import { merge } from 'lodash';
import {
  RECEIVE_ALL_SONGS,
  RECEIVE_SONG,
  REMOVE_SONG
} from '../../actions/song_actions';
// import { RECEIVE_ARTIST } from '../../actions/artist_actions';

const SongsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SONGS:
      return merge({}, state, action.songs);
    case RECEIVE_SONG:
      return merge({}, state, { [action.song.id]: action.song });
    case REMOVE_SONG:
      newState = state;
      delete newState[action.songId];
      return newState;
    default:
      return state;
  }
};

export default SongsReducer;
