import React, { Component } from "react";

class Subscribe extends Component {
  initialState = {
    username: "",
    pwd: "",
    pwd_secure: "",
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
      this.setState({ pwd_secure: "" });
    } else {
      this.checkLoginUnique();
    }
  };

  checkLoginUnique = () => {
    let userExist = this.props.usersData.find(
      (element) => element.username === this.state.username
    );

    userExist !== undefined
      ? alert("Nom d'utilisateur déjà pris")
      : this.submitUser();
  };

  submitUser = () => {
    let newUser = {
      id: this.setId(),
      username: this.state.username,
      pwd: this.state.pwd,
      tasks: [],
    };
    this.props.addUser(newUser);
    this.setState(this.initialState);
    this.props.handleClickSubscribe();
  };

  //set id for new user
  setId = () => {
    let id = this.props.usersData.length + 1;
    return id;
  };

  handleSubmitUser = (event) => {
    event.preventDefault();
    this.checkPassword(this.state.pwd, this.state.pwd_secure);
  };

  render() {
    const { username, pwd, pwd_secure } = this.state;

    console.log(this.state);
    return (
      <div>
        <fieldset>
          <legend>Inscription</legend>
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

            <label htmlFor="pwd_secure">
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
        </fieldset>
      </div>
    );
  }
}
export default Subscribe;
