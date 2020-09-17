import React, { Component } from "react";

class Login extends Component {
  render() {
    const { login } = this.props;
    return <p>{login.username} : connecté</p>;
  }
}
export default Login;
