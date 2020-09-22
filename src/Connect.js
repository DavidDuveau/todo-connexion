import React, { Component } from "react";

class Connect extends Component {
  initialState = {
    userName: "",
    passWord: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value, //recup valeur de l'attribut css name de input ie: firstname, lastname, job
    });
  };

  submitConnection = (event) => {
    event.preventDefault();
    this.props.handleSubmitConnect(this.state.userName, this.state.passWord);
    this.setState(this.initialState);
  };

  render() {
    const { userName, passWord } = this.state;

    return (
      <fieldset>
        <legend>Connexion</legend>
        <form onSubmit={this.submitConnection}>
          <label htmlFor="userName">Nom</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={userName}
            onChange={this.handleChange}
          />

          <label htmlFor="passWord">Mot de passe</label>
          <input
            type="password"
            name="passWord"
            id="passWord"
            value={passWord}
            onChange={this.handleChange}
          />
          <input type="submit" value="Connexion" />
        </form>
      </fieldset>
    );
  }
}

export default Connect;
