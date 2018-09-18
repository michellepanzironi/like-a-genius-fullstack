import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  componentWillUnmount() {
    this.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user).then(this.props.closeModal);
  }

  handleGuest(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, idx) => {
          return (
            <li key={`${idx}`} className="session-error-item">
              {error}
            </li>
          );
        })}
      </ul>
    );
  }

  clearErrors() {
    this.props.clearErrors([]);
  }

  render () {
    let bottomFormLink;
    if (this.props.buttonText === 'SIGN IN') {
      bottomFormLink = <Link to=''>CREATE AN ACCOUNT</Link>
    }

    return (
      <div className="modal is-open">
        <h2 className="form-section-label">{this.props.buttonText}</h2>

        <div className="session-errors-container">
          {this.renderErrors()}
        </div>

        <form
          className="modal-form"
          onSubmit={this.handleSubmit}>

          <input
            type="text"
            onChange={this.update('username')}
            value={this.state.username}
            placeholder="Username"
            className="session-input" >
          </input>
          <br />
          <input
            type="password"
            onChange={this.update('password')}
            value={this.state.password}
            placeholder="Password"
            className="session-input" >
          </input>
          <button onClick={this.handleSubmit}>
            {this.props.buttonText}
          </button>
          <button
            className="other-form-link"
            onClick={this.props.openModal}>
            {this.props.otherFormText}
          </button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
