import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import artistsReducer from './artists_reducer';
import SongsReducer from './songs_reducer';
import NewSongsReducer from './new_songs_reducer';
import RandomSongsReducer from './random_songs_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  artists: artistsReducer,
  songs: SongsReducer,
  newestSongs: NewSongsReducer,
  randomSongs: RandomSongsReducer
});

export default entitiesReducer;
