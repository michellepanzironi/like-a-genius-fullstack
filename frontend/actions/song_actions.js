import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_NEWEST_SONGS = 'RECEIVE_NEWEST_SONGS';
export const RECEIVE_RANDOM_SONGS = 'RECEIVE_RANDOM_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';

export const receiveAllSongs = ({ songs, artists }) => {
  return ({
    type: RECEIVE_ALL_SONGS,
    songs,
    artists
  });
};

export const receiveNewestSongs = songs => {
  return ({
    type: RECEIVE_NEWEST_SONGS,
    songs
  });
};

export const receiveRandomSongs = songs => {
  return ({
    type: RECEIVE_RANDOM_SONGS,
    songs
  });
};

export const receiveSong = song => {
  return ({
    type: RECEIVE_SONG,
    song
  });
};

export const removeSongs = songId => {
  return ({
    type: REMOVE_SONGS,
    songId
  });
};

export const receiveSongErrors = errors => {
  return ({
    type: RECEIVE_SONG_ERRORS,
    errors
  });
};

//thunks

export const fetchSongs = () => dispatch => {
  return SongApiUtil.fetchSongs().then(
    songs => dispatch(receiveAllSongs(songs)),
    errors => dispatch(receiveSongErrors(errors.responseJSON))
  );
};

export const fetchNewestSongs = data => dispatch => {
  return SongApiUtil.fetchNewestSongs(data).then(
    songs => dispatch(receiveNewestSongs(songs)),
    errors => dispatch(receiveSongErrors(errors.responseJSON))
  );
};

export const fetchRandomSongs = data => dispatch => {
  return SongApiUtil.fetchRandomSongs(data).then(
    songs => dispatch(receiveRandomSongs(songs)),
    errors => dispatch(receiveSongErrors(errors.responseJSON))
  );
};

export const fetchSong = id => dispatch => {
  return SongApiUtil.fetchSong(id).then(
    song => dispatch(receiveSong(song)),
    errors => dispatch(receiveSongErrors(errors.responseJSON))
  );
};

export const createSong = id => dispatch => {
  return SongApiUtil.createSong(id).then(
    song => dispatch(receiveSong(song)),
    errors => dispatch(receiveSongErrors(errors.responseJSON))
  );
};

export const updateSong = id => dispatch => {
  return SongApiUtil.updateSong(id).then(
    song => dispatch(receiveSong(song)),
    errors => dispatch(receiveSongErrors(errors.responseJSON))
  );
};

export const deleteSong = id => dispatch => {
  return SongApiUtil.deleteSong(id).then(
    song => dispatch(removeSong(songId)),
    errors => dispatch(receiveSongErrors(errors.responseJSON))
  );
};
