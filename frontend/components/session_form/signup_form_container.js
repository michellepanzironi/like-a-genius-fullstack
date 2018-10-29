import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';

const msp = state => ({
  buttonText: 'SIGN UP',
  errors: state.errors.session,
  otherFormText: 'ALREADY HAVE AN ACCOUNT? SIGN IN HERE'
});

const mdp = dispatch => ({
  action: user => dispatch(signup(user)),
  openModal: () => dispatch(openModal('SIGN IN')),
  closeModal: () => dispatch(closeModal()),
  clearErrors: (clear) => dispatch(receiveErrors(clear)),
});

export default withRouter(connect(msp, mdp)(SessionForm));
