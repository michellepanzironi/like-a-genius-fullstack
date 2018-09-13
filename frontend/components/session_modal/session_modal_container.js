import { connect } from 'react-redux';
import SessionModal from './session_modal';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => {
  return  {
      modal: state.ui.modal
  };
};

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(SessionModal);
