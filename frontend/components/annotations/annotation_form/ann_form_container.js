import { connect } from 'react-redux';
import { createAnnotation } from '../../../actions/annotation_actions';
import AnnotationForm from './ann_form';

const msp = (state, ownProps) => {
  return {
    lyricSubstring: '',
  };
};


const mdp = dispatch => {
  return {
    createAnnotation: formData => {
      return dispatch(createAnnotation(formData));
    },
  };
};

export default connect(msp, mdp)(AnnotationForm);
