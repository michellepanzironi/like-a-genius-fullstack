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
    session: []
  }
};

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middleware.push(logger);
}


const configureStore = (preloadedState = defaultState) => {
  return (
    createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
    )
  );
};

export default configureStore;
