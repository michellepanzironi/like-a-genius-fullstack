import { connect } from 'react-redux';
import React from 'react';
import { createSong, receiveSongErrors } from '../../../actions/song_actions';
import SongForm from './song_form';
import { withRouter } from 'react-router';

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

export default withRouter(connect(msp, mdp)(SongForm));
