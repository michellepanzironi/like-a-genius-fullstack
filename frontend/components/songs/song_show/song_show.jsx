import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ArtistBar from '../../artists/artist_bar';
import AnnotationFormContainer from '../../annotations/annotation_form/ann_form_container';
import Emoji from '../../emoji';
import Parser from 'html-react-parser';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selection: null };
    this.styleAnnotations = this.styleAnnotations.bind(this);
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

  styleAnnotations(annArr, lyrics) {
    let lyricsDiv = `<div id="lyrics">${lyrics}<div>`;

    annArr.forEach((annotation, idx) => {
      let sublyric = annotation.sublyric;
      let sublyricSpan = `<span className="sublyric" key=${idx}>${sublyric}</span>`;
      lyricsDiv = lyricsDiv.replace(sublyric, sublyricSpan);
    });

    let parsedSpan = Parser(lyricsDiv);
    console.log(parsedSpan);
    return parsedSpan;
  }


  render() {
    let lyricString = this.props.song.lyrics;
    let annArr = this.props.annotations;
    let styledLyrics = this.styleAnnotations(annArr, lyricString);
    // console.log(styledLyrics);
    // this.styleAnnotations(annArr);



    let formHeader;
    if (typeof this.props.currentUser.id === 'undefined') {
      formHeader = (
        <h3  className="sidebar-section-head">PLEASE SIGN IN TO  <Emoji symbol="◥" className="pointing-to-signin"/><br /> ADD AN ANNOTATION</h3>
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

              { styledLyrics }

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
