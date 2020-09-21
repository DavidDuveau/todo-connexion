import React, { Component } from "react";

class SubscribeButton extends Component {
  render() {
    const { handleClickSubscribe } = this.props;
    return (
      <div>
        <button type="submit" onClick={handleClickSubscribe}>
          <i className="fas fa-user-plus"></i>
        </button>
      </div>
    );
  }
}
export default SubscribeButton;
