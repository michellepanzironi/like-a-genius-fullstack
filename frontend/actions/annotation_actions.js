import * as AnnotationApiUtils from '../util/annotation_api_utils';

export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';
export const RECEIVE_NEW_ANNOTATION = 'RECEIVE_NEW_ANNOTATION';
export const RECEIVE_ANNOTATION_ERRORS = 'RECEIVE_ANNOTATION_ERRORS';

export const receiveAnnotation = ({ annotation, current_user }) => {
  return ({
    type: RECEIVE_ANNOTATION,
    annotation,
    current_user
  });
};

export const receiveNewAnnotation = data => {
  return ({
    type: RECEIVE_NEW_ANNOTATION,
    data
  });
};

export const receiveAnnotationErrors = errors => {
  return ({
    type: RECEIVE_ANNOTATION_ERRORS,
    errors
  });
};

export const fetchAnnotation = id => {
  return AnnotationApiUtils.fetchAnnotation(id).then(payload => {
    return dispatch(receiveAnnotation(payload));
  },
  errors => {
    return dispatch(receiveAnnotationErrors(errors.responseJSON));
  });
};

export const createAnnotation = (annotation, songId, lyric_substring) => dispatch => {
  return AnnotationApiUtils.createAnnotation(annotation, songId, lyric_substring).then(annotation => {
    return dispatch(receiveAnnotation(annotation));
  },
  errors => {
    return dispatch(receiveAnnotationErrors(errors.resporesponseJSON));
  });
};
