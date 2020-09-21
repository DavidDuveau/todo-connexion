import React, { Component } from "react";

class ShowLoggedin extends Component {
  render() {
    const { login } = this.props;
    return (
      <p>
        {" "}
        <i className="fa fa-user icon"></i>
        {" " + login.username}
      </p>
    );
  }
}
export default ShowLoggedin;
