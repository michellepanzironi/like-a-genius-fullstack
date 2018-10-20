import { merge } from 'lodash';
import { RECEIVE_SONG } from '../../actions/song_actions';
import { RECEIVE_ANNOTATION } from '../../actions/annotation_actions';

const AnnotationsReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  switch (action.type) {
    case RECEIVE_SONG:
      return merge({}, previousState, action.annotations);
    case RECEIVE_ANNOTATION:
      return merge({}, previousState, { [action.annotation.id]: action.annotation });
    default:
      return previousState;
  }
};

export default AnnotationsReducer;
