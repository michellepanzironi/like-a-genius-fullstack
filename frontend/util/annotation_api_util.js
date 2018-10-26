export const fetchAnnotation = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/annotations/${id}`
  });
};

export const createAnnotation = formData => {
  return $.ajax({
    method: 'POST',
    url: `/api/annotations/`,
    data: formData,
    contentType: false,
    processData: false
  });
};
