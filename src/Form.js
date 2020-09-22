import React, { Component } from "react";

class Form extends Component {
  initialState = {
    task: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value, //recup valeur de l'attribut css name de input ie: firstname, lastname, job
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    this.props.handleSubmitTask(this.state.task);
    this.setState(this.initialState);
  };

  render() {
    const { task } = this.state;
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label htmlFor="task">
            Nouvelle tâche
            <input
              type="text"
              name="task"
              id="task"
              value={task}
              onChange={this.handleChange}
            />
          </label>

          <input type="submit" value="Nouvelle tâche" />
        </form>
      </div>
    );
  }
}

export default Form;
