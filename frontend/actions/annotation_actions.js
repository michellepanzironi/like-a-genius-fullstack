import * as AnnotationApiUtils from '../util/annotation_api_util';

export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';
export const RECEIVE_ANNOTATIONS = 'RECEIVE_ANNOTATIONS';

export const receiveAnnotation = annotation => {
  return ({
    type: RECEIVE_ANNOTATION,
    annotation
  });
};

export const receiveAnnotations = data => {
  return ({
    type: RECEIVE_ANNOTATIONS,
    data
  });
};

export const fetchAnnotation = id => dispatch => {
  return AnnotationApiUtils.fetchAnnotation(id).then(annotation => {
    return dispatch(receiveAnnotation(annotation));
  });
};

export const createAnnotation = formData => dispatch => {
  return AnnotationApiUtils.createAnnotation(formData).then(annotation => {
    return dispatch(receiveAnnotation(annotation));
  });
};
