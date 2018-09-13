import Greeting from './greeting.jsx';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openSignin: () => {
      return dispatch(openModal('SIGN IN'));
    },
    openSignup: () => dispatch(openModal('SIGN UP'))
  };
};

export default connect(msp, mdp)(Greeting);
