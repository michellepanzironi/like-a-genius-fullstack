import { merge } from 'lodash';
import { RECEIVE_RANDOM_SONGS } from '../../actions/song_actions';

const RandomSongsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RANDOM_SONGS:
      return action.songs;
    default:
      return state;
  }
};

export default RandomSongsReducer;
