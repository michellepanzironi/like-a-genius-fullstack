import React from 'react';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="annotation-show">
        {this.props.ann.body}
      </div>
    )
  }
}

export default AnnotationShow;
