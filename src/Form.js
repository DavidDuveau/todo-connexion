import React, { Component } from "react";

class Form extends Component {
  initialState = {
    task: "",
    checked: false,
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value, //recup valeur de l'attribut css name de input ie: firstname, lastname, job
    });
  };

  handleCheck = () => {
    this.setState({
      isChecked: true,
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { task } = this.state;
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label htmlFor="task">Nouvelle tâche</label>
          <input
            type="text"
            name="task"
            id="task"
            value={task}
            onChange={this.handleChange}
          />

          <input type="submit" value="Nouvelle tâche" />
        </form>
      </div>
    );
  }
}

export default Form;
