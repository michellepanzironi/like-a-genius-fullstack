import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: currentUser,
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const login = user => dispatch => {
  return SessionApiUtil.login(user).then(
    res => { dispatch(receiveCurrentUser(res)); },
    errors => { dispatch(receiveErrors(errors.responseJSON)); }
  );
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(
    res => { dispatch(logoutCurrentUser()); },
    errors => { dispatch(receiveErrors(errors.responseJSON)); }
  );
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user).then(
    res => { dispatch(receiveCurrentUser(res)); },
    errors => { dispatch(receiveErrors(errors.responseJSON)); }
  );
};
