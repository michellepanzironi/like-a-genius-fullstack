export const fetchArtists = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/artists'
  });
};

export const fetchNewestArtists = data => {
  return $.ajax({
    method: 'GET',
    url: '/api/artists/newest',
    data: { data }
  });
};

export const fetchArtist = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/artists/${id}`
  });
};

export const createArtist = formData => {
  return $.ajax({
    method: 'POST',
    url: `/api/artists/`,
    data: formData,
    contentType: false,
    processData: false
  });
};
