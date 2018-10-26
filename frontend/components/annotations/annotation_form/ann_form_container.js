import { connect } from 'react-redux';
import { createAnnotation } from '../../../actions/annotation_actions';
import AnnotationForm from './ann_form';
import { openModal } from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
  return { author: state.entities.users[state.session.id] || {} };
};


const mdp = dispatch => {
  return {
    createAnnotation: formData => {
      return dispatch(createAnnotation(formData));
    },
    openSignin: () => {
      return dispatch(openModal('SIGN IN'));
    },
  };
};

export default connect(msp, mdp)(AnnotationForm);
