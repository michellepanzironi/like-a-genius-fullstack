export const fetchSongs = data => {
  return $.ajax({
    method: 'GET',
    url: '/api/songs',
    data: { data }
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

export const createSong = song => {
  return $.ajax({
    method: 'POST',
    url: '/api/songs',
    song
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
