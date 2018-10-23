import { connect } from 'react-redux';
import SongShow from './song_show';
import {
  fetchSong,
  fetchSongs,
  deleteSong } from '../../../actions/song_actions';
import { fetchArtist } from '../../../actions/artist_actions';
import { openModal } from '../../../actions/modal_actions';

const msp = (state, ownProps) => {
  return ({
    id: ownProps.match.params.songId,
    song: state.entities.songs[ownProps.match.params.songId] || { },
    currentUser: state.entities.users || {}
  });
};

const mdp = dispatch => {
  return ({
    fetchSong: songId => dispatch(fetchSong(songId)),
    fetchSongs: () => dispatch(fetchSongs()),
    deleteSong: id => dispatch(deleteSong(id)),
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
    openSignin: () => {
      return dispatch(openModal('SIGN IN'));
    },
  });
};

export default connect(msp, mdp)(SongShow);
