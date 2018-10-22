import { connect } from 'react-redux';
import { fetchSong } from '../../../actions/song_actions';
import { createAnnotation } from '../../../actions/annotation_actions';
import AnnotationForm from './annotation_form';

const msp = (state, ownProps) => {
  return {
    lyricSubstring: '',
  };
};


const mdp = dispatch => {
  return {
    fetchSong: songId => dispatch(fetchSong(songId)),
    createAnnotation: formData => {
      return dispatch(createAnnotation(formData));
    },
  };
};

export default connect(msp, mdp)(AnnotationForm);
