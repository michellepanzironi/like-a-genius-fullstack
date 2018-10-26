import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      sublyric: '',
      song: '',
      author: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({ sublyric: this.props.sublyric });
    
    this.setState({ author: this.props.author.username });
    this.setState({ song: this.props.song.title });
  }

  componentDidMount() {
    console.log(this.state.sublyric);
    console.log(this.state.author);
    console.log(this.state.song);
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("annotation[body]", this.state.body);
    formData.append("annotation[sublyric]", this.state.sublyric);
    formData.append("song[title]", this.state.song);
    formData.append("user[username]", this.state.author);

    this.props.createAnnotation(formData);
    setTimeout(() => {
      window.location.reload();
    },10);
  }

  update(field) {
    return(e => {
      this.setState({ [field]: e.currentTarget.value });
    });
  }

  render() {
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

        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }

}

export default withRouter(AnnotationForm);
