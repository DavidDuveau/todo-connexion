import React, { Component } from "react";

class Subscribe extends Component {
  initialState = {
    id: null,
    username: "",
    pwd: "",
    pwd_secure: "",
    tasks: [],
  };
  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value, //recup valeur de l'attribut css name de input ie: firstname, lastname, job
    });
  };

  checkPassword = (pwd, pwd_secure) => {
    if (pwd_secure !== pwd) {
      alert("Mot de passe non confirmé!");
    } else {
      this.submitUser();
    }
  };

  submitUser = () => {
    this.props.addUser(this.state);
    this.setState(this.initialState);
    this.props.handleClickSubscribe();
  };

  //set id for new user
  setId = () => {};

  handleSubmitUser = (event) => {
    event.preventDefault();
    this.checkPassword(this.state.pwd, this.state.pwd_secure);
  };

  render() {
    const { username, pwd, pwd_secure } = this.state;
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmitUser}>
          <label htmlFor="username">
            Nom
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="pwd">
            Mot de passe
            <input
              type="text"
              name="pwd"
              id="pwd"
              value={pwd}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="mdp_secure">
            Confirmer mot de passe
            <input
              type="text"
              name="pwd_secure"
              id="pwd_secure"
              value={pwd_secure}
              onChange={this.handleChange}
            />
          </label>

          <input type="submit" value="Valider" />
        </form>
      </div>
    );
  }
}
export default Subscribe;
