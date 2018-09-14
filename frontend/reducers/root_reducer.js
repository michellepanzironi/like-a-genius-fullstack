import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducers/entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './error_reducers/errors_reducer';
import { UIReducer } from './modal_reducers/ui_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  ui: UIReducer,
  errors: errorsReducer
});

export default rootReducer;
