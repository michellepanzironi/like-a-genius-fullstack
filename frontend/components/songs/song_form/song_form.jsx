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
      <div className="background">
        <div className="foreground">
          <div className="song-form-container">
            <h1 className="song-form-section-label">
              {this.props.formType}
            </h1>
            <form onSubmit={this.handleSubmit} id="song-form">

              <input
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
                placeholder="Title" />

              <br/>
              <input
                type="text"
                value={this.state.artist}
                onChange={this.update('artist')}
                placeholder="Artist" />

              <br/>
              <input
                type="text"
                value={this.state.artist.img_url}
                onChange={this.update('')}
                placeholder="Artist image url" />

              <br/>
              <input
                type="text"
                value={this.state.album}
                onChange={this.update('album')}
                placeholder="Album title" />

              <br/>
              <input
                type="text"
                value={this.state.album.img_url}
                onChange={this.update('')}
                placeholder="Album cover url" />

              <br/>
              <div className="textarea-wrapper">
                <textarea
                  rows="10"
                  value={this.state.lyrics}
                  onChange={this.update('lyrics')}
                  placeholder="Lyrics" />
              </div>

              <button onClick={this.handleSubmit}>{this.props.formType}</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SongForm;
