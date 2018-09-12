import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: currentUser,
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const login = user => dispatch => {
  return SessionApiUtil.login(user).then(
    res => { dispatch(receiveCurrentUser(res)); },
    errors => { dispatch(receiveErrors(errors)); }
  );
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(
    res => { dispatch(logoutCurrentUser()); },
    errors => { dispatch(receiveErrors(errors)); }
  );
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user).then(
    res => { dispatch(receiveCurrentUser(res)); },
    errors => { dispatch(receiveErrors(errors)); }
  );
};
