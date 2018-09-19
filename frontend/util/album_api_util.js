export const fetchAlbums = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/albums'
  });
};

export const fetchAlbum = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/albums/${id}`
  });
};

export const createAlbum = formData => {
  return $.ajax({
    method: 'POST',
    url: `/api/albums/`,
    data: formData,
    contentType: false,
    processData: false
  });
};
