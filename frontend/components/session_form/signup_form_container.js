import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';

const msp = state => ({
  buttonText: 'Sign Up',
  errors: state.errors.session
});

const mdp = dispatch => ({
  action: user => dispatch(signup(user))
});

export default withRouter(connect(msp, mdp)(SessionForm));
