import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ArtistBar from '../../artists/artist_bar';
import AnnotationFormContainer from '../../annotations/annotation_form/ann_form_container';


class SongShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selection: null };
  }

  componentWillMount() {
    this.props.fetchSong(this.props.match.params.songId);
  }

  componentDidMount() {
    this.lyricsListener = document.getElementById('show-lyrics');
    this.lyricsListener.addEventListener('click', this.handleSelect.bind(this));
  }

  handleSelect(e) {
    let currentSelection;
    if (window.getSelection) {
        let sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          currentSelection = sel.toString();
        } else {
          currentSelection = null;
        }
    }
    this.setState({ selection: currentSelection });
  }


  render() {
    let lyrics = this.props.song.lyrics;

    let formHeader;
    if (typeof this.props.currentUser.id === 'undefined') {
      formHeader = (
        <h3  className="sidebar-section-head">PLEASE SIGN IN<br /> TO ADD ANNOTATION</h3>
      )
    } else {
      formHeader = (
        <h3  className="sidebar-section-head">HIGHLIGHT TEXT<br /> TO ADD ANNOTATION</h3>
      )
    }

    let annotationForm;
    if (this.state.selection) {
      annotationForm = (
        <div>
          <AnnotationFormContainer
            song={this.props.song}
            sublyric={this.state.selection}
            author={this.props.currentUser} />
        </div>
      )
    }

    return (
      <div className="background">
        <ArtistBar
          song={this.props.song}
          artist={this.props.song.artist} />
        <div className="foreground">
          <div id="show-lyrics">
            <div className="lyrics-container">
                <Link to={`/songs/${this.props.song.id}/edit`}>
                  <button className="purple-button">
                    Edit Song
                  </button>
                </Link>
              <div id="lyrics">
                { lyrics }
              </div>
            </div>
          </div>
          <div className="show-sidebar">
            <div className="annotation-section">
              {formHeader}
              {annotationForm}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SongShow);
