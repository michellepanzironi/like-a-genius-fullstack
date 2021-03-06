import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let header;
    if (this.props.currentUser) {
      header = (
        <div>
          <div className="nav-name">
            {this.props.currentUser.username}
          </div>
          <button
            onClick={this.props.logout}
            className="nav-button">Log Out
          </button>
        </div>
      );
    } else {
      header = (
        <div>
          <button
            className="nav-button"
            onClick={this.props.openSignup}>
            SIGN UP
          </button>
          <button
            className="nav-button"
            onClick={this.props.openSignin}>
            SIGN IN
          </button>
        </div>
      )
    }
    return (
      <div className="nav-header">
        { header }
      </div>
    )
  }
}

export default Greeting;
