import { merge } from 'lodash';
import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from '../../actions/artist_actions';
import { RECEIVE_ALL_SONGS, RECEIVE_SONG } from '../../actions/song_actions';

const ArtistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ARTISTS:
    case RECEIVE_ALL_SONGS:
      return merge({}, state, action.artists);
    case RECEIVE_ARTIST:
    case RECEIVE_SONG:
      return merge({}, state, { [action.artist.id]: action.artist });
    default:
      return state;
  }
};

export default ArtistsReducer;
