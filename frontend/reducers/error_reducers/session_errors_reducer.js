import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { merge } from 'lodash';

const _nullErrors = [];

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge([], state, action.errors);
    case RECEIVE_CURRENT_USER:
      return _nullErrors; //clears errors
    default:
      return state;
  }
};

export default sessionErrorsReducer;
