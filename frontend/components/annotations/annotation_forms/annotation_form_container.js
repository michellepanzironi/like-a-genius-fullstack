import { connect } from 'react-redux';
import { fetchSong } from '../../../actions/song_actions';
import {
  createAnnotation,
  receiveAnnotationErrors
} from '../../../actions/annotation_actions';
import AnnotationForm from './annotation_form';

const msp = (state, ownProps) => {
  let songId = ownProps.match.params.songId;

  return {
    user: state.entities.users[state.session.id] || {},
    song: state.entities.songs[songId] || {},
    currentSubstring: '',
    errors: state.errors.annotationErrors
  };
};


const mdp = dispatch => {
  return {
    fetchSong: songId => dispatch(fetchSong(songId)),
    createAnnotation: (annotation, songId, currentSubstring) => {
      return dispatch(createAnnotation(annotation, songId, currentSubstring));
    },
    clearErrors: clear => { dispatch(receiveAnnotationErrors(clear)); }
  };
};

export default connect(msp, mdp)(AnnotationForm);
