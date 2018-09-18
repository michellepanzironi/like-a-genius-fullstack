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

export const createSong = song => {
  return $.ajax({
    method: 'POST',
    url: '/api/songs',
    data: { song }
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
