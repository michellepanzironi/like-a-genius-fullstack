export const fetchAnnotation = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/annotations/${id}`
  });
};

export const createAnnotation = annotation => {
  return $.ajax({
    method: 'POST',
    url: `/api/annotations/`,
    data: { annotation }
  });
};
