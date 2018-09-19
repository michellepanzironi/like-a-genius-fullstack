import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import artistErrorsReducer from './artist_errors_reducer';
import songErrorsReducer from './song_errors_reducer';

const ErrorsReducer = combineReducers({
  session: sessionErrorsReducer,
  artistErrors: artistErrorsReducer,
  songErrors: songErrorsReducer,
});

export default ErrorsReducer;
