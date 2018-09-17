import { connect } from 'react-redux';
import React from 'react';
import { createSong, receiveSongErrors } from '../../../actions/song_actions';
import SongForm from './song_form';

const msp = state => {
  const song = {
    title: '',
    artist: '',
    album: '',
    lyrics: '',
  };
  return ({
    errors: state.errors,
    formType: 'ADD SONG',
    song
  });
};

const mdp = dispatch => {
  return ({
    action: song => dispatch(createSong(song)),
    clearErrors: clear => dispatch(receiveSongErrors(clear))
  });
};

export default connect(msp, mdp)(SongForm);
