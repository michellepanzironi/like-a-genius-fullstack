import React from 'react';
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
    //fetch associated annotations.then(annotations.forEach search lyrics str)
    //style and comp-link lyrics with matching annotations
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
    console.log(this.state.selection);
    console.log("handleSelect fired");
  }


  render() {
    let lyrics = this.props.song.lyrics;
    let annotationForm;
    if (this.state.selection) {
      annotationForm = (
        <div>
          <AnnotationFormContainer
            song={this.props.song}
            sublyric={this.state.selection} />
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
              <h3  className="sidebar-section-head">HIGHLIGHT TEXT<br /> TO ADD ANNOTATION</h3>
              {annotationForm}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SongShow);
