import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';

const msp = state => ({
  buttonText: 'Log In',
  errors: state.errors.session
});

const mdp = dispatch => ({
  action: user => dispatch(login(user))
});

export default withRouter(connect(msp, mdp)(SessionForm));
