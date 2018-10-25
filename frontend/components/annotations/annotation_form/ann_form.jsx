import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      sublyric: '',
      author: this.props.authorId,
      song: this.props.songId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({ sublyric: this.props.sublyric });
  }

  componentDidMount() {
    console.log(this.state.sublyric);
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("annotation[song_id]", this.state.song);
    formData.append("annotation[author_id]", this.state.author);
    formData.append("annotation[sublyric]", this.props.lyricSubstring);
    formData.append("annotation[body]", this.state.body);

    this.props.createAnnotation(formData);
  }

  update(field) {
    return(e => {
      this.setState({ [field]: e.currentTarget.value });
    });
  }

  render() {
    let header;

    let submitButton;
    if (this.props.author) {
      <button onClick={this.handleSubmit}>Submit</button>
    } else {
      <button onClick={this.props.openSignin}>Submit</button>
    }

    return (
      <form onSubmit={this.handleSubmit} id="annotation-form">

        <textarea
          value={this.state.sublyric}
          className="annotation-form-substring"
          readOnly>
        </textarea>

        <textarea
          className="annotation-form-textarea"
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
