import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import artistsReducer from './artists_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  artists: artistsReducer
});

export default entitiesReducer;
