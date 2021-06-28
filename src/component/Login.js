import React, { Component } from 'react'

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', password: '' }
  }

  handleValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  changeLogin = (e) => {
    e.preventDefault();

    this.props.isLoginCallback(true);
  }

  render() {
    return (
      <div>
        <h2>Login Page</h2>
        <form onSubmit={this.changeLogin}>
          <input type="email" name="name" onChange={this.handleValue} />
          <input type="password" name="password" onChange={this.handleValue} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
