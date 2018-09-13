export const OPEN_MODAL = 'OPEN MODAL';
export const OPEN_ANNOTATION_MODAL = 'OPEN_ANNOTATION_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const openAnnotationModal = data => ({
  type: OPEN_ANNOTATION_MODAL,
  data
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});
