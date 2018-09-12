import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render () {
    return (
      <div>
        <h2>{this.props.buttonText}</h2>

        <ul className="session-form">
          {
            this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)
          }
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.update('username')}
            value={this.state.username} >
          </input>
          <input
            type="password"
            onChange={this.update('password')}
            value={this.state.password} >
          </input>
          <button>{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
