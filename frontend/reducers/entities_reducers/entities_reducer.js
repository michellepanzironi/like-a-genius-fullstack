import { combineReducers } from 'redux';

import UsersReducer from './users_reducer';
import ArtistsReducer from './artists_reducer';
import SongsReducer from './songs_reducer';
import NewSongsReducer from './new_songs_reducer';
import RandomSongsReducer from './random_songs_reducer';
import AnnotationsReducer from './annotations_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  artists: ArtistsReducer,
  songs: SongsReducer,
  newestSongs: NewSongsReducer,
  randomSongs: RandomSongsReducer,
  annotations: AnnotationsReducer
});

export default EntitiesReducer;
