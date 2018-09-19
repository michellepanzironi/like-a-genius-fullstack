import { connect } from 'react-redux';
import React from 'react';
import { createSong, receiveSongErrors } from '../../../actions/song_actions';
import SongForm from './song_form';

const msp = state => {
  return ({
    errors: state.errors.songErrors,
    formType: 'ADD SONG'
  });
};

const mdp = dispatch => {
  return ({
    action: song => dispatch(createSong(song)),
    clearErrors: clear => dispatch(receiveSongErrors(clear))
  });
};

export default connect(msp, mdp)(SongForm);
