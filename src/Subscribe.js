import React, { Component } from "react";

class Subscribe extends Component {
  initialState = {
    id: null,
    nom: "",
    mdp: "",
    mdp_secure: "",
    tasks: [],
  };
  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value, //recup valeur de l'attribut css name de input ie: firstname, lastname, job
    });
  };

  checkPassword = (mdp, mdp_secure) => {
    if (mdp_secure !== mdp) {
      console.log("notgood");
    }
    console.log("ok");
  };

  render() {
    const { nom, mdp, mdp_secure } = this.state;
    console.log(this.state);
    return (
      <div>
        <form>
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            name="nom"
            id="nom"
            value={nom}
            onChange={this.handleChange}
          />

          <label htmlFor="nom">Mot de passe</label>
          <input
            type="text"
            name="mdp"
            id="mdp"
            value={mdp}
            onChange={this.handleChange}
          />

          <label htmlFor="mdp_secure">Confirmer mot de passe</label>
          <input
            type="text"
            name="mdp_secure"
            id="mdp_secure"
            value={mdp_secure}
            onChange={this.handleChange}
          />

          <input type="submit" value="Valider" />
        </form>
      </div>
    );
  }
}
export default Subscribe;
