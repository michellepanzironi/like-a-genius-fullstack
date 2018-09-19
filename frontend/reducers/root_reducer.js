import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducers/entities_reducer';
import SessionReducer from './session_reducer';
import ErrorsReducer from './error_reducers/errors_reducer';
import { UIReducer } from './modal_reducers/ui_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  entities: EntitiesReducer,
  ui: UIReducer,
  errors: ErrorsReducer
});

export default rootReducer;
