import React from 'react';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.annotation);
    return (
      <div className="annotation-show">
        {this.props.ann.body}
      </div>
    )
  }
}

export default AnnotationShow;
