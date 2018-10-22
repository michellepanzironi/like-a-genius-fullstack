import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ArtistBar from '../../artists/artist_bar';
import AnnotationFormContainer from '../../annotations/annotation_form/annotation_form_container';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
    this.highlightedText = this.highlightedText.bind(this);
    this.highlight = '';
  }

  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId);
  }

  getLyrics() {
    return this.props.song.lyrics;
  }

  highlightedText() {
    if (window.getSelection) {
      this.highlight = window.getSelection().toString();
    }
  }

  render() {
    let annotationForm;
    if (this.highlightedText) {
      console.log(this.highlight);
      annotationForm = (
        <AnnotationFormContainer
          song={this.props.song}
          lyricSubstring={this.highlighted}
          currentUser={this.props.currentUser} />
      );
    }

    return (
      <div className="background">
        <ArtistBar
          song={this.props.song}
          artist={this.props.song.artist} />
        <div className="foreground">
          <div className="show-lyrics">
            <div className="lyrics-container">
                <Link to={`/songs/${this.props.song.id}/edit`}>
                  <button className="purple-button">
                    Edit Song
                  </button>
                </Link>
              <p>{this.props.song.lyrics}</p>
            </div>
          </div>
          <div className="show-sidebar">
            <h3  className="sidebar-section">HIGHLIGHT TEXT <br /> TO ADD ANNOTATION</h3>
            { annotationForm }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SongShow);
