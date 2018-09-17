import { merge } from 'lodash';
import { RECEIVE_NEWEST_SONGS } from '../../actions/song_actions';

const NewSongsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEWEST_SONGS:
      return action.songs;
    default:
      return state;
  }
};

export default NewSongsReducer;
