import { connect } from 'react-redux';
import { AnnotationShow } from 'ann_show';

const msp = state => {
  return {
    annotations: state.entities.annotations
  };
};

const mdp = dispatch => {
  return {
    fetchAnnotations: sublyric => dispatch(fetchAnnotations(sublyric))
  };
};
