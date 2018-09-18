import { connect } from 'react-redux';
import SongShow from './song_show';
import {
  fetchSong,
  fetchSongs,
  deleteSong } from '../../../actions/song_actions';
import { fetchArtist } from '../../../actions/artist_actions';


const msp = (state, ownProps) => {
  return ({
    id: ownProps.match.params.songId,
    song: state.entities.songs[ownProps.match.params.songId] || { }
  });
};

const mdp = dispatch => {
  return ({
    fetchSong: songId => dispatch(fetchSong(songId)),
    fetchSongs: () => dispatch(fetchSongs()),
    deleteSong: id => dispatch(deleteSong(id)),
    fetchArtist: artistId => dispatch(fetchArtist(artistId))
  });
};

export default connect(msp, mdp)(SongShow);