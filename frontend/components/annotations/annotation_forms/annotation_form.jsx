import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let annotation = merge(
      {},
      this.state,
      { song_id: this.props.song.id},
      { lyric_substring: this }
    )
  }

  update(field) {
    return(e => {
      this.setState({ [field]: e.currentTarget.value });
    });
  }

  render() {

  }

}

export default withRouter(AnnotationForm);
