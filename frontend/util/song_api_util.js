export const fetchSongs = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/songs',
  });
};

export const fetchNewestSongs = data => {
  return $.ajax({
    method: 'GET',
    url: '/api/songs/newest',
    data: { data }
  });
};

export const fetchRandomSongs = data => {
  return $.ajax({
    method: 'GET',
    url: '/api/songs/random',
    data: { data }
  });
};

export const fetchSong = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/songs/${id}`
  });
};

export const createSong = formData => {
  return $.ajax({
    method: 'POST',
    url: '/api/songs',
    data: formData,
    contentType: false,
    processData: false
  });
};

export const updateSong = song => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/songs/${song.id}`,
    data: { song }
  });
};

export const deleteSong = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/songs/${id}`
  });
};

// export const searchSongs = search => {
//   return $.ajax({
//     method: 'GET',
//     url: '/api/songs',
//
//   })
// }
