import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';

const msp = state => ({
  buttonText: 'SIGN IN',
  errors: state.errors.session,
  otherFormText: 'CREATE AN ACCOUNT'
});

const mdp = dispatch => ({

  action: user => dispatch(login(user)),
  openModal: () => dispatch(openModal('SIGN UP')),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(msp, mdp)(SessionForm));
