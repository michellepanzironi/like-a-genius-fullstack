import React from 'react';

class SongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.song;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSong = this.navigateToSong.bind(this);
  }

  componentDidMount() {
    this.clearErrors();
  }

  navigateToSong(songId) {
    this.props.history.push(`songs/${songId}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(res => {
      this.navigateToSong(res.song.id);
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderErrors(type) {
    let errors = this.props.errors.songErrors;
    let thisError = '';
    errors.forEach(error => {
      if (error.includes(type)) {
        thisError = error;
      }
    });

    return(
      <span>{thisError}</span>
    );
  }

  clearErrors() {
    this.props.clearErrors([]);
  }

  render () {
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>

          <label>Artist
            <input
              type="text"
              value={this.state.artist}
              onChange={this.update('artist')} />
          </label>

          <label>Album
            <input
              type="text"
              value={this.state.album}
              onChange={this.update('album')} />
          </label>

          <label>Lyrics
            <textarea
              value={this.state.lyrics}
              onChange={this.update('lyrics')}/>
          </label>

          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default SongForm;
