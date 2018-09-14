export const fetchArtists = data => {
  return $.ajax({
    method: 'GET',
    url: '/api/artists',
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
    data: formData
  });
};
