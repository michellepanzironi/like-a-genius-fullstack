import { connect } from 'react-redux';
import React, { Component } from 'react';
import SongForm from './song_form';
import { fetchSong, updateSong, receiveSongErrors } from '../../../actions/song_actions';

const msp = (state, ownProps) => {
  const emptySong = {
    title: 'empty',
    artist_name: '',
    album_title: '',
    lyrics: '',
    artist_imageFile: '',
    artist_imageUrl: '',
    album_imageFile: '',
    album_imageUrl: '',
  };
  const song = state.entities.songs[ownProps.match.params.songId];


  return ({
    errors: state.errors,
    formType: 'UPDATE SONG',
    song
  });
};

const mdp = dispatch => {
  return ({
    fetchSong: id => dispatch(fetchSong(id)),
    action: song => dispatch(updateSong(song)),
    clearErrors: clear => dispatch(receiveSongErrors(clear))
  });
};

class EditSongFormContainer extends React.Component {
  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId);
  }

  clearErrors() {
    this.setState({ errors: [] });
  }

  render() {
    let { action, formType, song, artist, album } = this.props;
    return (
      <SongForm
        action={action}
        formType={formType}
        song={song}
        artist={artist}
        album={album} />
    );
  }
}


export default connect(msp, mdp)(EditSongFormContainer);
