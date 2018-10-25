import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ArtistBar from '../../artists/artist_bar';
import AnnotationFormContainer from '../../annotations/annotation_form/ann_form_container';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
    this.selection = {};
  }

  componentWillMount() {
    this.props.fetchSong(this.props.match.params.songId);
  }

  componentDidMount() {
    this.lyricsListener = document.getElementById('lyrics');
    this.lyricsListener.addEventListener('mousedown', this.handleSelect.bind(this));
  }

  handleSelect(e) {
    this.selection = window.getSelection().toString();
    console.log(this.selection);
    console.log("handleSelect fired");
  }


  render() {
    let lyrics = this.props.song.lyrics;
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
              <div id="lyrics">
                { lyrics }
              </div>
            </div>
          </div>
          <div className="show-sidebar">
            <div className="annotation-section">
              <h3  className="sidebar-section-head">HIGHLIGHT TEXT <br /> TO ADD ANNOTATION</h3>
              <AnnotationFormContainer
                song={this.props.song}
                currentUser={this.props.currentUser}
                openModal={this.props.openSignin} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SongShow);
