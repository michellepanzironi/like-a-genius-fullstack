import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("annotation[this.song_id]", this.props.song.id);
    formData.append("annotation[author_id]", this.props.currentUser.id);
    formData.append("annotation[lyric_substring]", this.props.lyricSubstring);
    formData.append("annotation[body]", this.state.body);

    this.props.createAnnotation(formData).then(payload => {
      //render new annotation in component
    })
  }

  update(field) {
    return(e => {
      this.setState({ [field]: e.currentTarget.value });
    });
  }

  render() {
    let header;


    let submitButton;
    if (this.props.currentUser) {
      <button onClick={this.handleSubmit}>Submit</button>
    } else {
      <button onClick={this.props.openSignin}>Submit</button>
    }

    return (
      <form onSubmit={this.handleSubmit} id="annotation-form">
        
        <input
          type="text"
          value={this.props.lyricSubstring}
          className="annotation-form-substring"
          readOnly>
        </input>

        <textarea
          className="annotation-textarea"
          value={this.state.body}
          onChange={this.update('body')}
          placeholder="What this line means..." >
        </textarea>

        { submitButton }
      </form>
    )
  }

}

export default withRouter(AnnotationForm);
