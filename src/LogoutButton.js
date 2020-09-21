import React, { Component } from "react";

class LogoutButton extends Component {
  submitLogout = (event) => {
    event.preventDefault();
    this.props.handleLogout(this.state);
  };

  render() {
    return (
      <div>
        <button type="submit" onClick={this.submitLogout}>
          <i className="fas fa-power-off"></i>
        </button>
      </div>
    );
  }
}
export default LogoutButton;
