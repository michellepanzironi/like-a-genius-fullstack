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
          <h1>Sup, {this.props.currentUser.name}</h1>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      header = (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Login</Link>
        </div>
      )
    }
    return (
      <div>
        { header }
      </div>
    )
  }
}

export default Greeting;
