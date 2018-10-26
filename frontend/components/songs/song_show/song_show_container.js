import { connect } from 'react-redux';
import SongShow from './song_show';
import {
  fetchSong,
  fetchSongs,
  deleteSong } from '../../../actions/song_actions';
import { fetchArtist } from '../../../actions/artist_actions';


const msp = (state, ownProps) => {
  const song = state.entities.songs[ownProps.match.params.songId] || { };
  const currentUser = state.entities.users[state.session.id] || { };
  return ({
    id: ownProps.match.params.songId,
    song,
    currentUser
  });
};

const mdp = dispatch => {
  return ({
    fetchSong: songId => dispatch(fetchSong(songId)),
    fetchSongs: () => dispatch(fetchSongs()),
    deleteSong: id => dispatch(deleteSong(id)),
    fetchArtist: artistId => dispatch(fetchArtist(artistId)),
  });
};

export default connect(msp, mdp)(SongShow);
