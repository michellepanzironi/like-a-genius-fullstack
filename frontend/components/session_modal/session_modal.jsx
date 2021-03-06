import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

const SessionModal = props => {
  if (!props.modal) {
    return null;
  }

  let renderComponent;
  switch (props.modal) {
    case 'SIGN IN':
      renderComponent = <LoginFormContainer />;
      break;
    case 'SIGN UP':
      renderComponent = <SignupFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div
      className="session-modal-background"
      onClick={props.closeModal}>
      <div className="session-modal-child" onClick={e => e.stopPropagation()}>
        { renderComponent }
      </div>
    </div>
  );
};

export default SessionModal;
