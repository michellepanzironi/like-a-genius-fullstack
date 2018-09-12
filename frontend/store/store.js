import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const defaultState = {
  session: {
    id: null
  },
  entities: {
    users: {},
  },
  errors: {
    session: ["Invalid credentials"]
  }
};

const configureStore = (preloadedState = defaultState) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
};

export default configureStore;
