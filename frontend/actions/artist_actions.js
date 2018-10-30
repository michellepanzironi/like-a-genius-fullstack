import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTIST_ERRORS = 'RECEIVE_ARTIST_ERRORS';
export const RECEIVE_NEWEST_ARTISTS = 'RECEIVE_NEWEST_ARTISTS';

export const receiveAllArtists = artists => {
  return {
    type: RECEIVE_ALL_ARTISTS,
    artists
  };
};

//add songs to the arg and return obj after you create them
export const receiveArtist = ({ artist, songs, albums }) => {
  return {
    type: RECEIVE_ARTIST,
    artist,
    songs,
    albums
  };
};

export const receiveNewestArtists = artists => {
  return ({
    type: RECEIVE_NEWEST_ARTISTS,
    artists
  });
};

export const receiveArtistErrors = errors => {
  return {
    type: RECEIVE_ARTIST_ERRORS,
    errors
  };
};

export const fetchArtists = () => dispatch => {
  return ArtistApiUtil.fetchArtists().then(
    artists => {
      return dispatch(receiveAllArtists(artists));
    },
    errors => {
      return dispatch(receiveArtistErrors(errors.responseJSON));
    }
  );
};

export const fetchArtist = id => dispatch => {
  return ArtistApiUtil.fetchArtist(id).then(
    payload => {
      return dispatch(receiveArtist(payload));
    },
    errors => {
      return dispatch(receiveArtistErrors(errors.responseJSON));
    }
  );
};

export const fetchNewestArtists = data => dispatch => {
  return ArtistApiUtil.fetchNewestArtists(data).then(
    artists => dispatch(receiveNewestArtists(artists))
  );
};

export const createArtist = artist => dispatch => {
  return ArtistApiUtil.createArtist(artist).then(
    artist => {
      return dispatch(receiveArtist(artist));
    },
    errors => {
      return dispatch(receiveArtistErrors(errors.responseJSON));
    }
  );
};
