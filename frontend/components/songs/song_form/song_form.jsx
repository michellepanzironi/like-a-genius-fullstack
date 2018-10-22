import React from 'react';

class SongForm extends React.Component {
  constructor(props) {
    super(props);
    const emptySong = {
      title: '',
      artist: '',
      album_title: '',
      lyrics: '',
      artist_imageFile: '',
      artist_imageUrl: '',
      album_imageFile: '',
      album_imageUrl: '',
    };
    this.state = this.props.song || emptySong;
    this.artist = this.state.artist;
    this.album = this.state.album;
    this.album_cover = this.state.album_cover
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFileArtist = this.updateFileArtist.bind(this);
    this.updateFileAlbum = this.updateFileAlbum.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.fileReaderLoadedArtist = this.fileReaderLoadedArtist.bind(this);
    this.fileReaderLoadedAlbum = this.fileReaderLoadedAlbum.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  componentDidMount() {
    this.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("song[title]", this.state.title);
    formData.append("artist[name]", this.state.artist);
    formData.append("album[title]", this.state.album_title);
    formData.append("song[lyrics]", this.state.lyrics);

    if (this.props.formType === 'ADD SONG') {
      formData.append("artist[photo]", this.state.artist_imageFile);
      formData.append("album[photo]", this.state.album_imageFile);
    }

    this.props.action(formData).then(res => {
      this.props.history.push(`/songs/${res.song.id}`);
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateFileArtist(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => this.fileReaderLoadedArtist(file, fileReader);
    if(file) fileReader.readAsDataURL(file);
  }

  updateFileAlbum(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => this.fileReaderLoadedAlbum(file, fileReader);
    if(file) fileReader.readAsDataURL(file);
  }

  fileReaderLoadedArtist(file, fileReader) {
    this.setState({ artist_imageFile: file, artist_imageUrl: fileReader.result });
  }

  fileReaderLoadedAlbum(file, fileReader) {
    this.setState({ album_imageFile: file, album_imageUrl: fileReader.result });
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className="session-errors">
          {this.props.errors.map((error, idx) => {
            return (
              <li key={`${idx}`} className="session-error-item">
                {error}
              </li>
            );
          })}
        </ul>
      );
    }
  }

  clearErrors() {
    this.setState({ errors: [] })
  }

  render () {
    let imageInputArtist;
    let imageInputAlbum;
    if (this.props.formType === 'ADD SONG') {
      imageInputArtist = (
        <div className="form-field-container">
          <label>
            <div className="form-field-label">Artist Photo</div>
            <input
              type="file"
              onChange={this.updateFileArtist}
              className="song-form-image-input" />
          </label>
          <br/>
        </div>
      );
      imageInputAlbum = (
        <div className="form-field-container">
          <br/>
          <label>
            <div className="form-field-label">Album Art</div>
            <input
              type="file"
              onChange={this.updateFileAlbum}
              className="song-form-image-input" />
          </label>
        </div>
      );
    }

    let imageClassArtist = this.state.artist_imageUrl === '' ? 'hidden' : 'artist-form-image';
    let imageClassAlbum = this.state.album_imageUrl === '' ? 'hidden' : 'album-form-image';
    return (
      <div className="background">
        <div className="foreground">
          <div className="song-form-container">
            <h1 className="song-form-section-label">
              {this.props.formType}
            </h1>
            <form onSubmit={this.handleSubmit} id="song-form">

              <span className="session-errors-container">
                {this.renderErrors()}
              </span>

              <label>
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="Title" />
              </label>
              <br/>

              <label>
                <input
                  type="text"
                  value={this.artist.name}
                  onChange={this.update('artist')}
                  placeholder="Artist" />
              </label>
              { imageInputArtist }
              <br/>

              <label>
                <input
                  type="text"
                  value={this.album}
                  onChange={this.update('album_title')}
                  placeholder="Album title" />
              </label>
              { imageInputAlbum }
              <br/>

              <div className="textarea-wrapper">
                <label>
                  <textarea
                    rows="10"
                    value={this.state.lyrics}
                    onChange={this.update('lyrics')}
                    placeholder="Lyrics" />
                </label>
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
